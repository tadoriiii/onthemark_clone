import React from "react";

import "./header.scss";

export const Header = () => {
  return (
    <div class="header">
      <div class="top">
        <div class="left">
          <div class="first-item">
            <div class="text">국내 원스톱 서비스</div>
            <img
              class="img"
              src="/img/header/arrows-caret-right-full.svg"
              alt="right-arrow"
            />
          </div>
          <div class="second-item" />
          <div class="third-item">
            <div class="text">해외 상표등록</div>
            <img class="img" src="/img/header/beta-chip.svg" alt="beta-img" />
          </div>
        </div>
        <div class="right">
          <div class="first-item">
            <img
              class="img"
              src="/img/header/icon-lock-closed.svg"
              alt="login"
            />
            <div class="text">로그인</div>
          </div>
          <div class="second-item">
            <img
              class="img"
              src="/img/header/icon-user-add.svg"
              alt="user-add"
            />
            <div class="text">회원가입</div>
          </div>
          <div class="third-item">
            <img class="img" src="/img/header/icon-otm-blog.svg" alt="blog" />
            <div class="text">블로그</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <img
            class="first-img"
            src="/img/header/otm-logo.svg"
            alt="otm-logo"
          />
          <div class="second-item" />
          <img
            class="third-img"
            src="/img/header/menu-expert.svg"
            alt="menu-expert"
          />
        </div>
        <div class="right">
          <div class="first-item">서비스 소개</div>
          <div class="second-item">상표검토신청</div>
          <div class="third-item">상표출원신청</div>
          <div class="fourth-item"></div>
        </div>
      </div>
    </div>
  );
};
