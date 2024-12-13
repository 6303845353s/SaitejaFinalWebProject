<template>
  <div class="container">
    <MusicHitsHeader />
    <MusicHitsList :muiscHitsDetails="muiscHitsDetails" />
  </div>
</template>

<script>
import MusicHitsHeader from './components/MusicHitsHeader.vue';
import MusicHitsList from './components/MusicHitsList.vue';

export default {
  name: 'App',
  components: { MusicHitsHeader, MusicHitsList },
  data() {
    return {
      muiscHitsDetails: []
    };
  },
  methods: {
    async fetchMusicHits() {
      const res = await fetch('https://tejaweb-node.onrender.com/api');
      const data = await res.json();
      return data[0].musicHits;
    }
  },
  async created() {
    this.muiscHitsDetails = await this.fetchMusicHits();
  }
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 1.5em;
  margin: 0 auto;
  padding: 1em;
  max-width: 1200px;
}
</style>
