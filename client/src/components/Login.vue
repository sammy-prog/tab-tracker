<template>
  <v-app>
    <br><br>
    <v-layout>
      <v-flex xs6 offset-sm3>
        <div class="white elevation-1">
          <v-toolbar  dense class="light-blue accent-4" dark>
            <v-toolbar-title> Login </v-toolbar-title>
          </v-toolbar>
          <div class="pl-4 pr-5 pt-2 pb-2">
            
             <v-text-field
                label="email"
                name="email"
                type="text"
                v-model="email"
              />
              <v-text-field
                label="Password"
                name="password"
                type="password"
                v-model="password"
              />
              <div class="error" v-html="error" />
              <br>
              <v-card-actions class="justify-center">
                <v-btn class="light-blue accent-4 white--text" @click="login"> login </v-btn>
              </v-card-actions>
            
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async login(){
      try{
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        }catch (error) {
          this.error = error.response.data.error
        }
    }
  }

  

}
</script> 

<style scoped>
.error{
  color: white;
  padding-left: 6px;
  border-radius: 15px;
}

</style>
