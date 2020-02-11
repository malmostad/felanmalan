# frozen_string_literal: true

require 'rails_helper'

RSpec.describe EasyIncidentService do
  describe '#issue_status' do
    subject(:issue_status) { described_class.issue_status(external_id) }

    let(:external_id) { 599_407 }
    let(:url) do
      "#{EasyIncidentService::EASY_INCIDENT_BASE_URL}/arende/#{external_id}"
    end

    context 'when found' do
      before do
        stub_request(:get, url)
          .to_return(body: { 'IssueStatus' => 'Ej Registrerat' }
          .to_json)
      end

      it { expect(issue_status).to eq 'registered' }
    end

    context 'when not found' do
      before do
        stub_request(:get, url)
          .to_return(body: 'ID does not exist.')
      end

      it { expect { issue_status }.to raise_error(EasyIncidentNotFoundError) }
    end

    context 'when unrecognized error' do
      before do
        stub_request(:get, url)
          .to_return(body: 'random error')
      end

      it { expect { issue_status }.to raise_error(EasyIncidentError) }
    end

    context 'when unrecognized status' do
      let(:status) { 'Unrecognized' }
      let(:message) { "Unrecognized EasyIncident Status #{status}" }

      before do
        allow(Raven).to receive(:capture_message)
        stub_request(:get, url)
          .to_return(body: { 'IssueStatus' => status }
          .to_json)
      end

      it do
        issue_status
        expect(Raven).to have_received(:capture_message).with(message)
      end
    end
  end

  describe '#upload' do
    subject(:upload) { described_class.upload(photo) }

    let(:temp_id) { 12_345 }
    let(:data) { 'data' }
    let(:filename) { '568D93AD-D662-4ED7-B5D6-FC9ABD8577D8.jpeg' }
    let(:mime_type) { 'image/jpeg' }
    let(:photo) do
      Photo.new(data: data,
                mime_type: mime_type,
                filename: filename)
    end

    let(:url) do
      "#{EasyIncidentService::EASY_INCIDENT_BASE_URL}/upload"
    end

    context 'when upload successful' do
      before do
        stub_request(:post, url)
          .to_return(status: 201, body: { 'tempId' => temp_id }.to_json)
      end

      it { expect(upload).to eq temp_id }
    end

    context 'when tempId empty' do
      before do
        stub_request(:post, url)
          .to_return(status: 201, body: { 'tempId' => '' }.to_json)
      end

      it { expect { upload }.to raise_error(EasyIncidentUploadError) }
    end

    context 'when unsupported filetype' do
      let(:filename) { 'UnsportedType.timo' }

      let(:error) do
        'Please Upload image of type .jpg, .jpeg, .png, .gif, .bmp'
      end

      before do
        stub_request(:post, url)
          .to_return(status: 400, body: { 'error' => error }.to_json)
      end

      it { expect { upload }.to raise_error(EasyIncidentUploadError) }
    end
  end

  describe '#create' do
    subject(:create) { described_class.create(report) }

    let(:external_id) { 599_407 }
    # TODO: Implement Report
    let(:description) { 'description' }
    let(:latitude) { 55.6051458 }
    let(:longitude) { 13.003365 }
    let(:report) { 'REPORT' }

    let(:payload)  { {} }

    before do
      allow(described_class).to receive(:build_payload)
        .with(report).and_return(payload)
      allow(described_class).to receive(:post_issue)
        .with(payload).and_return(external_id)
    end

    it { expect(create).to eq external_id }
  end

  describe '#post_issue' do
    subject(:post_issue) { described_class.send :post_issue, payload }

    let(:payload) do
      '{"IssueRegistrator":"",'\
      '"IssueDescription":"Some pero",'\
      '"IssueEasting":"118699.0",'\
      '"IssueNorthing":"6164713.0",'\
      '"IssueDocuments":["79322","79323"],'\
      '"IssueRegisterContactEmail":"",'\
      '"IssueRegisterContactPhone":""}'
    end
    let(:external_id) { 599_467 }

    let(:url) do
      "#{EasyIncidentService::EASY_INCIDENT_BASE_URL}/arende"
    end

    context 'when successful' do
      before do
        stub_request(:post, url)
          .to_return(status: 200, body: { 'IssueId' => external_id }
          .to_json)
      end

      it { expect(post_issue).to eq external_id }
    end

    context 'when failure' do
      let(:message) { 'An error has occurred.' }

      before do
        stub_request(:post, url)
          .to_return(status: 500, body: { 'Message' => message }
          .to_json)
      end

      it do
        expect { post_issue }.to raise_error(EasyIncidentCreationFailureError)
      end
    end

    context 'when IssueId empty' do
      before do
        stub_request(:post, url)
          .to_return(status: 200, body: { 'IssueId' => '' }.to_json)
      end

      it do
        expect { post_issue }.to raise_error(EasyIncidentCreationFailureError)
      end
    end
  end
end
