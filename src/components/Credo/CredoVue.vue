<template>
  <section class="credo__section container">
    <h2 class="credo__title section__title">Fresh Harvest Box has got you covered</h2>
    <div class="credo__imgs">
      <img src="../../assets/credo/1.png" alt="" class="credo__img">
      <img src="../../assets/credo/1max.png" alt="" class="credo__img credo__img_1250">
      <img src="../../assets/credo/2.png" alt="" class="credo__img_2">
    </div>
    <p class="credo__subtitle subtitle">Our boxes are packed with delicious, nutritious fruits and vegetables, perfect for anyone looking to eat healthier or support local farmers. Order your box today and start enjoying the best that nature has to offer!</p>
    <form action="" class="email-form">
      <label for="input-email">
        <input type="email" name="email" id="input-email" placeholder="Enter email...">
        <input type="submit" value="Send" class="email-form__submit">
      </label>
    </form>
  </section>
</template>

<script lang="ts">
export default {};
</script>

<style>

  .credo__section {
    position: relative;
    margin-bottom: 80px;
  }

  .credo__title {
    position: absolute;
    inset: 0;
    top: -40 px;
    margin: auto;
  }
  .credo__imgs {
    display: flex;
    justify-content: center;
    margin-bottom: 80px;
    gap: 16px;
  }

  .credo__img {
    width: 100%;
    max-width: 344px;
  }

  .credo__img_1250 {
    display: none;
  }

  .credo__img_2 {
    display: none;
    max-width: 344px;
  }

  .credo__subtitle {
    display: none;
  }

  .email-form {
    position: relative;
    display: none;
    margin: 0 auto;
    width: 292px;
  }
  #input-email {
    padding: 15px 24px;
    opacity: 0.3;
    color: #ffffff;
    border: 1px solid #FFF;
    border-radius: 100px;
    background: inherit;
  }
  .email-form__submit {
    cursor: pointer;
    position: absolute;
    right: 0;
    padding: 16px 35px;
    border-radius: 100px;
    background: #9DC162;
    border: none;
  }
  #input-email::placeholder {
    color: #FFF;
  }

  @media (min-width: 600px) {
    .credo__img {
      width: 50%;
      max-width: 400px;
    }
    .credo__img_2 {
      display: block;
      width: 50%;
      max-width: 400px;
    }
    .credo__subtitle {
      display: block;
      margin-bottom: 80px;
    }
    .email-form {
      display: block;
    }
  }

  @media (min-width: 1250px) {
    .credo__imgs {
      gap: 24px;
    }
    .credo__img {
      display: none;
      width: 70%;
      max-width: 792px;
    }

    .credo__img_1250 {
      display: block;
    }

    .credo__img_2 {
      display: block;
      width: 30%;
      max-width: 400px;
    }
  }
</style>
