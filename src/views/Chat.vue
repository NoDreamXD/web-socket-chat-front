<template>
<!-- @TODO: тоже самое -->
  <div class="home">
    <MessagePage />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MessagePage from "@/components/MessagePage.vue"; // @ is an alias to /src

@Options({
  components: {
    MessagePage,
  },
})
export default class Chat extends Vue {}
</script>