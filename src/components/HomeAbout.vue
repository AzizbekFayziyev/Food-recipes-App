<template>
  <section class="about container">
    <div class="about__img" data-aos-duration="1000" data-aos="fade-right">
      <img class="main" src="@/assets/img/about1.png" alt="Meals 1" />
      <div>
        <img src="@/assets/img/about2.png" alt="Meals 2" />
        <img src="@/assets/img/about3.png" alt="Meals 3" />
      </div>
    </div>
    <div class="about__content" data-aos-duration="1000" data-aos="fade-left">
      <div class="title">
        <span>What the say</span>
        <h3>What Our Customers Say About Us</h3>
      </div>

      <div class="about__content_cards">
        <div
          v-for="customer in customers"
          :key="customer"
          class="about__content_cards_card"
        >
          <div class="info">
            <img :src="customer.bio" :alt="customer.name" />

            <div>
              <h5>{{ customer.name }}</h5>
              <div class="rating">
                <i v-for="rate in customer.rate" :class="[rate, 'fa-star']"></i>
              </div>
            </div>
          </div>

          <p class="body">“{{ customer.title }}”</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "HomeAbout",
  data() {
    return {
      customers: [
        {
          bio: "/src/assets/img/bio1.png",
          name: "Naura Silvana",
          rate: ["fa-solid", "fa-solid", "fa-solid", "fa-solid", "fa-regular"],
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
        },
        {
          bio: "/src/assets/img/bio2.png",
          name: "Azura",
          rate: [
            "fa-solid",
            "fa-solid",
            "fa-solid",
            "fa-regular",
            "fa-regular",
          ],
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
        },
        {
          bio: "https://avatars.githubusercontent.com/u/104155154?v=4",
          name: "AVANCODER",
          rate: ["fa-solid", "fa-solid", "fa-solid", "fa-solid", "fa-solid"],
          title:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/mixins.scss";
.about {
  margin: 50px auto;
  @include flex(start, space-evenly);

  .title {
    @include title(start, left);
    max-width: 400px;
  }

  &__img {
    @include flex;
    flex-direction: column;
    margin-bottom: 20px;
    div {
      @include flex;
    }
    img {
      margin: -15px;
    }
  }

  &__content {
    margin-left: 20px;
    width: 100%;
    max-width: 800px;

    &_cards {
      width: 100%;
      margin-top: 40px;
      padding: 5px;
      padding-bottom: 15px;
      overflow-x: auto;
      @include flex(center, start);

      &_card {
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0 0 3px $color-black-50;
        margin-right: 40px;

        &:nth-child(3) {
          margin-right: 0;
        }
        .info {
          @include flex(center, start);
          margin-bottom: 15px;

          img {
            width: 59px;
            height: 60px;
            border: 2px solid $color-secondary;
            border-radius: 50%;
            margin-right: 20px;
          }

          h5 {
            @include headlineText;
            margin-bottom: 5px;
          }

          .rating {
            i {
              color: $color-primary;
            }
          }
        }

        .body {
          width: 350px;
          @include bodyText;
          color: $color-black-50;
        }
      }
    }
  }
}

@media (max-width: 1270px) {
  .about__content {
    max-width: 450px;
  }
}

@media (max-width: 920px) {
  .about__content {
    max-width: 350px;
  }
}

@media (max-width: 820px) {
  .about {
    @include flex;
    flex-direction: column;
  }
  .about__content {
    max-width: 800px;

    &_cards {
      margin-top: 10px;
    }
  }

  .about__img img {
    width: 100%;
    margin: -5px;
  }
}
</style>
