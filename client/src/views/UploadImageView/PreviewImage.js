//hooks
import { useCallback, useEffect, useRef, useState } from "react";
//api
import { postImages } from "../../api/api";
// global state
import { useReport } from "../../contexts/ReportContext";
import { useUpdate } from "../../contexts/UpdateContext";
import {
  StyledCell,
  StyledImagesSize,
  StyledCellUpload,
} from "../../components/styles/containers/Containers";
import ProgressBar from "./ProgressBar";
import { RemoveImg } from "./styles/styles";
import { BsTrash } from "react-icons/bs";

const PreviewImage = ({ image }) => {
  const [isHovering, setIsHoovering] = useState(false);
  const { dispatch } = useReport();
  const { setImagesToBeUploaded, imagesToBeUploaded } = useUpdate();

  const handleRemoveImage = (image) => {
    setImagesToBeUploaded(
      imagesToBeUploaded.filter((item) => item.id !== image.id)
    );
    const removeImageFromArray = imagesToBeUploaded.filter(
      (item) => item.id !== image.id
    );
    const transformToIdOnly = removeImageFromArray.map((item) => {
      return item.id;
    });
    dispatch({
      type: "removeImage",
      field: "images",
      payload: transformToIdOnly,
    });
  };

  const onMouseEnter = () => {
    setIsHoovering(true);
  };

  const onMouseLeave = () => {
    setIsHoovering(false);
  };

  return (
    <>
      <StyledImagesSize
        onTouchStart={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        <StyledCell id={image.id} src={image.preview_URL} alt="alt" />
        {image.uploadProgress < 100 && (
          <StyledCellUpload>
            <ProgressBar max={100} progress={image.uploadProgress} />
          </StyledCellUpload>
        )}
        {isHovering && (
          <RemoveImg onClick={() => handleRemoveImage(image)}>
            <BsTrash
              style={{ margin: "10px auto", display: "flex" }}
              size="2rem"
            />
          </RemoveImg>
        )}
      </StyledImagesSize>
    </>
  );
};

export default PreviewImage;
