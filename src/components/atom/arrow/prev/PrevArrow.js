import React from "react";

import "./PrevArrow.scss";

export const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div class="circle">
        <img src="/img/banner/arrow/arrows-chevron-left.svg" alt="left-right" />
      </div>
    </div>
  );
};
