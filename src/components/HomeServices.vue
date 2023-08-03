<template>
  <section class="services container">
    <div class="title">
      <span data-aos-duration="800" data-aos="fade-up">How it works</span>
      <h3 data-aos-duration="1000" data-aos="fade-up">What We Serve</h3>
      <p data-aos-duration="1200" data-aos="fade-up">
        Product Quality Is Our Priority, And Always Guarantees Halal And Safety
        Until It Is In Your Hands.
      </p>
    </div>

    <div class="services__cards">
      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        v-for="card in serviceCards"
        :key="card"
        class="services__cards_card"
      >
        <img
          class="services__cards_card_img"
          :src="card.img"
          :alt="card.title"
        />
        <h4 class="services__cards_card_title">{{ card.title }}</h4>
        <p class="services__cards_card_body">{{ card.body }}</p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomeServices",
  data() {
    return {
      serviceCards: [
        {
          img: "../assets/img/service1.png",
          title: "Easy To Order",
          body: "You only order through the app",
        },
        {
          img: "../assets/img/service2.png",
          title: "Fastest Delivery",
          body: "Delivery will be on time",
        },
        {
          img: "../assets/img/service3.png",
          title: "Best Quality",
          body: "The best quality of food for you",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";

.services {
  margin-top: 80px;
  .title {
    @include title;
  }

  &__cards {
    margin: 30px 0;
    @include flex(center, space-evenly);
    flex-wrap: wrap;

    &_card {
      overflow: hidden;
      position: relative;
      cursor: pointer;
      transition: 0.3s all ease;
      padding: 10px;
      border-radius: 8px;
      text-align: center;
      margin: 15px 10px;
      box-shadow: 0 0 10px $color-black-50;

      &_img {
        width: 180px;
        height: 180px;
      }

      &_title {
        @include title2Text;
        margin: 5px 0;
      }

      &_body {
        @include bodyText;
        color: $color-black-50;
        max-width: 190px;
      }

      &::before {
        z-index: -1;
        content: "";
        transition: 0.3s all ease;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 0;
        position: absolute;
        background: $color-primary;
      }

      &:hover {
        box-shadow: 0 0 10px $color-black-50;

        &::before {
          height: 100%;
        }
      }
    }
  }
}
</style>
