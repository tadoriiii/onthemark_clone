import React, { useEffect, useMemo } from "react";
import cx from "classnames";

import { Banner, Header } from "components";
import Slider from "react-slick";

import "./Landing.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = (props) => {
  const { className, onClick } = props;

  return (
    <div className={className} onClick={onClick}>
      <div class="circle">
        <img
          class="right-arrow"
          src="/img/wrapper/second/actions-back.svg"
          alt="actions-back"
        />
      </div>
    </div>
  );
};
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div class="circle">
        <img
          class="right-arrow"
          src="/img/wrapper/second/actions-back.png"
          alt="actions-back"
        />
      </div>
    </div>
  );
};

const SETTINGS = {
  className: "center",
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "0px",
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,

  responsive: [
    {
      breakpoint: "1100px",
      settings: { slidesToShow: 1, arrows: false },
    },
  ],
};

const secondSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",

  responsive: [
    {
      breakpoint: "1024px",
      settings: { slidesToShow: 1 },
    },
  ],
};

const thirdSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: false,
  centerMode: true,
  centerPadding: "0px",

  responsive: [
    {
      breakpoint: "1024px",
      settings: { slidesToShow: 1 },
    },
  ],
};

export const Landing = () => {
  const [page, setPage] = React.useState(0);
  const [slider, setSlider] = React.useState(null);

  const onClickSlickItem = React.useCallback(
    (activePage) => {
      return () => {
        setPage(activePage);
        if (slider) slider.slickGoTo(activePage);
      };
    },
    [slider]
  );

  const settings = useMemo(() => {
    return {
      ...SETTINGS,
      afterChange: (current) => setPage(current),
    };
  }, []);

  return (
    <>
      <Banner />
      <Header />
      <div className="footer">상표등록 총 예상비용은?</div>
      <div class="container">
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
              <div class="mobile-bottom-item">
                <div class="mobile-bottom-item-text">
                  인증마크 상표 출원시 대리인수수료 할인!
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
            <div
              class={cx("item", { isActive: page % 3 === 0 })}
              onClick={onClickSlickItem(0)}
            >
              저가형 서비스 문제인식
            </div>
            <div
              class={cx("item", { isActive: page % 3 === 1 })}
              onClick={onClickSlickItem(1)}
            >
              다수 변리사 피드백
            </div>
            <div
              class={cx("item", { isActive: page % 3 === 2 })}
              onClick={onClickSlickItem(2)}
            >
              최저가 및 상표등록 보장제도
            </div>
          </div>
          <div class="bottom-item">
            <Slider ref={setSlider} {...settings}>
              <div class="bottom-item-first">
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
                      src="/img/wrapper/second/img-go.png"
                      alt="img-go"
                    />
                  </div>
                </div>
                <div class="bottom-item-first-text">
                  <div class="text-title">온더마크는</div>
                  <div class="text-main">
                    동일 상표만 검색하는 식의 무책임한 단일의 저가형
                    출원서비스를 제공하지 않으며 해당 서비스의 고객 피해사례를
                    해결하고자 기획되었습니다.
                  </div>
                </div>
              </div>
              <div class="bottom-item-second">
                <div class="bottom-item-second-img">
                  <div class="bottom-item-second-img-top">
                    <div class="text">합리적인 비용으로</div>
                    <div class="text">
                      전문가들의 피드백을 듣고 싶지 않으신가요?
                    </div>
                  </div>
                  <div class="bottom-item-second-bottom">
                    <div class="text-wrapper">
                      <div class="text">
                        다수의 변리사의 의견을 검토할 필요성
                      </div>
                      <div class="text">자세히 알아보기</div>
                    </div>
                    <img
                      class="bottom-item-second-bottom-img"
                      src="/img/wrapper/second/img-go.png"
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
              <div class="bottom-item-third">
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
                      src="/img/wrapper/second/img-go.png"
                      alt="img-go"
                    />
                  </div>
                </div>
                <div class="bottom-item-third-text">
                  <div class="text-title">온더마크는</div>
                  <div class="text-main">
                    변리사 모두가 등록가능성이 매우 높다고 판단한 상표에
                    "온더마크 인증" 마크를 부여하여, 상표출원시 최저가인 단일가
                    적용 및 미등록시 전액 환불처리하는 상표등록 보장제도를
                    채택하고 있습니다.
                  </div>
                </div>
              </div>

              <div class="bottom-item-first">
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
                      src="/img/wrapper/second/img-go.png"
                      alt="img-go"
                    />
                  </div>
                </div>
                <div class="bottom-item-first-text">
                  <div class="text-title">온더마크는</div>
                  <div class="text-main">
                    동일 상표만 검색하는 식의 무책임한 단일의 저가형
                    출원서비스를 제공하지 않으며 해당 서비스의 고객 피해사례를
                    해결하고자 기획되었습니다.
                  </div>
                </div>
              </div>
              <div class="bottom-item-second">
                <div class="bottom-item-second-img">
                  <div class="bottom-item-second-img-top">
                    <div class="text">합리적인 비용으로</div>
                    <div class="text">
                      전문가들의 피드백을 듣고 싶지 않으신가요?
                    </div>
                  </div>
                  <div class="bottom-item-second-bottom">
                    <div class="text-wrapper">
                      <div class="text">
                        다수의 변리사의 의견을 검토할 필요성
                      </div>
                      <div class="text">자세히 알아보기</div>
                    </div>
                    <img
                      class="bottom-item-second-bottom-img"
                      src="/img/wrapper/second/img-go.png"
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
              <div class="bottom-item-third">
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
                      src="/img/wrapper/second/img-go.png"
                      alt="img-go"
                    />
                  </div>
                </div>
                <div class="bottom-item-third-text">
                  <div class="text-title">온더마크는</div>
                  <div class="text-main">
                    변리사 모두가 등록가능성이 매우 높다고 판단한 상표에
                    "온더마크 인증" 마크를 부여하여, 상표출원시 최저가인 단일가
                    적용 및 미등록시 전액 환불처리하는 상표등록 보장제도를
                    채택하고 있습니다.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="thirdWrapper">
          <div className="textFirst">합리적인 가격으로</div>
          <div className="textSecond">스마트하게</div>
          <div className="textThird">
            상표 검토는 옵션이 아닌 필수입니다. 합리적인 가격으로 검토 후 출원
            진행여부를 결정하세요.
          </div>
          <div className="item">
            <div className="itemFirst">
              <img
                className="itemFirstLogo"
                src="img/wrapper/third/img-examine.png"
                alt="img-examine"
              />
              <div className="itemFirstHeader">
                <div className="itemFirstHeaderText">상품류 검색 서비스</div>
              </div>
              <div className="itemFirstStandard">제한 없음</div>
              <div className="itemFirstPrice">
                <div className="price">무료</div>
              </div>
              <div className="itemFirstTaxInfo">
                <div className="TaxInfo">[부가세 없음]</div>
              </div>
              <div className="itemFirstBottomWrapper">
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">키워드를 통한 지정상품 검색</div>
                </div>
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">
                    지정상품 중 등록가능한 비고시명칭 검색
                  </div>
                </div>
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">
                    검색 키워드별 맞춤형의 상품류 추천
                  </div>
                </div>
                <div className="directButton">
                  <div className="directText">바로가기</div>
                  <img
                    className="right-arrow"
                    src="/img/wrapper/third/icon-arrow-next.svg"
                    alt="arrow-next"
                  />
                </div>
                <div className="explain">
                  온더마크가 추천하는 상품류를 상위 노출합니다. 정확한 결과를
                  위해 다수의 키워드 입력을 추천드립니다.
                </div>
              </div>
            </div>

            <div className="itemSecond">
              <img
                className="itemSecondLogo"
                src="img/wrapper/third/img-examine-copy.png"
                alt="img-examine"
              />
              <div className="itemSecondHeader">
                <div className="itemSecondHeaderText">상품 검토 서비스</div>
              </div>
              <div className="itemSecondStandard">1상표 / 1류 기준</div>
              <div className="itemSecondPrice">
                <div className="price">₩ 50,000</div>
              </div>
              <div className="itemSecondTaxInfo">
                <div className="TaxInfo">[부가세 별도]</div>
              </div>
              <div className="itemSecondBottomWrapper">
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">다수의 변리사가 직접 검토수행</div>
                </div>
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">
                    검토상표의 등록가능성 및 출원 전략 제시
                  </div>
                </div>
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">
                    검토상표의 개수에 따른 차등 할인율 적용!
                  </div>
                </div>
                <div className="directButton">
                  <div className="directText">바로가기</div>
                  <img
                    className="right-arrow"
                    src="/img/wrapper/third/icon-arrow-next.svg"
                    alt="arrow-next"
                  />
                </div>
                <div className="explain">
                  다수의 변리사 모두가 등록가능성이 매우 높다고 판단한 상표의
                  경우{" "}
                  <span className="explainOtherColor">“온더마크 인증”</span>
                  마크를 부여합니다
                </div>
              </div>
            </div>

            <div className="itemThird">
              <img
                className="itemThirdLogo"
                src="img/wrapper/third/img-registration.png"
                alt="img-examine"
              />
              <div className="itemThirdHeader">
                <div className="itemThirdHeaderText">상품 출원 서비스</div>
              </div>
              <div className="itemThirdStandard">
                <div className="itemThirdStandardText">1상표 / 1류 기준</div>
                <div className="itemThirdStandardText">₩100,000</div>
              </div>
              <div className="itemThirdMark">
                <img
                  className="mark"
                  src="/img/wrapper/third/img-otm-mark.svg"
                  alt="otm-mark"
                />
                <div className="itemThirdMarkText">
                  온더마크 인증상표 출원시
                </div>
              </div>
              <div className="itemThirdPrice">
                <div className="price">₩ 50,000</div>
              </div>
              <div className="itemThirdTaxInfo">
                <div className="TaxInfo">[부가세 + 관납료 별도]</div>
              </div>
              <div className="itemThirdBottomWrapper">
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">
                    IT기술에 기반한 맞춤형의 지정상품 추천!
                  </div>
                </div>
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">
                    “온더마크 인증” 상표에 대해서는 단일가 적용!
                  </div>
                </div>
                <div className="text">
                  <img
                    className="checkIcon"
                    src="/img/wrapper/third/icon-actions-checkmark.svg"
                    alt="checkmark"
                  />
                  <div className="content">
                    리뷰 작성시, 10% 추가 할인가 적용!
                  </div>
                </div>
                <div className="directButton">
                  <div className="directText">바로가기</div>
                  <img
                    className="right-arrow"
                    src="/img/wrapper/third/icon-arrow-next.svg"
                    alt="arrow-next"
                  />
                </div>
                <div className="explain">
                  "온더마크 인증상표"는 단번에 등록될 가능성이 매우 높은 상표로,
                  셀프 출원이 가능하여, 상표 출원 서비스 이용시 등록보장 및
                  할인가를 적용합니다.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="fourthWrapper">
          <div class="firstText">온라인 원스톱 상표출원의</div>
          <div class="secondText">새로운 기준</div>
          <div class="liveReview">
            <div class="liveReviewText">실시간 고객 후기</div>
            <div class="liveReviewStar">
              <img
                class="starIcon"
                src="/img/wrapper/fourth/rating-ic-star-rated.svg"
                alt="star"
              />
              <img
                class="starIcon"
                src="/img/wrapper/fourth/rating-ic-star-rated.svg"
                alt="star"
              />
              <img
                class="starIcon"
                src="/img/wrapper/fourth/rating-ic-star-rated.svg"
                alt="star"
              />
              <img
                class="starIcon"
                src="/img/wrapper/fourth/rating-ic-star-rated.svg"
                alt="star"
              />
              <img
                class="starIcon"
                src="/img/wrapper/fourth/rating-ic-star-unrated.svg"
                alt="unrated-star"
              />
            </div>
            <div class="liveReviewNumber">4.42</div>
          </div>
          <div class="review">
            <Slider {...secondSettings}>
              <div className="firstReview">
                <div className="firstReviewTop">
                  <img
                    className="profile"
                    src="img/wrapper/fourth/empty-profile-2.png"
                    alt="profile"
                  />
                  <div className="firstReviewTopRight">
                    <div className="peopleName">지*라 고객님</div>
                    <div className="peopleNameBottom">
                      <div className="star">
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                      </div>
                      <div className="score">5</div>
                    </div>
                  </div>
                </div>
                <div className="firstReviewBottom">
                  한번 시험 삼아 해볼까라는 생각으로 서비스 신청해봤는데 다른
                  어떤 곳들보다도 피드백이 빠르고 쉽게 신청이 가능해서 좋았어요
                  아무것도 모르는 상태에서도 사용이 편리하네요!
                </div>
              </div>

              <div className="firstReview">
                <div className="firstReviewTop">
                  <img
                    className="profile"
                    src="img/wrapper/fourth/empty-profile-2.png"
                    alt="profile"
                  />
                  <div className="firstReviewTopRight">
                    <div className="peopleName">지*라 고객님</div>
                    <div className="peopleNameBottom">
                      <div className="star">
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                      </div>
                      <div className="score">5</div>
                    </div>
                  </div>
                </div>
                <div className="firstReviewBottom">
                  한번 시험 삼아 해볼까라는 생각으로 서비스 신청해봤는데 다른
                  어떤 곳들보다도 피드백이 빠르고 쉽게 신청이 가능해서 좋았어요
                  아무것도 모르는 상태에서도 사용이 편리하네요!
                </div>
              </div>

              <div className="firstReview">
                <div className="firstReviewTop">
                  <img
                    className="profile"
                    src="img/wrapper/fourth/empty-profile-2.png"
                    alt="profile"
                  />
                  <div className="firstReviewTopRight">
                    <div className="peopleName">지*라 고객님</div>
                    <div className="peopleNameBottom">
                      <div className="star">
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                      </div>
                      <div className="score">5</div>
                    </div>
                  </div>
                </div>
                <div className="firstReviewBottom">
                  한번 시험 삼아 해볼까라는 생각으로 서비스 신청해봤는데 다른
                  어떤 곳들보다도 피드백이 빠르고 쉽게 신청이 가능해서 좋았어요
                  아무것도 모르는 상태에서도 사용이 편리하네요!
                </div>
              </div>

              <div className="firstReview">
                <div className="firstReviewTop">
                  <img
                    className="profile"
                    src="img/wrapper/fourth/empty-profile-2.png"
                    alt="profile"
                  />
                  <div className="firstReviewTopRight">
                    <div className="peopleName">지*라 고객님</div>
                    <div className="peopleNameBottom">
                      <div className="star">
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                      </div>
                      <div className="score">5</div>
                    </div>
                  </div>
                </div>
                <div className="firstReviewBottom">
                  한번 시험 삼아 해볼까라는 생각으로 서비스 신청해봤는데 다른
                  어떤 곳들보다도 피드백이 빠르고 쉽게 신청이 가능해서 좋았어요
                  아무것도 모르는 상태에서도 사용이 편리하네요!
                </div>
              </div>

              <div className="firstReview">
                <div className="firstReviewTop">
                  <img
                    className="profile"
                    src="img/wrapper/fourth/empty-profile-2.png"
                    alt="profile"
                  />
                  <div className="firstReviewTopRight">
                    <div className="peopleName">지*라 고객님</div>
                    <div className="peopleNameBottom">
                      <div className="star">
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                        <img
                          src="/img/wrapper/fourth/rating-ic-star-rated.png"
                          alt="star"
                        />
                      </div>
                      <div className="score">5</div>
                    </div>
                  </div>
                </div>
                <div className="firstReviewBottom">
                  한번 시험 삼아 해볼까라는 생각으로 서비스 신청해봤는데 다른
                  어떤 곳들보다도 피드백이 빠르고 쉽게 신청이 가능해서 좋았어요
                  아무것도 모르는 상태에서도 사용이 편리하네요!
                </div>
              </div>
            </Slider>
          </div>

          <div className="introduce">
            <div className="introduceBackgroundImage">
              <img
                src="img/wrapper/fourth/main-bg-oval-left-f-7216-f-03.png"
                alt="main-bg-oval-left-f"
              />
            </div>
            <div className="introduceText">
              <div className="introduceTextFirst">검증된 전문가들이</div>
              <div className="introduceTextSecond">온더마크와 함께합니다.</div>
              <div className="introduceTextThird">
                <div>
                  일절 전문 상담없이 출원해버리는 식의 저가형 서비스의 고객
                  피해사례 및
                </div>
                <div>
                  문제 해결에 공감하는 다수의 변리사들이 함께 하고 있습니다.
                </div>
              </div>
              <div className="introduceTextThirdMobile">
                <div>일절 전문 상담없이 출원해버리는 식의</div>
                <div>저가형 서비스의 고객 피해사례 및</div>
                <div>문제 해결에 공감하는 다수의 변리사들이</div>
                <div>함께 하고 있습니다.</div>
              </div>
            </div>
            <div className="introduceEmployee">
              <Slider {...thirdSettings}>
                <div className="introduceEmployeeWrapper">
                  <div className="introduceEmployeeWrapperTop">
                    {/* <div className="wrapperTopFigure" /> */}
                  </div>
                  <div className="introduceEmployeeWrapperBottom">
                    <img
                      className="employeePicture"
                      src="/img/wrapper/introduce/otm-expert-l-1.png"
                      alt="otm-expert"
                    />
                    <img
                      className="employeeMark"
                      src="img/wrapper/introduce/img-expert-mark.png"
                      alt="expert-mark"
                    />
                    <div className="employeeInfo">
                      <div className="employeeInfoFirst">변리사 최건식</div>
                      <div className="employeeInfoSecond">
                        온더마크 인증 전문가
                      </div>
                      <div className="employeeInfoThird">
                        많은 경험을 바탕으로 빠른 판단과
                      </div>
                      <div className="employeeInfoFourth">
                        명쾌한 답변으로 찾아 뵙겠습니다.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="introduceEmployeeWrapper">
                  <div className="introduceEmployeeWrapperTop">
                    {/* <div className="wrapperTopFigure" /> */}
                  </div>
                  <div className="introduceEmployeeWrapperBottom">
                    <img
                      className="employeePicture"
                      src="/img/wrapper/introduce/otm-expert-l-1.png"
                      alt="otm-expert"
                    />
                    <img
                      className="employeeMark"
                      src="img/wrapper/introduce/img-expert-mark.png"
                      alt="expert-mark"
                    />
                    <div className="employeeInfo">
                      <div className="employeeInfoFirst">변리사 최건식</div>
                      <div className="employeeInfoSecond">
                        온더마크 인증 전문가
                      </div>
                      <div className="employeeInfoThird">
                        많은 경험을 바탕으로 빠른 판단과
                      </div>
                      <div className="employeeInfoFourth">
                        명쾌한 답변으로 찾아 뵙겠습니다.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="introduceEmployeeWrapper">
                  <div className="introduceEmployeeWrapperTop">
                    {/* <div className="wrapperTopFigure" /> */}
                  </div>
                  <div className="introduceEmployeeWrapperBottom">
                    <img
                      className="employeePicture"
                      src="/img/wrapper/introduce/otm-expert-l-1.png"
                      alt="otm-expert"
                    />
                    <img
                      className="employeeMark"
                      src="img/wrapper/introduce/img-expert-mark.png"
                      alt="expert-mark"
                    />
                    <div className="employeeInfo">
                      <div className="employeeInfoFirst">변리사 최건식</div>
                      <div className="employeeInfoSecond">
                        온더마크 인증 전문가
                      </div>
                      <div className="employeeInfoThird">
                        많은 경험을 바탕으로 빠른 판단과
                      </div>
                      <div className="employeeInfoFourth">
                        명쾌한 답변으로 찾아 뵙겠습니다.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="introduceEmployeeWrapper">
                  <div className="introduceEmployeeWrapperTop">
                    {/* <div className="wrapperTopFigure" /> */}
                  </div>
                  <div className="introduceEmployeeWrapperBottom">
                    <img
                      className="employeePicture"
                      src="/img/wrapper/introduce/otm-expert-l-1.png"
                      alt="otm-expert"
                    />
                    <img
                      className="employeeMark"
                      src="img/wrapper/introduce/img-expert-mark.png"
                      alt="expert-mark"
                    />
                    <div className="employeeInfo">
                      <div className="employeeInfoFirst">변리사 최건식</div>
                      <div className="employeeInfoSecond">
                        온더마크 인증 전문가
                      </div>
                      <div className="employeeInfoThird">
                        많은 경험을 바탕으로 빠른 판단과
                      </div>
                      <div className="employeeInfoFourth">
                        명쾌한 답변으로 찾아 뵙겠습니다.
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="service">
          <div className="serviceTextFirst">이용하기 편리한</div>
          <div className="serviceTextSecond">합리적인 서비스 시스템</div>
          <div className="serviceTextThird">
            수익을 위해 아무 상표나 출원으로 내몰지 않습니다. 객관적인 검토
            결과에 기초한 고객 결정을 최우선으로 생각합니다.
          </div>
          <div className="serviceWrapper">
            <div className="step">
              <img
                className="stepImage"
                src="/img/wrapper/service/icon-process-1.png"
                alt="process-1"
              />
              <div className="stepTitle">
                <div className="stepTitleText">1단계</div>
              </div>
              <div className="stepText">
                <div className="StepTextContent">상표검토</div>
                <div className="StepTextContent">신청</div>
              </div>
            </div>

            <div className="step">
              <img
                className="stepImage"
                src="/img/wrapper/service/icon-process-2.png"
                alt="process-2"
              />
              <div className="stepTitle">
                <div className="stepTitleText">2단계</div>
              </div>
              <div className="stepText">
                <div className="StepTextContent">상표검토결과</div>
                <div className="StepTextContent">참고</div>
              </div>
            </div>

            <div className="step">
              <img
                className="stepImage"
                src="/img/wrapper/service/icon-process-4.png"
                alt="process-3"
              />
              <div className="stepTitle">
                <div className="stepTitleText">3단계</div>
              </div>
              <div className="stepText">
                <div className="StepTextContent">상표출원여부</div>
                <div className="StepTextContent">고객결정</div>
              </div>
            </div>
            <div className="root">
              <div className="rootBody" />
              <div className="rootLeftCircle" />
              <div className="rootRightCircle" />
              <div className="rootRightBottomCircle" />
            </div>
            <div className="choice">
              <div className="choiceItem">
                <img
                  className="choiceImage"
                  src="img/wrapper/service/icon-process-4-2.png"
                  alt="process-4-2"
                />
                <div className="choiceText">
                  <div className="choiceTextFirst">
                    <div className="choiceTextFirstContent">고객선택 1</div>
                  </div>
                  <div className="choiceTextSecond">상표출원신청</div>
                </div>
              </div>

              <div className="choiceItem">
                <img
                  className="choiceImage"
                  src="img/wrapper/service/icon-process-4-1.png"
                  alt="process-4-1"
                />
                <div className="choiceText">
                  <div className="choiceTextFirst">
                    <div className="choiceTextFirstContent">고객선택 2</div>
                  </div>
                  <div className="choiceTextSecond">셀프출원진행</div>
                </div>
              </div>
            </div>
          </div>

          <div className="serviceWrapperMobile">
            <div className="serviceMobileFirst">
              <div className="firstItem">
                <img
                  className="firstItemImage"
                  src="/img/wrapper/service/mobile/icon-process-1.png"
                  alt="process-1"
                />
                <div className="firstItemStep">
                  <div className="firstItemStepText">1단계</div>
                </div>
                <div className="firstItemText">
                  <div>상표검토</div>
                  <div>신청</div>
                </div>
              </div>
              <div className="firstItemLeft">
                <img
                  className="firstItemImage"
                  src="/img/wrapper/service/mobile/icon-process-2.png"
                  alt="process-2"
                />
                <div className="firstItemStep">
                  <div className="firstItemStepText">2단계</div>
                </div>
                <div className="firstItemText">
                  <div>상표검토결과</div>
                  <div>참고</div>
                </div>
              </div>
            </div>

            <div className="serviceMobileSecond">
              <img
                className="firstItemImage"
                src="/img/wrapper/service/mobile/icon-process-4.png"
                alt="process-4"
              />
              <div className="firstItemStep">
                <div className="firstItemStepText">3단계</div>
              </div>
              <div className="firstItemText">
                <div>상표검토</div>
                <div>신청</div>
              </div>
            </div>
            <div className="serviceMobileThird">
              <div className="thirdTopLine" />
              <div className="topCircle" />
              <div className="leftCircle" />
              <div className="rightCircle" />
            </div>
            <div className="serviceMobileFourth">
              <div className="firstItem">
                <img
                  className="firstItemImage"
                  src="/img/wrapper/service/mobile/icon-process-4-2.png"
                  alt="process-4-2"
                />
                <div className="firstItemStep">
                  <div className="firstItemStepText">고객선택1</div>
                </div>
                <div className="firstItemText">
                  <div>상표출원신청</div>
                </div>
              </div>
              <div className="firstItemLeft">
                <img
                  className="firstItemImage"
                  src="/img/wrapper/service/mobile/icon-process-4-1.png"
                  alt="process-4-1"
                />
                <div className="firstItemStep">
                  <div className="firstItemStepText">고객선택2</div>
                </div>
                <div className="firstItemText">
                  <div>셀프출원진행</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="join">
          <div className="joinFirst">이젠 온더마크로</div>
          <div className="joinSecond">스마트하게 검토한 후 출원하세요</div>
          <div className="joinThird">상표 등록의 매몰비용이 최소화됩니다.</div>
          <div className="joinFourth">
            <div className="joinFourthItem">
              <img
                className="joinFourthItemImage"
                src="/img/wrapper/signUp/icon-feedback.png"
                alt="icon-feedback"
              />
              <div className="joinFourthItemTextTop"># 무자격?</div>
              <div className="joinFourthItemTextBottom">
                전문자격 변리사들의 피드백!
              </div>
            </div>

            <div className="joinFourthItem">
              <img
                className="joinFourthItemImage"
                src="/img/wrapper/signUp/icon-credit-card.png"
                alt="icon-credit-card"
              />
              <div className="joinFourthItemTextTop"># 비싼가격?</div>
              <div className="joinFourthItemTextBottom">
                출원까지 연결되는 합리적인 가격!
              </div>
            </div>

            <div className="joinFourthItem">
              <img
                className="joinFourthItemImage"
                src="/img/wrapper/signUp/icon-survey.png"
                alt="icon-survey"
              />
              <div className="joinFourthItemTextTop"># 어려운 신청?</div>
              <div className="joinFourthItemTextBottom">
                5분 설문으로 빠른 검토 신청!
              </div>
            </div>
          </div>
          <div className="joinFifthItem">
            <div className="joinFifthItemText">상표 검토 신청하기</div>
          </div>
        </div>

        <div className="register">
          <div className="registerImg">
            <img src="/img/wrapper/register/img-expert.png" alt="img-expert" />
          </div>
          <div className="registerImgMobile">
            <img
              src="/img/wrapper/register/mobile/img-expert.png"
              alt="img-expert"
            />
          </div>
          <div className="registerFirst">
            변리사 자격증을 소지하고 계신가요?
          </div>
          <div className="registerSecond">
            온더마크의 변리사로 등록해보세요. 배정된 건에 대한 상표 검토를
            수행하면 건별로 리워드를 제공합니다.
          </div>
          <div className="registerButton">
            <div className="registerButtonText">전문가로 등록하기</div>
          </div>
        </div>

        <div className="email">
          <div className="emailWrapper">
            <div className="emailWrapperFirst">
              <div className="emailWrapperFirstText">고객상담 Email</div>
            </div>
            <div className="emailWrapperSecond">help@onthemark.co.kr</div>
            <div className="emailWrapperThird">
              <div className="emailWrapperThirdTop">
                평일 10:00 - 18:00 [점심시간 12:00 - 13:00]
              </div>
              <div className="emailWrapperThirdBottom">휴일 및 주말 휴무</div>
            </div>
          </div>
        </div>

        <div className="emailMobile">
          <div className="emailMobileTop">
            <div className="emailMobileTopText">고객상담 Email</div>
            <div className="emailMobileTopEmail">help@onthemark.co.kr</div>
          </div>
          <div className="emailMobileBottom">
            <div className="emailMobileBottomTime">
              평일 10:00 - 18:00 [점심시간 12:00 - 13:00]
            </div>
            <div className="emailMobileBottomBreak">휴일 및 주말 휴무</div>
          </div>
        </div>
      </div>
    </>
  );
};
