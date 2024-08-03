import React, { HTMLProps, useState } from "react";
import { Lightbox } from "react-modal-image";
import styles from "./styles.module.scss";

const Image = ({ ...rest }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <img
        className={styles.image}
        onClick={() => setShowImage(true)}
        {...rest}
      />
      {showImage && (
        <Lightbox
          hideDownload
          hide
          large={rest.src}
          onClose={() => setShowImage(false)}
        />
      )}
    </>
  );
};

export default Image;