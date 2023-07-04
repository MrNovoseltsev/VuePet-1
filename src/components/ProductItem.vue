<template>
  <li class="catalog__item">
            <!-- Механизм передачи событий по цепочке -->
            <!-- <a class="catalog__pic" href="#" @click.prevent="$emit('gotoPage', 'product', {id: product.id})"> -->
            <router-link class="catalog__pic" :to="{ name: 'product', params: { upt: product.id } }">
              <img :src="product.image" :alt="product.title">
            </router-link>

            <h3 class="catalog__title">
              <a href="#">
                {{product.title}}
              </a>
            </h3>

            <span class="catalog__price">
              {{ priceFormatted }} ₽
            </span>

            <ul class="colors colors--black">
              <li class="colors__item">
                <label class="colors__label" for="color-сheck">
                  <input class="colors__radio sr-only" type="radio" value="#73B6EA" v-model="color">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-сheck">
                  <input class="colors__radio sr-only" type="radio" value="#8BE000" v-model="color">
                  <span class="colors__value" style="background-color: #8BE000;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color-сheck">
                  <input class="colors__radio sr-only" type="radio" value="#222" v-model="color">
                  <span class="colors__value" style="background-color: #222;">
                  </span>
                </label>
              </li>
            </ul>
          </li>
</template>

<script>
// import eventBus from '@/eventBus';
import priceFormat from '@/utils/priceFormat';

export default {
  data() {
    return {
      color: '#73B6EA',
    };
  },
  props: ['product'],
  computed: {
    priceFormatted() {
      return priceFormat(this.product.price);
    },
  },
  // methods: {
  //   gotoPageFunc(pageName, pageParams) {
  //     eventBus.$emit('gotoPage', pageName, pageParams);
  //   },
  // },
};
</script>
