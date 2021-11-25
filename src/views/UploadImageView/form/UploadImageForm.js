import { useRef, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { IoArrowUpCircle } from "react-icons/io5";
import { Dropzone } from "../styles/styles";
import {
  StyledButtonOuter,
  StyledButtonInnerUploadImageView,
  StyledImageContainer,
  StyledUploadContainer,
} from "../../../components/styles/containers/Containers";
import { StyledButtonAddImg } from "../../../components/styles/buttons/Buttons";

const UploadImageForm = ({ onImagesAdd }) => {
  const fileInput = useRef(null);
  const onDrop = useCallback(
    (acceptedFiles) => {
      onImagesAdd(acceptedFiles);
    },
    [onImagesAdd]
  );
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
          <StyledButtonOuter>
            <StyledButtonInnerUploadImageView>
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
            </StyledButtonInnerUploadImageView>
          </StyledButtonOuter>
        </StyledImageContainer>
      </StyledUploadContainer>
    </>
  );
};

export default UploadImageForm;
