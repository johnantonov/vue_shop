<template>
<li :style="'background: ' + color" class="orderFruit">
  <div class="orderFruit__info">
    <h4 class="orderFruit__title"> {{ name }} Basket </h4>
    <p class="orderFruit__type"> {{ type }} </p>
  </div>
  <img class="orderFruit__img" :src="path" alt="">
  <div class="fruit__checkbox orderFruit__checkbox">
    <div class="fruit__checked">
      <button @click="checkedFruit()">
        <div v-if="checked"> </div>
      </button>
    </div>
  </div>
</li>
</template>

<script>
import { defineComponent } from 'vue';
import { mapMutations } from 'vuex';

export default defineComponent({
  props: ['name', 'type', 'price', 'color', 'id', 'path'],
  data() {
    return {
      checked: true,
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
      putToOrder: 'addFruitsToOrder',
      deleteFromOrder: 'deleteFruitFromOrder',
    }),
    checkedFruit() {
      this.checked = !this.checked;
      if (this.checked === true) {
        this.putToOrder(this.fruit);
      } else if (this.checked === false) {
        this.deleteFromOrder(this.id);
      }
    },
  },
});
</script>

<style>
.orderFruit {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 20px;
}

.orderFruit__info {
  margin-right: auto;
}

.orderFruit__title {
  text-align: left;
  color: var(--lightColor);
  font-size: 18px;
  font-weight: 700;
  line-height: 133.333%;
  letter-spacing: -0.72px;
}

.orderFruit__type {
  text-align: left;
  color: var(--lightColor);
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: -0.28px;
}

.orderFruit__img {
  width: 88px;
}

.orderFruit__checkbox > div > button {
  width: 40px;
  height: 15px;
}

.fruit__checked > button > div {
  width: 10px;
  height: 12px;
  border-bottom: 2px solid var(--lightColor);
  border-left: 2px solid var(--lightColor);
  transform: rotate(-45deg);
}

@media (min-width: 500px) {
  .orderFruit {
    width: 200px;
    flex-direction: column;
    align-items: center;
  }
  .orderFruit__img {
    width: 133px;
  }
  .orderFruit__checkbox {
    transform: translate(13px, -160px);
  }
}

@media (min-width: 920px) {
  .orderFruit {
    width: 257px;
  }
}
</style>
