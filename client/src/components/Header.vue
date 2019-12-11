<template>
  <v-content >
  <v-toolbar fixed dark class="light-blue accent-4">
    <v-toolbar-title class="mr-4">
      <router-link 
        class="home"
        tag="span"
        :to="{
          name: 'root'
        }">
        TabTracker
      </router-link>
    </v-toolbar-title>
    <!-- <v-toolbar-items>
      <v-btn flat dark depressed class="light-blue accent-4">Browse</v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" dark depressed class="light-blue accent-4" :to="{name: 'login'}"> Log in </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" dark depressed class="light-blue accent-4" :to="{name: 'register'}"> Sign up </v-btn> 
    </v-toolbar-items>
  </v-toolbar>

  </v-content>

</template>


<script>
export default {};
</script>


<style scoped>
.home{
   cursor: pointer;
}

</style>