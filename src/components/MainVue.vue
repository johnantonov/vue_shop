<template>
  <section class="main container">
    <h1>
      fresh harvest box<br>
      is your one-stop place for a delicious fruit basket
    </h1>
    <div class="main_1">
      <img class="main__img" src="../assets/main/mainImg.jpg" alt="">
      <a href="/" class="main__btn btn">shop now</a>
    </div>
    <div class="main__down">
      <div class="main_2 main__wrapper">
        <p class="main__text_2">
          Our expertly curated fruit baskets are made with the freshest, highest quality fruits available. Whether you are looking for a healthy snack or a gift for a loved one, Fresh Harvest Box has got you covered.
        </p>
        <div class="main__oval_2 oval_2">
          <p class="main__text_fruit">Fruit</p>
          <img class="oval__img" src="../assets/main/wmelon.png" alt="watermelon">
          <p class="oval__text">Refreshing and juicy, watermelon is the perfect summer treat and a great source of hydration</p>
        </div>
      </div>
      <div class="main_3 main__wrapper">
        <div class="main_3__btnsWrapper">
          <button>#organic</button>
          <button>#products</button>
          <button>#basket</button>
          <button>#fruits</button>
        </div>
        <div class="main__oval_3 oval_3">
          <p class="main__text_fruit">Fruit</p>
          <img class="oval__img" src="../assets/main/strawberries.png" alt="strawberry">
          <p class="oval__text oval__text_3">Sweet and juicy, strawberries are packed with vitamin C and antioxidants, making them a delicious and healthy snack</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
});
</script>

<style>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 44px;
  margin-bottom: 80px;
}

.main h1 {
  position: absolute;
  text-align: center;
  z-index: 4;
  max-width: 335px;
}

.main_1 {
  position: relative;
  padding: 50px 25px 25px;
  max-width: 486px;
  background: url('../assets/main/wrapper.svg') no-repeat;
  background-size: contain;
  background-position: center;
}

.main__wrapper {
  max-width: 249px;
}

.main__img {
  width: 100%;
  border-radius: 500em 500em 500em 500em;
}

.main__btn {
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translate(-50%) rotate(-25deg);
}

.main::after {
  position: absolute;
  content: '';
  top: 0;
  right: 0;
  width: 56px;
  height: 56px;
  background-image: url('../assets/main/straw.png');
  background-size: contain;
  background-repeat: no-repeat;
}
.main::before {
  position: absolute;
  content: '';
  top: 50px;
  left: 0;
  width: 66px;
  height: 44px;
  background-image: url('../assets/main/banana.png');
  background-size: contain;
  background-repeat: no-repeat;
}

.main__text_2 {
  margin-bottom: 44px;
  color: var(--lightColor);
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 128%;
  letter-spacing: -0.56px;
}

.main__oval_2 {
  margin-bottom: 48px;
  width: 100%;
  padding: 28px 25px 40px;
  border-radius: 500em 500em 500em 500em;
  background: #A4CB66;
}

.oval_2 .main__text_fruit {
  margin-bottom: 61px;
}

.oval__img {
  width: 90%;
}

.oval__text {
  display: block;
  margin: 0 auto;
  width: 62%;

  color: var(--lightColor);
  text-align: center;
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-family: DM Sans;
  font-size: 12px;
  line-height: 116%;
  letter-spacing: -0.48px;
  text-transform: uppercase;
}

.main_3 {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main_3__btnsWrapper {
  margin-bottom: 44px;
  width: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.main_3__btnsWrapper button {
  width: 132px;
  height: 38px;
  border-radius: 1000px;
  border: 1px solid var(--lightColor);
  color: var(--lightColor);
  text-transform: uppercase;
  transition: background 0.3s linear;
}

.main_3__btnsWrapper button:hover {
  background: rgba(19, 5, 7, 0.1) ;
}

.main__oval_3 {
  width: 100%;
  padding: 28px 25px 40px;
  border-radius: 500em 500em 500em 500em;
  background: #F5CE13;
}

.oval__text_3 {
  width: 73%;
}

@media (max-width: 340px) {
  .main_3__btnsWrapper {
    max-width: 250px;
  }

  .main_3__btnsWrapper button {
    max-width: 100px;
  }
  .main_1 {
    padding-top: 25px;
  }
  .main h1 {
    font-size: 16px;
  }
  .oval_2 .main__text_fruit {
    margin-bottom: 31px;
  }
  .oval_2__text {
    width: 90%;
  }
}

@media (min-width: 500px) {
  .main {
    margin-bottom: 137px;
  }
  .main h1 {
    max-width: 900px;
  }
  .main__btn {
    font-size: 28px;
    width: 114px;
    height: 114px;
  }
  .main::after {
    top: -4%;
    right: 10%;
    width: 120px;
    height: 120px;
  }
  .main::before {
    top: 5%;
    width: 183px;
    height: 124px;
  }
}

@media (min-width: 600px) {
  .main__down {
    display: flex;
    justify-content: space-around;
    align-self: normal;
    gap: 40px;
  }
  .main_3__btnsWrapper {
    margin-top: 44px;
    order: 2;
  }
  .oval_2 {
    margin-left: 25px;
  }
  .main__text_2 {
    text-align: left;
  }
  .main_3__btnsWrapper {
    justify-content: end;
  }
  .main_3__btnsWrapper button:nth-child(3n), .main_3__btnsWrapper button:nth-child(4n) {
    width: 115px;
  }
}

@media (min-width: 1280px) {
  .main {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 150px;
  }
  .main h1 {
    top: 0px;
  }
  .main__down {
    position: absolute;
    width: 90%;
    justify-content: space-between;
    bottom: 0;
  }
  .main::after {
    top: -4%;
    right: 20%;
  }
  .main::before {
    top: 5%;
    left: 20%;
  }
}
</style>
