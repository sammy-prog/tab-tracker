<template>
<v-app>
    <br><br>
    <v-container>
    <v-layout> 
    <v-flex xs4>
      <Panel title="Song Metadata" class="ml-10">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="YouTube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </Panel>
      
    </v-flex>

    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
          label="Tab"
          multi-line
          required
          :rules="[required]"
          v-model="song.tab"
        ></v-text-field>

        <v-text-field
          label="Lyrics"
          multi-line
          required
          :rules="[required]"
          v-model="song.lyrics"
        ></v-text-field>
      </panel>
        <div class="danger-alert" v-if="error">
        {{error}}
      </div>
        <v-card-actions class="justify-center" @click="create">
            <v-btn dark class="light-blue accent-4"> Create Song </v-btn>
        </v-card-actions>
      
    </v-flex>
  </v-layout>
    </v-container>
</v-app>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongServices'

export default {
    components: {
        Panel
    },
    data(){
        return{
            song: {
                    title: null,
                    artist: null,
                    genre: null,
                    album: null,
                    albumImageUrl: null,
                    youtubeId: null,
                    lyrics: null,
                    tab: null
            },
            error: null,
            required: (value) => !!value || 'Required.'
        }
    },
    methods: {
        async create () {
            this.error = null
            const areAllFieldsFilledIn = Object
                .keys(this.song)
                .every(key => !!this.song[key])
            if (!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields.'
                return
                }
            try {
                await SongsService.post(this.song)
                this.$router.push({
                name: 'songs'
                })
            } catch (err) {
                console.log(err)
            }
        }
  }

}
</script>

<style scoped>
    .danger-alert{
        color: red;
        margin-left: 10px;
        margin-top: 5px;
        text-align: center;
    }
</style>
