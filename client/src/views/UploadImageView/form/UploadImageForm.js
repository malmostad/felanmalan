import { useRef, useEffect, useContext, useCallback } from "react";
import { NavigationContext } from "../../../contexts/NavigationContext";
import { useDropzone } from "react-dropzone";
import { IoArrowUpCircle } from "react-icons/io5";
import { StyledUploadContainer } from "../../../components/styles/containers/Containers";
import { Dropzone } from "../styles/styles";
import { useReport } from "../../../contexts/ReportContext";
import { StyledImageContainer } from "../../../components/styles/containers/Containers";
import { StyledButtonAddImg } from "../../../components/styles/buttons/Buttons";

const UploadImageForm = ({ onImagesAdd }) => {
  const { dispatch: navigationDispatch } = useContext(NavigationContext);
  const { formState } = useReport();
  const fileInput = useRef(null);

  useEffect(() => {
    if (formState.images.length === 0) {
      navigationDispatch({ type: "disableNext" });
      navigationDispatch({ type: "enableSkip" });
    }
    if (formState.images.length > 0) {
      navigationDispatch({ type: "enableNext" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formState.images]);

  const onDrop = useCallback((acceptedFiles) => {
    onImagesAdd(acceptedFiles);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <StyledUploadContainer>
        <Dropzone {...getRootProps()}>
          <input
            name="images"
            type="file"
            id="upload-button"
            multiple
            ref={fileInput}
            style={{ display: "none" }}
            accept="image/*"
            {...getInputProps()}
          />
          <IoArrowUpCircle
            size="3rem"
            style={{ color: "#037540", marginBottom: "10px" }}
          />
          Klicka eller dra hit för att starta uppladdning
        </Dropzone>
        <StyledImageContainer>
          <StyledButtonAddImg {...getRootProps()}>
            <input
              name="images"
              type="file"
              id="upload-button"
              multiple
              ref={fileInput}
              accept="image/*"
              {...getInputProps()}
            />
            Lägg till bild
          </StyledButtonAddImg>
        </StyledImageContainer>
      </StyledUploadContainer>
    </>
  );
};

export default UploadImageForm;
