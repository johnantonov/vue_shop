import { createStore } from 'vuex';

interface Fruit {
  name: string;
  type: string;
  path: string;
  price: number;
  color: string;
  id: number;
}
interface Order {
  fruits: Fruit[];
}

interface RootState {
  fruits: Fruit[];
  order: Order;
}

export default createStore<RootState>({
  state: {
    fruits: [],
    order: {
      fruits: [],
    },
  },
  getters: {
    returnCart: (state: RootState) => state.fruits.map((fruit: Fruit) => fruit),
    returnOrder: (state: RootState) => state.order,
  },
  mutations: {
    addFruitToCart(state, newFruits) {
      state.fruits.push(newFruits);
    },
    deleteFruitFromCart(state, productId) {
      state.fruits = state.fruits.filter((el) => el.id !== productId);
    },
    addFruitsToOrder(state, newFruits) {
      state.order.fruits.push(newFruits);
    },
    cleanOrder(state) {
      state.order.fruits = [];
    },
    deleteFruitFromOrder(state, productId) {
      state.order.fruits = state.order.fruits.filter((el) => el.id !== productId);
    },
  },
  actions: {
  },
  modules: {
  },
});
