import React from "react";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./banner.scss";

export const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div class="banner">
      <Slider {...settings}>
        <div class="carousel" aria-hidden="false">
          <div class="text">
            <div class="text-main">상표 검토하고 인증마크 받자!</div>
            <div class="text-sub">인증마크 보유 상표 출원시 할인가 혜택!</div>
          </div>
          {/* <div>
            {isTablet && (
              <img
                class="img-banner"
                src="/img/mobile/banner/img-top-event-banner-m.png"
                alt="banner"
              />
            )}
            {isDesktop && (
              <img
                class="img-banner"
                src="/img/banner/bannerImg/img-top-event-banner-pc.png"
                alt="banner"
              />
            )}
          </div>
          <img
            class="img-banner"
            src="/img/banner/bannerImg/img-top-event-banner-pc.png"
            alt="banner"
          /> */}
          <div class="img-banner-outside">
            <div class="img-banner" />
          </div>
        </div>
        <div class="carousel" aria-hidden="false">
          <div class="text">
            <div class="text-main">리뷰 남기면 출원 할인 코드가 쓱~</div>
            <div class="text-sub">출원 신청 시 사용 가능한 10% 할인 혜택!</div>
          </div>
          <div class="img-banner-outside">
            <div class="img-banner-second" />
          </div>
          {/* <img
            class="img-banner"
            src="/img/banner/bannerImg/img-top-event-banner-pc-2.png"
            alt="banner"
          /> */}
        </div>
      </Slider>
      <div class="close">
        <div class="close-text">오늘 하루 보지 않기</div>
        <img
          class="close-img"
          src="img/banner/cancel/actions-cancel.svg"
          alt="cancel"
        />
      </div>
    </div>
  );
};

// <div>
//   <img
//     class="img-top-event-banner-pc"
//     src="/img/bannerImg/img-top-event-banner-pc.png"
//     alt="banner"
//   />
// </div>
// <div
//   id="carouselExampleControls"
//   class="carousel slide"
//   data-bs-ride="carousel"
// >
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img
//         src="/img/bannerImg/img-top-event-banner-pc.png"
//         class="d-block w-100"
//         alt="..."
//       />
//     </div>
//     <div class="carousel-item">
//       <img
//         src="/img/bannerImg/img-top-event-banner-pc-2.png"
//         class="d-block w-100"
//         alt="..."
//       />
//     </div>
//    <div class="carousel-item">
//   <img src="..." class="d-block w-100" alt="..." />
// </div>
//     </div>
//     <button
//       class="carousel-control-prev"
//       type="button"
//       data-bs-target="#carouselExampleControls"
//       data-bs-slide="prev"
//     >
//       <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Previous</span>
//     </button>
//     <button
//       class="carousel-control-next"
//       type="button"
//       data-bs-target="#carouselExampleControls"
//       data-bs-slide="next"
//     >
//       <span class="carousel-control-next-icon" aria-hidden="true"></span>
//       <span class="visually-hidden">Next</span>
//     </button>
//   </div>
//
// <Carousel fade>
//   <Carousel.Item>
//     <img
//       style={{ height: "90px" }}
//       className="d-block w-100"
//       src="/img/bannerImg/img-top-event-banner-pc.png"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <div class="title">상표 검토하고 인증마크 받자!</div>
//       <div>인증마크 보유 상표 출원시 할인가 혜택!</div>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       style={{ height: "90px" }}
//       className="d-block w-100"
//       src="/img/bannerImg/img-top-event-banner-pc-2.png"
//       alt="Second slide"
//     />
//   </Carousel.Item>
// </Carousel>
