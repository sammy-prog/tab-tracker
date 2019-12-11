<template>
  <v-app>
    <br><br>
    <v-layout>
      <v-flex xs6 offset-sm3>
        <Panel title="Login">
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
        </Panel>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import Panel from '@/components/Panel'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'login',
  components: {
    Panel
  },
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
