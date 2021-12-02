import React from "react";

import "./NextArrow.scss";

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div class="circle">
        <img
          class="right-arrow"
          src="/img/banner/arrow/arrows-chevron-right.svg"
          alt="left-right"
        />
      </div>
    </div>
  );
};
