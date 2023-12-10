<template>
  <button @click="checkedFruit()" class="fruit" :style="'background: ' + color">
    <div class="fruit__checkbox">
      <div class="fruit__checked">
        <div v-if="checked"></div>
      </div>
    </div>
    <h5 class="fruit__name"> {{ name }} </h5>
    <p class="fruit__type"> {{ type }} </p>
    <img class="fruit__img" :src="path" alt="">
    <p class="fruit__price"> {{ price }} UAH /kg</p>
  </button>
</template>

<script>
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

export default defineComponent({
  props: ['name', 'type', 'path', 'price', 'color', 'id'],
  data() {
    return {
      checked: false,
      fruit: {
        name: this.name,
        type: this.type,
        path: this.path,
        price: this.price,
        color: this.color,
        id: this.id,
      },
    };
  },
  methods: {
    ...mapMutations({
      addFruit: 'addFruitToCart',
      deleteFruit: 'deleteFruitFromCart',
      putToOrder: 'addFruitsToOrder',
      deleteFromOrder: 'deleteFruitFromOrder',
    }),
    checkedFruit() {
      this.checked = !this.checked;
      if (this.checked === true) {
        this.addFruit(this.fruit);
        this.putToOrder(this.fruit);
      } else if (this.checked === false) {
        this.deleteFruit(this.id);
        this.deleteFromOrder(this.id);
      }
    },
  },
});
</script>

<style>
  .fruit {
    position: relative;
    width: 100%;
    max-width: 389px;
    padding: 32px 24px 24px;
    text-align: left;
    border-radius: 20px;
  }

  .fruit:hover:after {
    background: rgba(0, 0, 0, 0.212);
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
  }

  .fruit:active:after {
    display: none;
  }

  .fruit__checkbox {
    display: block;
    margin-left: auto;
    border: 1.5px solid var(--lightColor);
    border-radius: 5px;
    width: 20px;
    height: 20px;
  }

  .fruit__checked {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .fruit__checked > div {
    width: 10px;
    height: 12px;
    border-bottom: 2px solid var(--lightColor);
    border-left: 2px solid var(--lightColor);
    transform: rotate(-45deg);
  }

  .fruit__name {
    margin-bottom: 8px;
    color: var(--lightColor);
    font-size: 24px;
    font-weight: 700;
    line-height: 116%;
    letter-spacing: -0.96px
  }

  .fruit__type {
    font-size: 14px;
    color: var(--lightColor);
  }

  .fruit__text {
    text-align: left;
    color: var(--lightColor);
    font-size: 14px;
    font-weight: 400;
    line-height: 128%;
    letter-spacing: -0.28px
  }

  .fruit__img {
    display: block;
    margin: 0 auto;
    width: 100%;
    max-width: 295px;
    max-height: 251px;
  }

  .fruit__price {
    display: inline-block;
    font-size: 14px;
    font-weight: 500;
    color: var(--baseColor);
    padding: 12px 24px;
    border-radius: 200px;
    background: var(--lightColor);
  }

  @media (max-width: 848px) {
    .fruit {
      max-width: 344px;
    }
  }

  @media (min-width: 600px) {
    .fruit__name {
      font-size: 32px;
    }
    .fruit__type {
      font-size: 18px;
    }
    .fruit__price {
      font-size: 18px;
    }
  }
</style>
