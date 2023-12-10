<template>
  <header>
    <NavVue />
  </header>
  <main>
    <router-view/>
  </main>
  <footer>
    <FooterVue />
  </footer>
</template>

<style>
:root {
  --baseColor: #AE1332;
  --lightColor: #fff;
  --btnHover: #A4CB66;
  --usualText: black
}
#app {
  font-family: DM Sans, Helvetica, Arial, sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--lightColor);
}
* {
  box-sizing: border-box;
}
p, ul, h1, h2, h3, h4, h5, h6 {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1, h2 {
  color: var(--lightColor);
  text-align: center;
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-family: DM Sans;
  font-size: clamp(28px, 5vw, 64px);
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -1.12px;
  text-transform: uppercase;
}
a {
  text-decoration: none;
}
body {
  background: var(--baseColor);
}
footer {
  background: var(--lightColor);
}
header {
  margin-bottom: 56px;
}
.container {
  margin: 0 auto;
  padding: 0 20px;
}
button {
  cursor: pointer;
  border: none;
  background: inherit;
  transition: transform 0.3s linear;
}
.section__title {
  max-width: 624px;
  margin: 0 auto;
  margin-bottom: 14px;
  font-size: clamp(28px, 5vw, 40px);
}
.subtitle {
  max-width: 509px;
  margin: 0 auto;
  color: var(--lightColor);
  text-align: center;
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-family: DM Sans;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: -0.56px;
}
.btn {
  transform: rotate(-25deg);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  transition: color 0.3s linear, background 0.3s linear;
  text-transform: uppercase;
  color: var(--baseColor);
  background-color: var(--lightColor);
  text-shadow: 0px 4px 70px rgba(0, 0, 0, 0.10);
  font-size: 20px;
  line-height: 100%;
  letter-spacing: -0.8px;
}
.btn svg path{
  transition: fill 0.3s linear;
}
.btn:hover, .btn:hover svg path {
  color: var(--btnHover);
  fill: var(--btnHover);
}

@media (min-width: 500px) {
  .btn {
    font-size: 28px;
    width: 114px;
    height: 114px;
  }
}
@media (min-width: 700px) {
  header {
    margin-bottom: 64px;
  }
}

</style>

<script lang="ts">
import NavVue from './components/Nav/NavVue.vue';
import FooterVue from './components/Footer/FooterVue.vue';

export default {
  components: { NavVue, FooterVue },
};

</script>
