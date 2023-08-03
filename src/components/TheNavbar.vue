<template>
  <nav class="nav">
    <div class="container">
      <v-logo />

      <ul class="nav__links" :class="{ active: navIsOpen }">
        <li v-for="link in links" class="nav__links_item" :key="link.id">
          <RouterLink
            @click="navIsOpen = false"
            class="nav__links_item_link"
            :to="link.path"
          >
            {{ link.name }}
          </RouterLink>
        </li>
      </ul>

      <div class="nav__actions">
        <i
          @click="$router.push({ name: 'filter' })"
          class="fa-solid fa-magnifying-glass"
        ></i>

        <div class="nav__actions_favorite">
          <span>{{ likedMeals.length }}</span>
          <i @click="mealsModal = true" class="fa-solid fa-heart"></i>
        </div>

        <i
          @click="signUpModal = true"
          class="fa-solid fa-arrow-right-to-bracket nav__actions_signIn"
        ></i>

        <i
          :class="{ 'fa-ellipsis-vertical': !navIsOpen, 'fa-xmark': navIsOpen }"
          @click="navIsOpen = !navIsOpen"
          class="fa-solid nav__actions_menu"
        ></i>

        <button @click="signUpModal = true" class="nav__actions_btn">
          <i class="fa-solid fa-arrow-right-to-bracket"></i>
          <p>Sign Up</p>
        </button>
      </div>
    </div>
  </nav>

  <v-modal
    @onClose="signUpModal = false"
    class="nav__modal"
    :isOpen="signUpModal"
  >
    <h3>SIGN UP</h3>
    <v-input type="text" placeholder="Full name" />
    <v-input type="email" placeholder="Email" />
    <button><p>Sign Up</p></button>
  </v-modal>

  <v-modal @onClose="mealsModal = false" :isOpen="mealsModal">
    <LikedMealsList @onPageChange="mealsModal = false" />
  </v-modal>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "v-navbar",
  data() {
    return {
      navIsOpen: false,
      signUpModal: false,
      mealsModal: false,
      links: [
        {
          id: 1,
          name: "Home",
          path: "/",
        },
        {
          id: 2,
          name: "Recipes",
          path: "/recipes",
        },
        {
          id: 3,
          name: "Categories",
          path: "/categories",
        },
        {
          id: 4,
          name: "Filter",
          path: "/filter",
        },
        {
          id: 5,
          name: "Contact",
          path: "/contact",
        },
      ],
    };
  },
  computed: {
    ...mapState({
      likedMeals: (state) => state.liked.likedMeals,
    }),
  },

  watch: {
    navIsOpen(newValue) {
      document.documentElement.style.overflow = newValue ? "hidden" : "";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/_mixins.scss";

.nav {
  background: $color-light;
  border-bottom: 1px solid #cccccc;
  padding: 8px 0;
  .container {
    @include flex(center, space-between);
  }

  &__links {
    list-style-type: none;
    @include flex;

    &_item {
      margin: 0 15px;

      &_link {
        transition: 0.3s ease;
        @include bodyText;
        position: relative;
        text-decoration: none;
        color: $color-black-50;

        &:hover,
        &.active {
          color: $color-black;
          &::before {
            width: 100%;
          }
        }

        &::before {
          transition: 0.2s linear;
          content: "";
          position: absolute;
          left: 0;
          bottom: -30%;
          height: 3px;
          width: 0;
          border-radius: 20px;
          background: $color-primary;
        }
      }
    }
  }

  &__modal {
    input {
      display: block;
      margin: 15px 0;
    }

    h3 {
      @include title1Text;
      text-align: center;
    }

    button {
      @include btn(100%, 0);
      margin-top: 10px;
    }
  }

  &__actions {
    @include flex;

    i {
      cursor: pointer;
      font-size: 1.2rem;
    }

    &_menu {
      margin-left: 8px;
      display: none;
      padding: 10px;
      color: $color-secondary;
      font-size: 1.8rem !important;
    }

    &_favorite {
      position: relative;
      margin: 0 25px;

      span {
        position: absolute;
        left: 70%;
        top: -40%;
        background: $color-primary;
        border-radius: 50%;
        padding: 0 5px;
        font-size: 12px;
      }

      i {
        transition: 0.3s;

        &:hover {
          color: red;
        }
      }
    }

    &_signIn {
      display: none;
    }

    &_btn {
      @include btn(100%, 0);
    }
  }
}

@media (max-width: 890px) {
  .nav .logo__title {
    display: none;
  }

  .nav__links_item {
    margin: 0 10px;
  }

  .nav__actions_favorite {
    margin: 0 20px;
  }
}

@media (max-width: 680px) {
  .nav__actions_btn {
    display: none;
  }

  .nav__actions_menu {
    display: block;
    z-index: 9999;
  }

  .nav__actions_signIn {
    display: block;
  }

  .nav__links {
    transition: 0.4s all ease;
    z-index: 999;
    flex-direction: column !important;
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: $color-black-50;
    backdrop-filter: blur(5px);
    visibility: hidden;
    opacity: 0;
    transform: scale(0);

    &.active {
      visibility: visible;
      opacity: 1;
      transform: scale(1);
    }

    &_item {
      margin: 8px 0;

      &_link {
        @include headlineText;
        color: $color-light;

        &:hover,
        &.active {
          color: $color-primary;
        }
      }
    }
  }
}
</style>
