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
  let uploadRef = useRef(image);
  const [isHovering, setIsHoovering] = useState(false);
  const currentFile = uploadRef.current;
  const [uploadProgress, setUploadProgress] = useState(
    uploadRef.current.uploadStatus
  );
  const [showProgressBar, setShowProgressBar] = useState(false);
  const { dispatch, formState } = useReport();
  const { setImagesToBeUploaded, imagesToBeUploaded } = useUpdate();

  const Upload = async (file) => {
    setShowProgressBar(true);
    const resp = await postImages(
      process.env.REACT_APP_API_POST_PHOTOS_ENDPOINT,
      file.data,
      (progressEvent) => {
        let progress = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(progress);
      }
    );
    setShowProgressBar(false);
    dispatch({
      type: "uploadImages",
      field: "images",
      payload: resp.data,
    });
  };

  const memoizedUploadTask = useCallback(() => {
    Upload(image);
  }, [image]);

  useEffect(() => {
    memoizedUploadTask(image);
  }, []);

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
      type: "removeImages",
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

  // check if the current file
  return (
    <>
      <StyledImagesSize
        onTouchStart={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onMouseEnter={onMouseEnter}
      >
        <StyledCell id={image.id} src={image.preview_URL} alt="alt" />
        {showProgressBar && (
          <StyledCellUpload>
            <ProgressBar max={100} progress={uploadProgress} />
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
