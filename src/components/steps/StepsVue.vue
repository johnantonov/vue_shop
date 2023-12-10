<template>
  <section class="steps__section container">
    <h2 class="steps__title section__title">To order your fruit basket, simply follow these easy steps</h2>
    <p class="steps__subtitle subtitle">Our baskets are assembled with care and delivered straight to your doorstep, so you can enjoy the taste of fresh fruit without ever leaving your home. Whether you're looking for a healthy snack or a thoughtful gift, our fruit baskets are the perfect choice.</p>
    <div class="steps">
      <StepVue :color="'#AE1332'" :number="'First'" :text="'Just choose the fruit you want to order by clicking on the checkboxes next to it.'" />
      <StepVue :color="'#A1C864'" :number="'Second'" :text="'Click on the basket and fill out the form.'" />
      <StepVue :color="'#F5CE13'" :number="'Third'" :text="'Sit back and relax! Your fresh fruit basket will be delivered.'" />
    </div>
    <div class="steps__imgWrapper">
      <img class="steps__img" src="../../assets/berries/berries.gif" alt="">
    </div>
  </section>
</template>

<script lang="ts">
import StepVue from './StepVue.vue';

export default {
  components: { StepVue },
};
</script>

<style>
.steps__section {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.steps__subtitle {
  margin-bottom: 44px;
}
.steps {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 44px;
}
.steps__imgWrapper {
  height: 476px;
  max-width: 806px;
}
.steps__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

@media (min-width: 600px) {
  .steps__section {
    margin-bottom: 80px;
  }
  .steps {
    flex-flow: row wrap;
    justify-content: center;
  }
}

@media (min-width: 1000px) {
  .steps__section {
    margin-bottom: 120px;
  }
}
</style>
