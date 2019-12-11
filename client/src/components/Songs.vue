<template>
  <v-app>
    <br><br>
    <v-layout>
      <v-flex xs6 offset-sm3>
        <Panel title="Songs">
            <v-btn slot="action" light medium absolute right middle fab class="light-blue accent-1" :to="{name: 'songs-create'}">
                 <v-icon>+</v-icon>
            </v-btn>
          <div v-for="song in songs" :key="song.id">
            <v-layout>
              <v-flex xs6>
                <div class="song-title">
                  {{song.title}}
                </div>
                 <div class="song-artist">
                  {{song.artist}}
                </div>
                 <div class="song-genre">
                  {{song.genre}}
                </div>
                <v-card-actions class="justify-center">
                <v-btn dark class="cyan" :to="{
                  name: 'song',
                  params: {songId: song.id}
                }">View</v-btn>
                </v-card-actions>
              </v-flex>
              <v-flex xs6>
                <img class="album-image" :src="song.albumImageUrl" />
              </v-flex>
            </v-layout>
            <br><br>
          </div>
        </Panel>
        
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
import SongService from '@/services/SongServices'
import Panel from '@/components/Panel'
export default {
  name: 'songs',
  components: {
    Panel
  },
  data() {
    return {
      songs: null
    }
  },
  async mounted () {
    //do a request to get songs
    this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped>
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}

.song-title {
  font-size: 30px;
  text-align: center;
}

.song-artist {
  font-size: 24px;
  text-align: center;
}

.song-genre {
  font-size: 18px;
  text-align: center;
}

.album-image {
  width: 70%;
  margin: 0 auto;
}
</style>
