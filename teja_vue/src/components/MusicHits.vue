<template>
  <div class="container">
    <div class="series-details">
      <img :src="songs.image_url" alt="Song Image" class="song-image" />
      <p>Trending: {{ songs.song_name }}</p>
      <p>Genre: {{ songs.singer }}</p>
      <p>Duration: {{ songs.Duration }}</p>
      <p>Likes: {{ songs.likes }}</p>
      <button class="listen-button">Listen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MusicHits',
  props: {
    songs: Object
  }
};
</script>

<style scoped>
.container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1em;
  text-align: center;
}
.series-details p {
  margin: 0.5em 0;
  font-size: 1rem;
  color: #333;
}
.listen-button {
  padding: 0.5em 1em;
  border: none;
  background: #6b9080;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}
.listen-button:hover {
  background: #577566;
}
.song-image {
  width: 70%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 1em;
}
</style>
