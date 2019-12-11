<template>
  <v-content>
    <v-toolbar fixed dark class="light-blue accent-4">
      <v-toolbar-title class="mr-4">
        <router-link class="home" tag="span" :to="{
          name: 'root'
        }">TabTracker</router-link>
      </v-toolbar-title>

      <v-toolbar-items>
        <v-btn dark depressed  class="light-blue accent-4" :to="{
           name: 'songs'
        }">Browse</v-btn>
      </v-toolbar-items>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          dark
          depressed
          class="light-blue accent-4"
          :to="{name: 'login'}"
        >Log in</v-btn>
        <v-btn
          v-if="!$store.state.isUserLoggedIn"
          dark
          depressed
          class="light-blue accent-4"
          :to="{name: 'register'}"
        >Sign up</v-btn>
        <v-btn
          v-if="$store.state.isUserLoggedIn"
          dark
          depressed
          class="light-blue accent-4"
          @click="logout"
        >Log out</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-content>
</template>


<script>
export default {
  methods: {
    logout() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({
        name: "root"
      });
    }
  }
};
</script>


<style scoped>
.home {
  cursor: pointer;
}
</style>