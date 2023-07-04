<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="index.html">
            Catalog
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link" href="cart.html">
            Cart
          </a>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link">
            Checkout
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
          <div class="cart__data">
            <BaseFormText v-model="formError.name" title="Name" :error="formError.name" placeholder="Input your name"/>

            <label class="form__label">
              <input class="form__input" v-model="formData.address" type="text" name="address" placeholder="Input your address">
              <span class="form__value">Delivery address</span>
            </label>

            <label class="form__label">
              <input class="form__input" v-model="formData.phone" type="tel" name="phone" placeholder="Input your phone">
              <span class="form__value">Phone</span>
              <span class="form__error" v-if="formError.phone">Wrong phone format</span>
            </label>

            <label class="form__label">
              <input class="form__input" v-model="formData.email" type="email" name="email" placeholder="Input your Email">
              <span class="form__value">Email</span>
            </label>

            <BaseFormTextarea title="Comments to the order" :error="formError.comments" placeholder="Your comments"/>

            <!-- <BaseFormField title="Комментарий к заказу" :error="formError.comments">
              <textarea class="form__input form__input--area" v-model="formData.comments" name="comments" placeholder="Ваши пожелания"></textarea>
            </BaseFormField> -->
          </div>

          <div class="cart__options">
            <h3 class="cart__title">Delivery</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="0" checked="">
                  <span class="options__value">
                    Pickup <b>for free</b>
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="delivery" value="500">
                  <span class="options__value">
                    Courier <b>500 ₽</b>
                  </span>
                </label>
              </li>
            </ul>

            <h3 class="cart__title">Payment</h3>
            <ul class="cart__options options">
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="card">
                  <span class="options__value">
                    Card upon receipt
                  </span>
                </label>
              </li>
              <li class="options__item">
                <label class="options__label">
                  <input class="options__radio sr-only" type="radio" name="pay" value="cash">
                  <span class="options__value">
                    Cash upon receipt
                  </span>
                </label>
              </li>
            </ul>
          </div>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li class="cart__order">
              <h3>Smartphone Xiaomi Redmi Note 7 Pro 6/128GB</h3>
              <b>18 990 ₽</b>
              <span>Vendor code: 150030</span>
            </li>
            <li class="cart__order">
              <h3>Hoverboard Razor Hovertrax 2.0ii</h3>
              <b>4 990 ₽</b>
              <span>Vendor code: 150030</span>
            </li>
            <li class="cart__order">
              <h3>Electric drift-car Razor Lil’ Crazy</h3>
              <b>8 990 ₽</b>
              <span>Vendor code: 150030</span>
            </li>
          </ul>

          <div class="cart__total">
            <p>Delivery: <b>500 ₽</b></p>
            <p>Total: <b>3</b> products for <b>37 970 ₽</b></p>
          </div>

          <router-link :to="{name: 'orderInfo'}" class="cart__button button button--primery" type="submit">
            Checkout
          </router-link>
        </div>
        <div class="cart__error form__error-block">
          <h4>Order haven't sent!</h4>
          <p>
            Looks like an error has occurred. Try submitting again or reload the page.
          </p>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
// import BaseFormField from '@/components/BaseFormField.vue';
import BaseFormText from '@/components/BaseFormText.vue';
import BaseFormTextarea from '@/components/BaseFormTextarea.vue';

export default {
  components: { BaseFormText, BaseFormTextarea },
  data() {
    return {
      formData: {},
      formError: {},
    }
  }
}
</script>
