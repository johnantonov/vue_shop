<template>
  <div class="success">
    <img class="success__img" src="../../assets/order/success.png" alt="">
    <h2 class="success__title">THANK YOU</h2>
    <p class="success__text">Thank you for your order! Our team is preparing your box with fresh, delicious fruits and vegetables, and we'll deliver it straight to your doorstep. We appreciate your business and look forward to providing you with the best possible experience!</p>
  </div>
</template>

<script>
export default {};
</script>

<style>

.success {
  padding: 40px 10px;
  border-radius: 20px;
  background: #E03F5E;
}
.success::after {
  content: '';
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  cursor: pointer;
}

.success__img {
  width: 40%;
  margin-bottom: 28px;
}

.success__title {
  margin-bottom: 14px;
  color: var(--lightColor);
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-size: 40px;
  font-weight: 500;
  line-height: 110%;
  letter-spacing: -1.6px;
  text-transform: uppercase;
}

.success__text {
  width: 60%;
  min-width: 200px;
  margin: 0 auto;
  color: var(--lightColor);
  text-align: center;
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: -0.56px;
}

@media (min-width: 500px) {
  .success {
    padding: 60px 10px;
  }
}
</style>
