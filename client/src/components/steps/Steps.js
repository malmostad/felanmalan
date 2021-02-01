import { useEffect } from 'react';
import { useUpdate } from '../../contexts/UpdateContext';
import {
  UploadImageView,
  MapView,
  DescriptionView,
  ContactInfoView,
} from '../../views/index';

const Steps = () => {
  const { currentView } = useUpdate();

  useEffect(() => {
    console.log('current view in steps is', currentView);
  }, [currentView]);

  switch (currentView) {
    case 'upload':
      return <UploadImageView />;
    case 'map':
      return <MapView />;
    case 'description':
      return <DescriptionView />;
    case 'contact':
      return <ContactInfoView />;

    default:
      return null;
  }
};

export default Steps;
