<template>
  <!-- @TODO: сделать home обёрткой для формы а в компоненте хранить лишь фрому и переименовать home ;) -->
  <!-- @TODO:   побробовать использовать один и тот де компонент в авторизации и регистрации -->
  <div class="home">
    <RegistrationForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RegistrationForm from "@/components/RegistrationForm.vue"; // @ is an alias to /src

@Options({
  components: {
    RegistrationForm,
  },
})
export default class Registration extends Vue {}
</script>

