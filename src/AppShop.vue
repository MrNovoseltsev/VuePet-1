<template>
  <div>
    <header class="header">
      <div class="header__wrapper container">
        <span class="header__info">Catalog</span>

        <a class="header__logo" href="#">
          <img src="img/svg/logo-tech.svg" alt="Logo of the shop" width="190" height="33">
        </a>

        <a class="header__tel" href="tel:+35 11 500 90 09">
          +35 11 500 90 09
        </a>
        <CartIndicator />

      </div>
    </header>

    <router-view></router-view>

    <footer class="footer">
      <div class="footer__wrapper container">
        <ul class="footer__links">
          <li>
            <a class="footer__link" href="#">
              Catalog
            </a>
          </li>
          <li>
            <a class="footer__link" href="tel:+35115009009">
              +35 11 500 90 09
            </a>
          </li>
          <li>
            <a class="footer__link" href="mailto:hi@technol.com">
              hi@technol.com
            </a>
          </li>
          <li>
            <a class="footer__link" href="#">
              Sale
            </a>
          </li>
          <li>
            <a class="footer__link footer__link--medium" href="#">
              Request a call
            </a>
          </li>
        </ul>

        <ul class="footer__social social">
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Vkontakte">
              <svg width="20" height="11" fill="currentColor">
                <use xlink:href="#icon-vk"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Inst">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-insta"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Facebook">
              <svg width="17" height="17" fill="currentColor">
                <use xlink:href="#icon-facebook"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Twitter">
              <svg width="17" height="14" fill="currentColor">
                <use xlink:href="#icon-twitter"></use>
              </svg>
            </a>
          </li>
          <li class="social__item">
            <a class="social__link" href="#" aria-label="Telegram">
              <svg width="19" height="17" fill="currentColor">
                <use xlink:href="#icon-telegram"></use>
              </svg>
            </a>
          </li>
        </ul>

        <p class="footer__desc">
          All rights on&nbsp;materials, are placed on the&nbsp;site, protected&nbsp;with&nbsp;law&nbsp;,
          &nbsp;including &nbsp;copyrights&nbsp;.
        </p>

        <ul class="footer__data">
          <li>
            <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
              Privacy policy
            </a>
          </li>
          <li>
            <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
              Public offer
            </a>
          </li>
        </ul>

        <span class="footer__copyright">
          © 2023 Technol
        </span>
      </div>
    </footer>
  </div>

<!-- Механизм передачи событий по цепочке -->
<!-- <component :is="currenPageComponent" :page-params="currentPageParams" @gotoPage="(pageName, pageParams) => gotoPageFunc(pageName, pageParams)"/> -->
  <!-- <component :is="currenPageComponent" :page-params="currentPageParams" /> -->
</template>

<script>
import CartIndicator from './components/CartIndicator.vue';

export default {
  components: {CartIndicator},
};
</script>
