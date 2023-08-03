<template>
  <section class="header container">
    <div class="header__content">
      <h1
        data-aos="fade-right"
        data-aos-duration="800"
        class="header__content_title"
      >
        Be The Fastest In Delivery Your <span>Food</span>
      </h1>

      <p
        data-aos="fade-right"
        data-aos-duration="1000"
        class="header__content_subtitle"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
        purus sit amet
      </p>

      <button
        data-aos-duration="1200"
        data-aos="fade-in"
        class="header__content_btn"
      >
        <p>Get Started</p>
      </button>
    </div>

    <div class="header__images">
      <img data-aos-duration="1800" data-aos="zoom-in" class="img1" src="@/assets/img/food1.png" alt="Food 1" />
      <img data-aos-duration="800" data-aos="zoom-in" class="img2" src="@/assets/img/food2.png" alt="Food 2" />
      <img data-aos-duration="1400" data-aos="zoom-in" class="img3" src="@/assets/img/food3.png" alt="Food 3" />
    </div>

    <div class="header__items">
      <svg
        class="line1"
        width="179"
        height="37"
        viewBox="0 0 179 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.114317C0 0.114317 22.062 17.4303 36.9364 18.9664C59.1594 21.2613 70.9046 -0.782257 93.1999 0.114317C111.874 0.865263 121.363 25.1442 140.015 23.841C154.597 22.8222 171.797 -1.87819 176.092 0.114317C180.387 2.10683 179.528 8.35203 176.092 16.9446C172.656 25.5372 154.319 36.4377 140.015 36.9826C121.521 37.687 111.703 16.8149 93.1999 16.9446C70.7762 17.1018 59.2967 36.1188 36.9364 34.1298C22.0601 32.8065 0 18.9664 0 18.9664V0.114317Z"
          fill="#FFAC4B"
        />
      </svg>

      <svg
        class="line2"
        width="179"
        height="37"
        viewBox="0 0 179 37"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0.114317C0 0.114317 22.062 17.4303 36.9364 18.9664C59.1594 21.2613 70.9046 -0.782257 93.1999 0.114317C111.874 0.865263 121.363 25.1442 140.015 23.841C154.597 22.8222 171.797 -1.87819 176.092 0.114317C180.387 2.10683 179.528 8.35203 176.092 16.9446C172.656 25.5372 154.319 36.4377 140.015 36.9826C121.521 37.687 111.703 16.8149 93.1999 16.9446C70.7762 17.1018 59.2967 36.1188 36.9364 34.1298C22.0601 32.8065 0 18.9664 0 18.9664V0.114317Z"
          fill="#FFAC4B"
        />
      </svg>

      <div data-aos="zoom-in" data-aos-duration="1000" class="circle1 circle"></div>
      <div data-aos="zoom-in" data-aos-duration="1000" class="circle2 circle"></div>
      <div data-aos="zoom-in" data-aos-duration="1000" class="circle3 circle"></div>
      <div data-aos="zoom-in" data-aos-duration="1000" class="circle4 circle"></div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomeHeader",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";
.header {
  position: relative;
  padding-top: 100px;
  padding-bottom: 200px;
  @include flex(center, space-between);

  &__content {
    z-index: 3;
    position: relative;
    max-width: 500px;

    &_title {
      @include displayText;
      span {
        color: $color-primary;
      }
    }

    &_subtitle {
      @include bodyText;
      margin: 20px 0;
      color: $color-black-50;
    }

    &_btn {
      @include btn(0, 100%);
    }
  }

  &__images {
    img {
      position: absolute;
      z-index: 2;
      border-radius: 50%;
      filter: drop-shadow(1px 1px 10px $color-black-50);
    }

    .img1 {
      bottom: 0;
      right: 20px;
    }

    .img2 {
      width: 310px;
      height: 300px;
      top: 5%;
      left: 65%;
    }

    .img3 {
      bottom: 15%;
      left: 55%;
    }
  }

  &__items {
    .line1,
    .line2 {
      position: absolute;
      z-index: 1;
      bottom: 0;
      left: -6%;
    }

    .line2 {
      bottom: 10%;
    }

    .circle {
      z-index: 1;
      position: absolute;
      right: 12%;
      top: 43%;
      background: $color-secondary;
      border-radius: 50%;
      width: 50px;
      height: 50px;
    }

    .circle2 {
      top: 80%;
      right: 45%;
      width: 30px;
      height: 30px;
    }

    .circle3 {
      top: 40%;
      right: 40%;
      width: 20px;
      height: 20px;
    }

    .circle4 {
      top: 10%;
      right: 38%;
      width: 45px;
      height: 45px;
    }
  }
}

@media (max-width: 880px) {
  .header{
    padding-top: 80px;
  }
  .header__images .img1,
  .header__items .circle {
    display: none;
  }
}
</style>
