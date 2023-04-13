# 🏘️ BANGSAM

## 부동산 채팅 WEB/APP

---

## ✏️ 요약

    기존의 부동산 WEB 형식에 Custom 하게 채팅 기능을 추가

---

<br />

## ⚙️ Dependency

<br />

- axios
- js-cookie
- react-hook-form,
- @tanstack/react-query
- @tanstack/react-query-devtools
- react-helmet
- react-js-pagination

- styled-components
- react-slick
- @chakra-ui/react
- slick-carousel

- react-icons
- @fortawesome/free-brands-svg-icons
- @fortawesome/free-regular-svg-icons
- @fortawesome/free-solid-svg-icons
- @fortawesome/react-fontawesome

<br />

---

<br />

## 📄 페이지 & 컴포넌트

<br/>

- [x] 로딩

- [x] 헤더

  - [x] WEB

    - [x] 홈
    - [x] 검색
      - [x] 주소 검색
        - [x] 도 / 시 + 구 + 동
    - [x] 채팅목록
    - [x] 마이 페이지

    <br/>

- [x] 홈 페이지

  - [x] Brand name
  - [x] Icon Buttons
    - [x] 방 종류
  - [x] TopViews (조회순)

  <br/>

- [x] 회원가입 페이지

  - [x] User model 기입
  - [x] 가입하기
  - [x] 카카오, 네이버 가입

  <br/>

- [x] 로그인 페이지

  - [x] ID / PW 기입
  - [x] 로그인하기
    - [x] ID/PW 유효성 검사
  - [x] ID / 비번찾기 / 회원가입
  - [x] 카카오, 네이버 가입

  <br/>

- [x] 마이 페이지

  - [x] 프로필 정보

  - [x] 최근 본 리스트

  - [x] 위시 리스트

  - [x] 판매 내역

    - [x] 모든 판매 내역
    - [x] 판매중 내역
    - [x] 판매완료 내역

  <br/>

- [x] 하우스 리스트 페이지

  - [x] 옵션 리스트

    - [x] 메뉴
      - [x] Responsive 햄버거

  - [x] 방 목록

    - [x] 대표 이미지
    - [x] 좋아요
    - [x] 주소
    - [x] 방 종류
    - [x] 전세/월세/매매
    - [x] 가격

    <br/>

- [x] 지역 상세 페이지

  - [x] 이미지
  - [x] 정보 창

    - [x] 좋아요
    - [x] 설명
    - [x] 찜 버튼
    - [x] 주소
    - [x] 월세/전세/매매 표시 (가격)
    - [x] 평수
    - [x] 집 종류
    - [x] 추가 옵션
    - [x] 안전 옵션

    - [x] 요약 정보 모달
      - [x] 채팅

    <br/>

- [x] 채팅 페이지

  - [x] 리스트

    - [x] 유저 프로필
    - [x] 제목
    - [x] 읽지 않은 채팅 개수 표시
    - [x] 최신 날짜
    - [x] 삭제 Button

  - [x] 채팅창

- [x] 집 판매 페이지

- [x] 집 수정 페이지

- [x] 회원가입 페이지
- [x] 아이디 찾기 페이지
- [x] 비밀번호 찾기 페이지

<br />

---

<br />

## 기능 목록

- [x] 로그인

  - [x] post api
  - [x] validate

- [x] 회원가입

  - [x] post api
  - [x] validate

- [x] 아이디 찾기

  - [x] post api
  - [x] validate

- [x] 비밀번호 찾기

  - [x] post api
  - [x] validate

- [x] 로그아웃

  - [x] post api
  - [x] validate

- [x] 판매하기

  - [x] 이미지 url 만들기
    - [x] post url api
      - [x] url 만들기
      - [x] 이미지 model post
  - [x] post api
  - [x] validate

- [x] 수정하기

  - [x] get api
  - [x] put api
  - [x] validate

- [x] HouseList

  - [x] useInfiniteScroll

    - [x] scroll handler
    - [x] requestAnimationFrame 이벤트 제한 함수
    - [x] params 변할 시 가진 state 초기화 및 api call

  - [x] Grid
    - [x] HouseCard
    - [x] Responsive

## 📋 DB Model Diagram

![diagram](https://velog.velcdn.com/images/hugh0223/post/e6abb1ec-5b59-4b1c-9028-35ae68a412c7/image.png)

<br />

