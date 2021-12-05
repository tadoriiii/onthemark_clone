import React from "react";
import Slider from "react-slick";

import { Banner, Header } from "components";

import "./Landing.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Landing = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    // centerMode: true,
    // centerPadding: "0px",
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
  };

  return (
    <>
      <Banner />
      <Header />
      <div class="first-wrapper">
        <div class="item-wrapper">
          <div class="text">
            <div class="text-first">다수의 변리사가 직접 검토하는</div>
            <div class="text-second">온라인 상표등록의 기준 온더마크</div>
            <div class="text-third">
              검증된 다수의 변리사가 직접 상표검토를 수행하여,
            </div>
            <div class="text-third">
              보다 정화한 결과가 예측이 가능한 상표등록을 보장합니다.
            </div>
          </div>
          <div class="item-second">
            <div class="top-text">
              <div class="top-text-first">서비스 바로가기</div>
              <div class="top-text-box">
                <div class="top-text-second">
                  인증마크 상표 출원시 출원수수료 할인!
                </div>
              </div>
            </div>
            <div class="bottom-item">
              <div class="left-item">
                <div class="left-icon">
                  <img
                    src="img/wrapper/first/img-examine.png"
                    alt="img-examine"
                  />
                </div>
                <div class="left-item-text">상표검토신청</div>
              </div>
              <div class="center-line" />
              <div class="right-item">
                <div class="right-icon">
                  <img
                    class="right-icon"
                    src="img/wrapper/first/img-registration.png"
                    alt="img-registraion"
                  />
                </div>
                <div class="right-item-text">상표출원신청</div>
              </div>
            </div>
          </div>
          <div class="item-third">
            <img
              class="item-third-img"
              src="/img/wrapper/first/img-main-visual.png"
              alt="main-visual"
            />
            <div class="item-third-figure" />
          </div>
        </div>
      </div>
      <div class="second-wrapper">
        <div class="text-first">
          온라인 상표등록
          <span class="text-first-black">은</span>
        </div>
        <div class="text-second">
          이래서 <span class="text-second-black">온더마크</span> 입니다.
        </div>
        <div class="text-third">
          모든 것을 혼자 할 필요는 없습니다. 전문 영역은 믿고 맡겨주세요.
        </div>
        <div class="item-wrapper">
          <div class="item">저가형 서비스 문제인식</div>
          <div class="item">다수 변리사 피드백</div>
          <div class="item">최저가 및 상표등록 보장제도</div>
        </div>
        <div class="bottom-item">
          <Slider {...settings}>
            <div class="bottom-item-first" aria-hidden="false">
              <div class="bottom-item-first-img">
                <div class="bottom-item-first-img-top">
                  <div class="text">다른 출원업체가 걸어둔 </div>
                  <div class="text">고객 유인책 문구에 속으셨나요?</div>
                </div>
                <div class="bottom-item-first-bottom">
                  <div class="text-wrapper">
                    <div class="text">
                      온라인 저가형의 상표출원서비스의 실체
                    </div>
                    <div class="text">자세히 알아보기</div>
                  </div>
                  <img
                    class="bottom-item-first-bottom-img"
                    src="/img/wrapper/third/img-go.png"
                    alt="img-go"
                  />
                </div>
              </div>
              <div class="bottom-item-first-text">
                <div class="text-title">온더마크는</div>
                <div class="text-main">
                  동일 상표만 검색하는 식의 무책임한 단일의 저가형 출원서비스를
                  제공하지 않으며 해당 서비스의 고객 피해사례를 해결하고자
                  기획되었습니다.
                </div>
              </div>
            </div>
            <div class="bottom-item-second" aria-hidden="true">
              <div class="bottom-item-second-img">
                <div class="bottom-item-second-img-top">
                  <div class="text">합리적인 비용으로</div>
                  <div class="text">
                    전문가들의 피드백을 듣고 싶지 않으신가요?
                  </div>
                </div>
                <div class="bottom-item-second-bottom">
                  <div class="text-wrapper">
                    <div class="text">다수의 변리사의 의견을 검토할 필요성</div>
                    <div class="text">자세히 알아보기</div>
                  </div>
                  <img
                    class="bottom-item-second-bottom-img"
                    src="/img/wrapper/third/img-go.png"
                    alt="img-go"
                  />
                </div>
              </div>
              <div class="bottom-item-second-text">
                <div class="text-title">온더마크는</div>
                <div class="text-main">
                  합리적인 비용으로 다수의 변리사가 직접 판단 하는 상표 검토
                  서비스를 제공하여, 변리사 개개인의 주관적 판단을 객관화한
                  집단지성의 검토의견을 제공하고 있습니다.
                </div>
              </div>
            </div>
            <div class="bottom-item-third" aria-hidden="true">
              <div class="bottom-item-third-img">
                <div class="bottom-item-third-img-top">
                  <div class="text">
                    상표 등록시 생기는 문제 가능성을 없애고
                  </div>
                  <div class="text">
                    안전한 출원을 보장받고 싶지 않으신가요?
                  </div>
                </div>
                <div class="bottom-item-third-bottom">
                  <div class="text-wrapper">
                    <div class="text">온더마크 인증마크의 혜택</div>
                    <div class="text">자세히 알아보기</div>
                  </div>
                  <img
                    class="bottom-item-third-bottom-img"
                    src="/img/wrapper/third/img-go.png"
                    alt="img-go"
                  />
                </div>
              </div>
              <div class="bottom-item-third-text">
                <div class="text-title">온더마크는</div>
                <div class="text-main">
                  변리사 모두가 등록가능성이 매우 높다고 판단한 상표에 "온더마크
                  인증" 마크를 부여하여, 상표출원시 최저가인 단일가 적용 및
                  미등록시 전액 환불처리하는 상표등록 보장제도를 채택하고
                  있습니다.
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};
