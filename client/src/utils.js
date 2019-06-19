const isImageFileType = (type: string): boolean =>
  !!type && type.indexOf("image/") === 0;
const MEASURE_SIZE = 300;
export async function previewImage(file: File | Blob): Promise<string> {
  return new Promise(async resolve => {
    if (!isImageFileType(file.type)) {
      resolve("");
      return;
    }
    // extract meta data about oriention from image
    const orientation = await getOrientation(file);

    const canvas = document.createElement("canvas");
    canvas.width = MEASURE_SIZE;
    canvas.height = MEASURE_SIZE;
    canvas.style.cssText = `position: fixed; left: 0; top: 0; width: ${MEASURE_SIZE}px; height: ${MEASURE_SIZE}px; z-index: 9999; display: none;`;
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = function() {
      const { width, height } = img;

      let drawWidth = MEASURE_SIZE;
      let drawHeight = MEASURE_SIZE;
      let offsetX = 0;
      let offsetY = 0;
      switch (orientation) {
        case 2:
          ctx.transform(-1, 0, 0, 1, drawWidth, 0);
          break;
        case 3:
          ctx.transform(-1, 0, 0, -1, drawWidth, drawHeight);
          break;
        case 4:
          ctx.transform(1, 0, 0, -1, 0, drawHeight);
          break;
        case 5:
          ctx.transform(0, 1, 1, 0, 0, 0);
          break;
        case 6:
          ctx.transform(0, 1, -1, 0, drawHeight, 0);
          break;
        case 7:
          ctx.transform(0, -1, -1, 0, drawHeight, drawWidth);
          break;
        case 8:
          ctx.transform(0, -1, 1, 0, 0, drawWidth);
          break;
        default:
          break;
      }

      if (width < height) {
        drawHeight = height * (MEASURE_SIZE / width);
        offsetY = -(drawHeight - drawWidth) / 2;
      } else {
        drawWidth = width * (MEASURE_SIZE / height);
        offsetX = -(drawWidth - drawHeight) / 2;
      }

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      const dataURL = canvas.toDataURL();
      document.body.removeChild(canvas);

      resolve(dataURL);
    };
    img.src = window.URL.createObjectURL(file);
  });
}

function getOrientation(file, callback) {
  return new Promise(resolve => {
    var reader = new FileReader();
    reader.onload = function(e) {
      var view = new DataView(e.target.result);
      if (view.getUint16(0, false) !== 0xffd8) {
        return resolve(-2);
      }
      const length = view.byteLength;
      let offset = 2;
      while (offset < length) {
        if (view.getUint16(offset + 2, false) <= 8) return resolve(-1);
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker === 0xffe1) {
          if (view.getUint32((offset += 2), false) !== 0x45786966) {
            return resolve(-1);
          }

          var little = view.getUint16((offset += 6), false) === 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;
          for (var i = 0; i < tags; i++) {
            if (view.getUint16(offset + i * 12, little) === 0x0112) {
              return resolve(view.getUint16(offset + i * 12 + 8, little));
            }
          }
        } else if ((marker & 0xff00) !== 0xff00) {
          break;
        } else {
          offset += view.getUint16(offset, false);
        }
      }
      return resolve(-1);
    };
    reader.readAsArrayBuffer(file);
  });
}
