import { useState } from "react";
import {
  StyledCell,
  StyledImagesSize,
  StyledCellUpload,
} from "../../components/styles/containers/Containers";
import ProgressBar from "./ProgressBar";
import { RemoveImg } from "./styles/styles";
import { BsTrash } from "react-icons/bs";

const PreviewImage = ({ image, onImageRemove }) => {
  const [isHovering, setIsHoovering] = useState(false);

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
          <RemoveImg onClick={() => onImageRemove(image.id)}>
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
