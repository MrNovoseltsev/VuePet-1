<template>
  <ul class="catalog__list">
    <!-- Механизм передачи событий по цепочке -->
    <ProductItem v-for="product in products" :key="product.id" :product="product" @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"></ProductItem>
    <!-- <ProductItem v-for="product in products" :key="product.id" :product="product"></ProductItem> -->
  </ul>
</template>

<script>
import ProductItem from './ProductItem.vue';

export default {
  components: { ProductItem },
  props: ['products'],
};
</script>
