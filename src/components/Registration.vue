<template>
    <form class="form py-2">
      <div class="row w-100 m-0">
      <div class="col-12">
      <input class = "field col-12 mb-2" id = "login" type = "text" name = "login" placeholder = "Введите логин" required>
      </div>
      <div class="col-12">
      <input class = "field col-12 mb-2" id = "pass" type = "password" name = "pass" placeholder = "Введите пароль" required>
      </div>
      <div class="col-12">
      <input class = "field col-12 mb-3" id = "pass2" type = "password" name = "pass2" placeholder = "Повторите пароль" required>
      </div>
      <div class="col-12 col-lg-8 mb-2 mb-lg-0">
        <input class = "registr w-100" type = "submit" name = "registr" value = "Зарегистрироваться">
      </div>
      <div class="col-12 col-lg-4">
        <input class = "enter w-100" type = "button" name = "enter" value = "Войти">
      </div>
      </div>
    </form>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
  },
})
export default class Registration extends Vue {
  msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

 /* input.field{
  background: #e5e5e5;
  border: solid 1px #333333;
  border-radius: 4px;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
}  */
/* input .enter{
  background: #d0d0d0;
  border: solid 1px #333333;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
} */
/* input .registr{
  background: #d0d0d0;
  border: solid 1px #333333;
  border-radius: 4px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25)
} */
</style>
