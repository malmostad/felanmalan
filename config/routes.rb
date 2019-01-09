# frozen_string_literal: true

Rails.application.routes.draw do
  # devise_for :users, path: '', path_names: {
  #   sign_in: 'sign-in',
  #   sign_out: 'sign-out',
  #   registration: 'sign-up',
  #   sign_up: ''
  # }

  get '*path', to: 'application#fallback_index_html', constraints: lambda { |request|
                                                                     !request.xhr? && request.format.html?
                                                                   }
end
