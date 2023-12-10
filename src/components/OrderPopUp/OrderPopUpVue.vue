<template>
  <section class="order__section container">
    <div class="order__header">
      <h3 class="order__title">YOUR ORDER</h3>
      <button class="order__close" @click.prevent="closePopUp()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M18 6L6 18" stroke="#AE1332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M6 6L18 18" stroke="#AE1332" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>
    <div class="order__form">
      <ul class="order__list">
        <OrderFruitCardVue
          v-for="fruit in fruits"
          :key="fruit.id"
          :id="fruit.id"
          :name="fruit.name"
          :type="fruit.type"
          :price="fruit.price"
          :color="fruit.color"
          :path="fruit.path"
        />
      </ul>
    </div>
    <div class="form__wrapper_order">
      <FormOrderVue @openSuccessPopUp="openSuccessPopUp()"/>
      <img class="order__img" src="../../assets/order/girl.png" alt="">
    </div>
  </section>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';
import OrderFruitCardVue from './OrderFruitCardVue.vue';
import FormOrderVue from '../FormOrder/FormOrderVue.vue';

export default {
  components: { OrderFruitCardVue, FormOrderVue },
  computed: {
    ...mapGetters({ fruits: 'returnCart', order: 'returnOrder' }),
  },
  methods: {
    ...mapMutations({ clean: 'cleanOrder' }),
    closePopUp() {
      this.$emit('closePopUp', 1);
      this.clean();
    },
    openSuccessPopUp() {
      this.$emit('openSuccessPopUp');
    },
  },
};
</script>

<style>
.order__section {
  border-radius: 30px;
  padding: 20px;
  background-color: var(--lightColor);
  color: black;
  border-radius: 20px;
}

.order__header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

.order__title {
  color: var(--baseColor);
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-size: 28px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -1.6px;
  text-transform: uppercase;
}

.order__close {
  transform: translateY(-10px);
}

.order__list {
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.form__wrapper_order {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.order__img {
  align-self:flex-end;
  width: 50%;
  transform: translateY(20px);
}

@media (min-width: 500px) {
  .order__list {
    display: flex;
    flex-flow: row wrap;
    gap: 12px;
  }
}

@media (max-width: 768px) {
  .order__img {
    display: none;
  }
}
</style>
