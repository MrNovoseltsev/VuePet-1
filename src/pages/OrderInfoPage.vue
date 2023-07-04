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
        Order is processed <span>№ 23621</span>
      </h1>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Thank you for&nbsp;choosin our store.&nbsp;Email with order details&nbsp;will be sent to you.
            Our managers will contact с&nbsp;with youв&nbsp;within an hour to clarify delivery details.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item">
              <span class="dictionary__key">
                Recipient
              </span>
              <span class="dictionary__value">
                Mrs Melany Brown
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">
                Delivery address
              </span>
              <span class="dictionary__value">
                NY, 5-th avenue, b.1
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">
                Phone
              </span>
              <span class="dictionary__value">
                +35 11 234 74 84
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">
                Email
              </span>
              <span class="dictionary__value">
                customer@mail.com
              </span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key">
                Payment
              </span>
              <span class="dictionary__value">
                Card upon receipt
              </span>
            </li>
          </ul>
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
            <p>Delivery price: <b>500 ₽</b></p>
            <p>Total: <b>3</b> product on <b>37 970 ₽</b></p>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {

}
</script>
