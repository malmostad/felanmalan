import {
  StyledTable,
  StyledRow,
  StyledAddImage,
  StyledTouchCharter,
  StyledButtonImage,
  StyledFlexTheContainer,
} from "../../components/styles/containers/Containers";
import PreviewImage from "./PreviewImage";
import { useEffect, useState, useRef } from "react";
import { CgMathPlus as OutlinePlus } from "react-icons/cg";

const Grid = ({ images, handleImages }) => {
  // eslint-disable-next-line no-unused-vars
  const [gridImages, setGridImages] = useState(images);
  const fileInput = useRef(null);

  useEffect(() => {
    setGridImages(images);
  }, [images]);

  return (
    <StyledTouchCharter>
      <StyledTable>
        <StyledFlexTheContainer>
          <StyledRow>
            <StyledAddImage>
              <>
                <input
                  name="images"
                  type="file"
                  id="upload-button"
                  multiple
                  onChange={handleImages}
                  ref={fileInput}
                  style={{ display: "none" }}
                  accept="image/*"
                />
                <StyledButtonImage onClick={() => fileInput.current.click()}>
                  <OutlinePlus
                    size="2.4rem"
                    style={{
                      color: "#046a38",
                    }}
                  />
                </StyledButtonImage>
              </>
            </StyledAddImage>
            {images.map((img, index) => (
              <PreviewImage key={index} image={img} />
            ))}{" "}
          </StyledRow>
        </StyledFlexTheContainer>
      </StyledTable>
    </StyledTouchCharter>
  );
};

export default Grid;
