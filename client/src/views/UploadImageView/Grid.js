import {
  StyledTable,
  StyledRow,
  StyledAddImage,
  StyledTouchCharter,
  StyledButtonImage,
  StyledFlexTheContainer,
} from "../../components/styles/containers/Containers";
import PreviewImage from "./PreviewImage";
import { useRef } from "react";
import { CgMathPlus as OutlinePlus } from "react-icons/cg";

const Grid = ({ images, onImagesAdd, onImageRemove }) => {
  const fileInput = useRef(null);

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
                  onChange={(e) => {
                    onImagesAdd(Array.from(e.target.files));
                  }}
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
              <PreviewImage
                key={img.id}
                image={img}
                onImageRemove={onImageRemove}
              />
            ))}{" "}
          </StyledRow>
        </StyledFlexTheContainer>
      </StyledTable>
    </StyledTouchCharter>
  );
};

export default Grid;
