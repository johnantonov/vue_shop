<template>
  <div class="step">
    <div class="step__leftside">
      <span class="step__number" :style="'background: ' + color">
        {{ number }} Step
      </span>
    </div>
    <div class="step__rightside">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: ['number', 'text', 'color'],
};
</script>

<style>
.step {
  max-width: 385px;
  height: 112px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: var(--lightColor);
}

.step__number {
  display: block;
  margin-right: 14px;
  padding: 15px 0;
  width: 136px;
  border-radius: 200px;
  color: var(--lightColor);
  font-size: 18px;
  font-weight: 400;
  line-height: 133.333%;
  letter-spacing: -0.72px;
}

.step__rightside p {
  max-width: 145px;
  color: var(--usualText);
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: -0.56px;
}

@media (max-width: 360px) {
  .step {
    height: 140px;
    padding: 20px 10px;
  }
  .step__number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 80px;
  }
  .step__rightside p {
    line-height: 0.9;
  }
}

@media (min-width: 400px) {
  .step {
    width: 389px;
    height: 128px;
  }
}
</style>
