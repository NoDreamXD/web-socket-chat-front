<template>
<!-- @TODO: тоже самое -->
  <div class="home">
    <AuthorizationForm />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import AuthorizationForm from "@/components/AuthorizationForm.vue"; // @ is an alias to /src

@Options({
  components: {
    AuthorizationForm,
  },
})
export default class Authorization extends Vue {}
</script>