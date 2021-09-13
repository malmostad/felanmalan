import { useEffect, useState, useContext } from "react";
import UploadImageForm from "./form/UploadImageForm";
import { v4 as uuidv4 } from "uuid";
import { useUpdate } from "../../contexts/UpdateContext";
import Grid from "./Grid";
import { NavigationContext } from "../../contexts/NavigationContext";
import { postImages } from "../../api/api";
import { useReport } from "../../contexts/ReportContext";
import {
  StyledHeroHeadingThin,
  StyledSpanWord,
} from "../../components/styles/Typography/Typography";
import { StyledHeroContainer } from "../../components/styles/containers/Containers";

const UploadImageView = () => {
  const {
    setCurrentViewHeading,
    imagesToBeUploaded,
    setImagesToBeUploaded,
  } = useUpdate();
  const [uploadingCount, setUploadingCount] = useState(0);
  const { dispatch: navigationDispatch } = useContext(NavigationContext);
  const { dispatch } = useReport();

  useEffect(() => {
    setCurrentViewHeading(
      <StyledHeroContainer>
        <StyledHeroHeadingThin>
          Lägg till <StyledSpanWord>bilder</StyledSpanWord> på{" "}
          <StyledSpanWord>problemet</StyledSpanWord> &
          <StyledSpanWord> platsen</StyledSpanWord>
        </StyledHeroHeadingThin>
      </StyledHeroContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    navigationDispatch({
      type: uploadingCount ? "disableNext" : "enableNext",
    });
  }, [uploadingCount, navigationDispatch]);

  useEffect(() => {
    if (imagesToBeUploaded.length > 0) {
      navigationDispatch({ type: "disableSkip" });
    }
  }, [imagesToBeUploaded, navigationDispatch]);

  const onImagesAdded = (images) => {
    images.forEach((image) => {
      processImage(image);
    });
  };

  const processImage = (file) => {
    const imageMetaData = {
      preview_URL: URL.createObjectURL(file),
      id: uuidv4(),
      uploadProgress: 0,
    };
    setImagesToBeUploaded((previous) => previous.concat(imageMetaData));
    upload(file, imageMetaData);
  };

  const upload = async (file, imageMetaData) => {
    setUploadingCount(uploadingCount + 1);
    try {
      const resp = await postImages(file, (progressEvent) => {
        imageMetaData.uploadProgress =
          (progressEvent.loaded * 100) / progressEvent.total;
        updateProgress(imageMetaData);
      });
      setUploadingCount(uploadingCount - 1);

      dispatch({
        type: "uploadImages",
        field: "images",
        payload: resp.imageId,
      });
    } catch (error) {
      setUploadingCount(uploadingCount - 1);
    }
  };

  const updateProgress = (updatedImageMetaData, progress) => {
    const index = imagesToBeUploaded.findIndex((imageMetaData) => {
      return updatedImageMetaData.id === imageMetaData.id;
    });

    setImagesToBeUploaded((previous) => {
      previous[index] = updatedImageMetaData;
      return [...previous];
    });
  };

  return (
    <>
      <Grid onImagesAdded={onImagesAdded} images={imagesToBeUploaded} />
      <UploadImageForm onImagesAdded={onImagesAdded} />
    </>
  );
};

export default UploadImageView;
