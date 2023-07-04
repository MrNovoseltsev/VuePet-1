<template>
  <aside class="filter">
        <h2 class="filter__title">Filters</h2>

        <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
          <fieldset class="form__block">
            <legend class="form__legend">Price</legend>
            <label class="form__label form__label--price" for="min-price">
              <input class="form__input" type="text" name="min-price" v-model.number="currentPriceFrom">
              <span class="form__value">From</span>
            </label>
            <label class="form__label form__label--price" for="max-price">
              <input class="form__input" type="text" name="max-price" v-model.number="currentPriceTo">
              <span class="form__value">To</span>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Category</legend>
            <label class="form__label form__label--select" for="category">
              <select class="form__select" type="text" name="category" v-model.number="currwntCategoryId">
                <option value="0">All catecories</option>
                <option :value="category.id" v-for="category in categories"
                :key="category.id">{{ category.title }}</option>
              </select>
            </label>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Color</legend>
            <ul class="colors">
              <li class="colors__item">
                <label class="colors__label" for="color">
                  <input class="colors__radio sr-only" type="radio" name="color"
                  value="#73B6EA" checked="">
                  <span class="colors__value" style="background-color: #73B6EA;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FFBE15">
                  <span class="colors__value" style="background-color: #FFBE15;">
                  </span>
                </label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#939393">
                  <span class="colors__value" style="background-color: #939393;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#8BE000">
                  <span class="colors__value" style="background-color: #8BE000;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FF6B00">
                  <span class="colors__value" style="background-color: #FF6B00;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#FFF">
                  <span class="colors__value" style="background-color: #FFF;">
                </span></label>
              </li>
              <li class="colors__item">
                <label class="colors__label" for="color">
                  <input class="colors__radio sr-only" type="radio" name="color" value="#000">
                  <span class="colors__value" style="background-color: #000;">
                </span></label>
              </li>
            </ul>
          </fieldset>

          <fieldset class="form__block">
            <legend class="form__legend">Size in Gb</legend>
            <ul class="check-list">
              <li class="check-list__item">
                <label class="check-list__label" for="volume">
                  <input class="check-list__check sr-only" type="checkbox" name="volume"
                  value="8" checked="">
                  <span class="check-list__desc">
                    8
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="volume">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="16">
                  <span class="check-list__desc">
                    16
                    <span>(461)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="volume">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="32">
                  <span class="check-list__desc">
                    32
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="volume">
                  <input class="check-list__check sr-only" type="checkbox" name="volume" value="64">
                  <span class="check-list__desc">
                    64
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="volume">
                  <input class="check-list__check sr-only" type="checkbox" name="volume"
                  value="128">
                  <span class="check-list__desc">
                    128
                    <span>(313)</span>
                  </span>
                </label>
              </li>
              <li class="check-list__item">
                <label class="check-list__label" for="volume">
                  <input class="check-list__check sr-only" type="checkbox" name="volume"
                  value="264">
                  <span class="check-list__desc">
                    264
                    <span>(313)</span>
                  </span>
                </label>
              </li>
            </ul>
          </fieldset>

          <button class="filter__submit button button--primery" type="submit">
            Apply
          </button>
          <button class="filter__reset button button--second" type="button" @click.prevent="reset">
            Reset
          </button>
        </form>
      </aside>
</template>

<script>
import categories from '@/data/categories';

export default {
  data() {
    return {
      currentPriceFrom: 0,
      currentPriceTo: 0,
      currentCategoryId: 0,
    };
  },
  props: ['priceFrom', 'priceTo', 'categoryId'],
  computed: {
    categories() {
      return categories;
    },
  },
  methods: {
    submit() {
      this.$emit('update:priceFrom', this.currentPriceFrom);
      this.$emit('update:priceTo', this.currentPriceTo);
      this.$emit('update:categoryId', this.currentCategoryId);
    },
    reset() {
      this.$emit('update:priceFrom', 0);
      this.$emit('update:priceTo', 0);
      this.$emit('update:categoryId', 0);
    },
  },

};
</script>
