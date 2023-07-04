<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Catalog
      </h1>
      <span class="content__info">
        152 products
      </span>
    </div>

    <div class="content__catalog">

      <ProductFilter v-model:price-from="filterPriceFrom" v-model:price-to="filterPriceTo"
      v-model:category-id="filterCategoryId"></ProductFilter>

      <section class="catalog">
        <!-- Механизм передачи событий по цепочке -->
        <ProductList :products="products" @gotoPage="(pageName, pageParams) => $emit('gotoPage', pageName, pageParams)"/>
        <!-- <ProductList :products="products" /> -->
        <BasePagination :page="page" :count="countProducts" :per-page="productsPerPage" @paginate="paginateFunc"/>

      </section>

    </div>
  </main>
</template>

<script>
import products from '@/data/products';
import ProductList from '@/components/ProductList.vue';
import BasePagination from '@/components/BasePagination.vue';
import ProductFilter from '@/components/ProductFilter.vue';
import CartPage from '@/pages/CartPage.vue';

export default {
  components: { ProductList, BasePagination, ProductFilter, CartPage },
  data() {
    return {
      filterPriceFrom: 0,
      filterPriceTo: 0,
      filterCategoryId: 0,

      page: 1,
      productsPerPage: 6,
    };
  },
  emits: ['gotoPage'],
  methods: {
    paginateFunc(curPage) {
      this.page = curPage;
    },
  },
  computed: {
    filteredProducts() {
      let filteredProducts = products;

      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price > this.filterPriceFrom);
      }

      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter((product) => product.price < this.filterPriceTo);
      }

      if (this.filterCategoryId) {
        filteredProducts = filteredProducts.filter((product) => product.categoryId
        === this.filterCategoryId);
      }

      return filteredProducts;
    },

    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    countProducts() {
      return this.filteredProducts.length;
    },
  },
};
</script>
