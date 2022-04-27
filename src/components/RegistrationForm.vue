<template>
  <form class="form py-2">
    <div class="row w-100 m-0">
      <div class="col-12">
        <input
          class="field col-12 mb-2"
          type="text"
          name="login"
          placeholder="Введите логин"
          required
        />
      </div>
      <div class="col-12">
        <input
          class="field col-12 mb-2"
          type="password"
          name="pass"
          placeholder="Введите пароль"
          required
        />
      </div>
      <div class="col-12">
        <input
          class="field col-12 mb-3"
          type="password"
          name="pass2"
          placeholder="Повторите пароль"
          required
        />
      </div>
      <div class="col-12 col-lg-8 mb-2 mb-lg-0">
        <input
          class="registr w-100"
          type="submit"
          name="registr"
          value="Зарегистрироваться"
        />
      </div>
      <div class="col-12 col-lg-4">
        <router-link to="/authorization"
          ><input class="enter w-100" type="button" name="enter" value="Авторизоваться"
        /></router-link>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
  },
})
export default class Registration extends Vue {
}
</script>

<style scoped>
.form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 500px;
  border: solid 1px #333333;
}

@media (max-width: 992px) {
  .form {
    width: 300px;
  }
}

</style>
