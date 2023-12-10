<template>
  <MainVue />
  <StepsVue />
  <FruitsVue />
  <CredoVue />
</template>

<script lang="ts">
import MainVue from '@/components/MainVue.vue';
import StepsVue from '@/components/steps/StepsVue.vue';
import FruitsVue from '@/components/fruits/FruitsVue.vue';
import CredoVue from '@/components/Credo/CredoVue.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
  components: {
    MainVue,
    StepsVue,
    FruitsVue,
    CredoVue,
  },
})
export default class HomeView extends Vue {
}
</script>
