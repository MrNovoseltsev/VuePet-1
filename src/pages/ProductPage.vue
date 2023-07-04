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
          <router-link class="breadcrumbs__link" :to="{name: 'main'}">
            {{ categoryFunc.title}}
          </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            {{ productFunc.title}}
          </a>
        </li>
      </ul>
    </div>

    <section class="item">
      <div class="item__pics pics">
        <div class="pics__wrapper">
          <img width="570" height="570" :src="productFunc.image" :alt="productFunc.title">
        </div>
        <!-- <ul class="pics__list">
          <li class="pics__item">
            <a href="" class="pics__link pics__link--current">
              <img width="98" height="98" src="img/phone-square-1.jpg" srcset="img/phone-square-1@2x.jpg 2x" alt="Название товара">
            </a>
          </li>
          <li class="pics__item">
            <a href="" class="pics__link">
              <img width="98" height="98" src="img/phone-square-2.jpg" srcset="img/phone-square-2@2x.jpg 2x" alt="Название товара">
            </a>
          </li>
          <li class="pics__item">
            <a href="" class="pics__link">
              <img width="98" height="98" src="img/phone-square-3.jpg" srcset="img/phone-square-3@2x.jpg 2x" alt="Название товара">
            </a>
          </li>
          <li class="pics__item">
            <a class="pics__link" href="#">
              <img width="98" height="98" src="img/phone-square-4.jpg" srcset="img/phone-square-4@2x.jpg 2x" alt="Название товара">
            </a>
          </li>
        </ul> -->
      </div>

      <div class="item__info">
        <span class="item__code">Vendor code: {{ productFunc.id}}</span>
        <h2 class="item__title">
          {{ productFunc.title}}
        </h2>
        <div class="item__form">
          <form class="form" action="#" method="POST" @submit.prevent="addToCart">
            <b class="item__price">

              {{ priceFormatted }} ₽
            </b>

            <fieldset class="form__block">
              <legend class="form__legend">Color:</legend>
              <ul class="colors">
                <li class="colors__item">
                  <label class="colors__label">
                    <input class="colors__radio sr-only" type="radio" name="color-item" value="blue" checked="">
                    <span class="colors__value" style="background-color: #73B6EA;">
                    </span>
                  </label>
                </li>
                <li class="colors__item">
                  <label class="colors__label">
                    <input class="colors__radio sr-only" type="radio" name="color-item" value="yellow">
                    <span class="colors__value" style="background-color: #FFBE15;">
                    </span>
                  </label>
                </li>
                <li class="colors__item">
                  <label class="colors__label">
                    <input class="colors__radio sr-only" type="radio" name="color-item" value="gray">
                    <span class="colors__value" style="background-color: #939393;">
                  </span></label>
                </li>
              </ul>
            </fieldset>

            <fieldset class="form__block">
              <legend class="form__legend">Size in Gb:</legend>

              <ul class="sizes sizes--primery">
                <li class="sizes__item">
                  <label class="sizes__label">
                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="32">
                    <span class="sizes__value">
                      32gb
                    </span>
                  </label>
                </li>
                <li class="sizes__item">
                  <label class="sizes__label">
                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="64">
                    <span class="sizes__value">
                      64gb
                    </span>
                  </label>
                </li>
                <li class="sizes__item">
                  <label class="sizes__label">
                    <input class="sizes__radio sr-only" type="radio" name="sizes-item" value="128" checked="">
                    <span class="sizes__value">
                      128gb
                    </span>
                  </label>
                </li>
              </ul>
            </fieldset>

            <div class="item__row">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" v-model.number="productAmount" name="count">

                <button type="button" aria-label="Добавить один товар">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <button class="button button--primery" type="submit">
                To the cart
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="item__desc">
        <ul class="tabs">
          <li class="tabs__item">
            <a class="tabs__link tabs__link--current">
              Description
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Characteristics
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Guarantee
            </a>
          </li>
          <li class="tabs__item">
            <a class="tabs__link" href="#">
              Payment and delivery
            </a>
          </li>
        </ul>

        <div class="item__content">
          <p>
            Navigation GPS, ГЛОНАСС, BEIDOU Galileo and QZSS<br>
            Synchronizing with a snartphone<br>
            Connection via Bluetooth Smart, ANT+ and Wi-Fi<br>
            Applications support<br>
          </p>

          <a href="#">
            All characteristics
          </a>

          <h3>What is it?</h3>

          <p>
            Wahoo ELEMNT BOLT GPS is a cycling computer that allows you to optimize your cycling workouts to make them as efficient as possible. Wahoo ELEMNT BOLT GPS syncs with sensors via ANT+, combining the information received from them. The data is shown on the display and also stored on the smartphone. At the same time, both a proprietary application and various third-party applications can be installed on a mobile device. The bike computer accurately tracks the location by receiving a signal from a whole complex of satellites. This information allows you to view already completed routes and plan new bike rides.
          </p>

          <h3>Design</h3>

          <p>
            The Wahoo ELEMNT BOLT bike computer is very compact. The dimensions of the device are only 74.6 x 47.3 x 22.1 mm. that does not exceed the dimensions of a smartphone. The body of the gadget is made of black plastic. On the side facing the user is a display with a diagonal of 56 mm. The display shows coordinates and speed, as well as information received from a smartphone and synchronized sensors: intensity, cadence, heart rate, etc. (sensors are not included). The case of the cycle computer has a degree of protection against moisture IPX7. This means that the device is not afraid of dust, and also withstands short-term (up to 30 minutes) immersion in water to a depth of no more than 1 meter.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import products from '@/data/products';
import categories from '@/data/categories';
import priceFormat from '@/utils/priceFormat';

export default {
  data() {
    return {
      productAmount: 1,
    };
  },
  computed: {
    productFunc() {
      return products.find((product) => product.id === +this.$route.params.upt);
    },
    categoryFunc() {
      return categories.find((category) => category.id === this.productFunc.categoryId);
    },
    priceFormatted() {
      return priceFormat(this.productFunc.price);
    },
  },
  methods: {
    addToCart() {
      this.$store.commit(
        'addProductToCart',
        {productId: this.productFunc.id, amount: this.productAmount}
      );
    },
  },
};
</script>
