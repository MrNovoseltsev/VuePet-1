<template>
<main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{name: 'main'}">
            Catalog
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Cart
          </a>
        </li>
      </ul>

      <h1 class="content__title">
        Cart
      </h1>
      <span class="content__info">
        3 products
      </span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem v-for="item in productsCalc" :key="item.productId" :item="item"/>

          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">
            We&nbsp;will calculate delivery price on&nbsp;next step
          </p>
          <p class="cart__price">
            Total: <span>{{ totalPrice }} ₽</span>
          </p>

          <router-link :to="{name: 'order'}" tag="button" class="cart__button button button--primery" type="submit">
            Checkout
          </router-link>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
import priceFormat from '@/utils/priceFormat';
import { mapGetters } from 'vuex';
import CartItem from '@/components/CartItem.vue';

export default {
components: { CartItem},
computed: {
  ...mapGetters({productsCalc: 'cartDetailProducts', totalPrice: 'cartTotalPrice'}),
  priceFormatted() {
      return priceFormat($store.getters.cartDetailProducts.prices * this.item.amount);
    },
  // productsCalc() {
    // До того, как подключили mapGetters строка выглядела так:
    // return this.$store.getters.cartDetailProducts;
    // Потом она стала выглядеть так:
    // return this.cartDetailProducts;
    // А потом и вовсе стала не нужна
  // },
}
};
</script>
