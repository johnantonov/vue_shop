<template>
<section class="fruits__section container">
  <h2 class="fruits__title section__title">ORGANIC FRUITS</h2>
  <p class="fruits__subtitle subtitle">Our organic fruits are hand-picked from local farms and delivered straight to your doorstep, ensuring that you get the freshest and most nutritious produce possible. We offer a wide selection of organic fruits grown without the use of harmful pesticides or chemicals.</p>
  <div class="fruits">
    <FruitCardVue
      v-for="fruit in fruits"
      :key="fruit.id"
      :id="fruit.id"
      :name="fruit.name"
      :type="fruit.type"
      :path="fruit.img"
      :price="fruit.price"
      :color="fruit.color"
    />
  </div>
  <div class="fruits__modal" v-if="modalOpen">
    <OrderPopUpVue
      @closePopUp="closePopUp"
      @openSuccessPopUp="openSuccessPopUp"
      />
  </div>
   <div v-if="success" class="overlay" @click="closeModal" @keydown.enter="closeModal" tabindex="0">
    <div class="fruits__modal fruits__modal_s" v-if="success">
        <SuccessVue/>
    </div>
  </div>
  <button @click="orderHandler()" class="btn fruits__btn">
    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
      <path d="M14 2.15073L11.9259 0.0766602V10.447L1.55556 0.0766602L0 1.63222L10.3704 12.0026H0L2.07407 14.0767H14V2.15073Z" fill="white"/>
    </svg>
    <span>order</span>
  </button>
</section>
</template>

<script lang="ts">
import FruitCardVue from '@/components/fruits/FruitCardVue.vue';
import OrderPopUpVue from '@/components/OrderPopUp/OrderPopUpVue.vue';
import { defineComponent } from 'vue';
import { mapGetters } from 'vuex';
import fruitsData from '@/data/fruits';
import SuccessVue from '../successPopUp/successVue.vue';

export default defineComponent({
  data() {
    return {
      modalOpen: false,
      success: false,
      fruits: fruitsData,
    };
  },
  methods: {
    // ...mapMutations({ putToOrder: 'addFruitsToOrder' }), // мы кладем фрукты по одному добавляя cheked на карточку товара, чтобы добавлять целиком при открытии заказа, нужно делать не кликабельными карточки при открытой модалке
    orderHandler() {
      if (this.storeFruits.length) {
        this.modalOpen = true;
        // this.putToOrder(this.storeFruits);
      }
    },
    closePopUp() {
      this.modalOpen = false;
    },
    openSuccessPopUp() {
      this.modalOpen = false;
      this.success = true;
    },
    closeModal() {
      this.success = false;
    },
  },
  computed: {
    ...mapGetters({ storeFruits: 'returnCart', order: 'returnOrder' }),
  },
  components: { FruitCardVue, OrderPopUpVue, SuccessVue },
});
</script>

<style>
.fruits__section {
  margin-bottom: 80px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Затемнение фона */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999; /* Положите слой поверх других элементов */
}

.fruits__subtitle {
  margin-bottom: 44px;
}

.fruits {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 14px;
  max-width: 1400px;
  margin: 0 auto 44px auto;
}

.fruits__modal {
  position: fixed;
  width: 90%;
  max-width: 900px;
  max-height: 85%;
  overflow-y: auto;
  top: 10%;
  right: 50%;
  z-index: 999999;
  transform: translate(50%);
}
.fruits__modal_s {
  overflow-y: hidden;
}

.fruits li:nth-child(7n), .fruits li:nth-child(8n), .fruits li:nth-child(9n) {
  display: none;
}

.fruits__btn {
  font-size: 14px;
  color: var(--lightColor);
  background: var(--btnHover);
  margin: 0 auto;
}
.fruits__btn:hover {
  background-color: var(--lightColor);
}
.fruits__btn > svg {
  margin-right: 5px;
}

@media (min-width: 550px) {
  .fruits__btn {
    font-size: 18px;
  }
}

@media (min-width: 848px) {
  .fruits__section {
    margin-bottom: 144px;
  }

  .fruits li:nth-child(7n), li:nth-child(8n) {
    display: block;
  }
}

@media (min-width: 1251px) {
  .fruits li:nth-child(9n) {
    display: block;
  }
}
</style>
