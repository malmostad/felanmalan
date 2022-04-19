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
import { LoadingSpinner } from "../../components/styles/Spinners/Spinners";
import { StyledHeroContainer } from "../../components/styles/containers/Containers";

import { StyledButtonUploadImageView } from "../../components/styles/buttons/Buttons";

import {
  StyledButtonOuterUploadImageView,
  StyledButtonInner,
} from "../../components/styles/containers/Containers";

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
          <StyledSpanWord>ärendet</StyledSpanWord> &
          <StyledSpanWord> platsen</StyledSpanWord>
        </StyledHeroHeadingThin>
      </StyledHeroContainer>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onImagesAdd = (images) => {
    images.forEach((image) => {
      processFile(image);
    });
  };

  const processFile = (file) => {
    const image = createImage(file);

    setImagesToBeUploaded((previous) => previous.concat(image));
    upload(file, image);
  };

  const onImageRemove = (id) => {
    const image = imagesToBeUploaded.find((image) => {
      return image.id === id;
    });
    const { externalId } = image;

    dispatch({
      type: "removeImage",
      payload: externalId,
    });
    setImagesToBeUploaded((previous) => {
      return previous.filter((image) => {
        return image.id !== id;
      });
    });
  };

  const createImage = (file) => {
    return {
      preview_URL: URL.createObjectURL(file),
      id: uuidv4(),
      uploadProgress: 0,
    };
  };

  const upload = async (file, imageMetaData) => {
    setUploadingCount((prev) => {
      return prev + 1;
    });

    try {
      const resp = await postImages(file, (progressEvent) => {
        imageMetaData.uploadProgress =
          (progressEvent.loaded * 100) / progressEvent.total;
        updateImage(imageMetaData);
      });

      setUploadingCount((prev) => {
        return prev - 1;
      });

      dispatch({
        type: "addImage",
        payload: resp.imageId,
      });

      imageMetaData.externalId = resp.imageId;
      updateImage(imageMetaData);
    } catch (error) {
      setUploadingCount((prev) => {
        return prev - 1;
      });
    }
  };

  const updateImage = (updatedImageMetaData) => {
    const index = imagesToBeUploaded.findIndex((imageMetaData) => {
      return updatedImageMetaData.id === imageMetaData.id;
    });

    setImagesToBeUploaded((previous) => {
      previous[index] = updatedImageMetaData;
      return [...previous];
    });
  };

  const buttonText = () => {
    if (uploadingCount > 0) {
      return <LoadingSpinner gray />;
    } else {
      return imagesToBeUploaded.length > 0 ? "Nästa steg" : "Hoppa över";
    }
  };

  return (
    <>
      {imagesToBeUploaded.length > 0 ? (
        <Grid
          onImagesAdd={onImagesAdd}
          onImageRemove={onImageRemove}
          images={imagesToBeUploaded}
        />
      ) : (
        <UploadImageForm onImagesAdd={onImagesAdd} />
      )}
      <StyledButtonOuterUploadImageView
        toggleColor={imagesToBeUploaded.length > 0}
      >
        <StyledButtonInner>
          <StyledButtonUploadImageView
            disabled={uploadingCount > 0}
            onClick={() => {
              navigationDispatch({ type: "next" });
            }}
          >
            {buttonText()}
          </StyledButtonUploadImageView>
        </StyledButtonInner>
      </StyledButtonOuterUploadImageView>
    </>
  );
};

export default UploadImageView;
