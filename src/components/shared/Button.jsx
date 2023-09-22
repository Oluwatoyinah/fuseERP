import React from "react";

const Button = ({
  frontIconImgSrc,
  frontIcon,
  backIconImgSrc,
  backIcon,
  IconWidth,
  IconHeight,
  buttonText,
  extraStyle,
  bgColor,
  textColor,
  fontSize,
  borderColor,
  borderSize,
  borderStyle,
  borderRadius,
}) => {
  return (
    <button
      className="main-btn"
      style={{
        ...extraStyle,
        backgroundColor: bgColor,
        color: textColor,
        fontSize,
        borderColor: borderColor || bgColor,
        borderSize,
        borderStyle,
        borderRadius,
      }}
    >
      <span className="front-icon">
        {frontIconImgSrc ? (
          <img src={frontIconImgSrc} width={IconWidth} height={IconHeight} />
        ) : (
          frontIcon
        )}
      </span>
      <span className="text">{buttonText}</span>

      <span className="back-icon">
        {backIconImgSrc ? (
          <img src={backIconImgSrc} width={IconWidth} height={IconHeight} />
        ) : (
          backIcon
        )}
      </span>
    </button>
  );
};

export default Button;
