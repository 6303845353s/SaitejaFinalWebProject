<template>
  <div class="songs_web">
    <div v-for="songs of muiscHitsDetails" :key="songs.song_id">
      <MusicHits :songs="songs" />
    </div>
  </div>
</template>

<script>
import MusicHits from './MusicHits.vue';

export default {
  name: 'MusicHitsList',
  components: { MusicHits },
  props: {
    muiscHitsDetails: Array
  }
};
</script>

<style scoped>
.songs_web {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1em;
  padding: 1em;
}
</style>
