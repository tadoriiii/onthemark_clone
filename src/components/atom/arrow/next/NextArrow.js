import React from "react";

import "./NextArrow.scss";

export const NextArrow = (props) => {
  const { className, onClick } = props;
  // const newStyle = {
  //   ...style,
  //   "@media(max-width:1024px)": { display: "none" },
  // };
  return (
    <div className={className} onClick={onClick}>
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
