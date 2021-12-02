import React from "react";

import "./PrevArrow.scss";

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <div class="circle">
        <img src="/img/banner/arrow/arrows-chevron-left.svg" alt="left-right" />
      </div>
    </div>
  );
};
