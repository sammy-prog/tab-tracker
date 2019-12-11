<template>
  <div id="app">
    <v-app>
      <PageHeader />
      <router-view />
    </v-app>
  </div>
</template>

<script>
import PageHeader from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    PageHeader
  }
};
</script>

<style>
/* .v-toolbar__title{
  color: white;
}
.v-btn__content {
  color: white;
} */

</style>
