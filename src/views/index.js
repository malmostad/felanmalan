/* eslint-disable react/jsx-key */
import UploadImageView from "./UploadImageView/UploadImageView";
import MapView from "./Map/MapView";
import DescriptionView from "./Description/DescriptionView";
import ContactInfoView from "./ContactInfo/ContactInfoView";
import FollowUpView from "./FollowUp/FollowUpView";

export const formViews = [
  { component: <UploadImageView />, name: "UploadImageView" },
  { component: <MapView />, name: "MapView" },
  { component: <DescriptionView />, name: "DescriptionView" },
  { component: <ContactInfoView />, name: "ContactInfoView" },
  { component: <FollowUpView />, name: "FollowUpView" },
];

export { UploadImageView, MapView, DescriptionView, ContactInfoView };
