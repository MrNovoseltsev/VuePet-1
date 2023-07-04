<template>
  <ul class="catalog__pagination pagination">
          <li class="pagination__item">
            <a href="#" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled':
            this.page === 1}"
            aria-label="Previous page" @click.prevent="pageDown">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-left"></use>
              </svg>
            </a>
          </li>
          <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
            <a href="#" class="pagination__link" :class="{'pagination__link--current':
            pageNumber === page}" @:click.prevent="paginateFunc(pageNumber)">
              {{ pageNumber }}
            </a>
          </li>
          <li class="pagination__item">
            <a href="#" class="pagination__link pagination__link--arrow" :class="{'pagination__link--disabled':
            this.page === 4}"
            aria-label="Next page" @click.prevent="pageUp">
              <svg width="8" height="14" fill="currentColor">
                <use xlink:href="#icon-arrow-right"></use>
              </svg>
            </a>
          </li>
        </ul>
</template>

<script>

export default {
  emits: ['paginate'],
  // model: {
  //   prop: 'page',
  //   event: 'paginate',
  // },
  watch: {
    priceFrom(value) {
      this.currentPriceFrom = value;
    },
    priceTo(value) {
      this.currentPriceTo = value;
    },
    categoryId(value) {
      this.currentCategoryId = value;
    },
  },

  props: ['page', 'count', 'perPage'],
  computed: {
    pages() {
      return Math.ceil(this.count / this.perPage);
    },
  },
  methods: {
    paginateFunc(pageSelected) {
      // return this.page = page;
      this.$emit('paginate', pageSelected);
    },
    pageUp() {
      this.$emit('paginate', this.page === 4 ? this.page : this.page + 1);
    },
    pageDown() {
      this.$emit('paginate', this.page === 1 ? this.page : this.page - 1);
    },
  },
};
</script>
