<template>
  <div class="bg">
    <footer class="footer container">
      <div class="content">
        <div class="footer__social">
          <v-logo />

          <p class="footer__social_title">
            Jalan Semangka Raya, Telaga Murni,Cikarang Barat, Kab. Bekasi
          </p>

          <div class="footer__social_links">
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
          </div>
        </div>

        <div class="footer__link">
          <h5>Company</h5>
          <a href="#">About Us</a>
          <a href="#">Career</a>
          <a href="#">Services</a>
        </div>

        <div class="footer__link">
          <h5>Policy</h5>
          <a href="#">FAQ</a>
          <a href="#">Privacy</a>
          <a href="#">Shipping</a>
        </div>

        <div class="footer__link">
          <h5>Get In Touch</h5>
          <a href="#">+62 896 7311 2766</a>
          <a href="#">food@example.com</a>
        </div>
      </div>

      <div class="footer__bottom">
        <h4>© 2022 Let’sFood. ALL RIGHT RESERVED.</h4>
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  name: "v-footer",
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/_varribles.scss";
@import "@/assets/scss/_mixins.scss";
.bg {
  background: $color-light;
}
.footer {
  margin-top: 50px;

  .content {
    @include flex(start, space-between);
  }

  &__social {
    margin-right: 20px;
    &_title {
      margin-top: 20px;
      @include bodyText;
      color: $color-black-50;
      max-width: 400px;
    }

    &_links {
      margin: 10px auto;
      i {
        border-radius: 50%;
        padding: 10px;
        transition: 0.3s all ease;
        cursor: pointer;
        margin: 0 5px;
        color: $color-black;
        font-size: 25px;

        &:nth-child(1) {
          margin-left: 0;
        }

        &:hover {
          background: $color-primary;
        }
      }
    }
  }

  &__link {
    text-align: center;
    margin: 15px 25px;

    h5 {
      @include headlineText;
    }

    a {
      text-decoration: none;
      margin: 15px 0;
      display: block;
      @include bodyText;
      color: $color-black-50;
    }
  }

  &__bottom {
    border-top: 1px solid $color-black-50;
    text-align: center;
    padding: 35px;
    margin-top: 30px;

    h4 {
      @include bodyText;
      color: $color-black-50;
    }
  }
}

@media (max-width: 680px) {
  .footer {
    .content {
      @include flex(center, center);
      flex-direction: column;
    }
  }
}
</style>
