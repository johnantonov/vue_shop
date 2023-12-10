<template>
<form @submit.prevent="submitForm" action="" class="formOrder">
  <label for="name">
    <input v-model="formData.name" type="text" required name="name" placeholder="Enter full name...">
  </label>
  <label for="email">
    <input v-model="formData.email" type="email" required name="email" placeholder="Enter email...">
  </label>
  <label for="card">
    <input v-model="formData.card" type="number" required name="card" placeholder="Enter card..." class="formOrder__card">
  </label>
  <label for="comm">
    <textarea v-model="formData.comment" name="comm" placeholder="Enter comments..." class="formOrder__textarea" />
  </label>
  <label for="submit">
    <input type="submit" name="submit" value="submit" class="formOrder__submit">
  </label>
</form>
</template>
<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        card: '',
        comment: '',
      },
    };
  },
  methods: {
    submitForm() {
      const orderData = this.$store.state.order;
      const allDataToSend = {
        ...this.formData,
        orderData,
      };
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(allDataToSend),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      this.$emit('openSuccessPopUp');
    },
  },
};
</script>

<style>
.formOrder {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.formOrder input:not([type="submit"]), .formOrder textarea {
  display: block;
  width: 100%;
  max-width: 360px;
  padding: 15px 24px;
  border-radius: 20px;
  border: 1px solid #000;
  opacity: 0.3;
}
.formOrder input:not([type="submit"])::placeholder, .formOrder textarea::placeholder {
  color: #000;
  font-size: 14px;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: -0.56px;
}

.formOrder textarea {
  height: 132px;
}

.formOrder__card {
  margin-bottom: 8px;
}

.formOrder__submit {
  display: block;
  padding: 12px 24px;
  border: none;
  border-radius: 100px;
  background: var(--btnHover);

  cursor: pointer;
  color: var(--lightColor);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: -0.56px;
  text-transform: capitalize;
}
</style>
