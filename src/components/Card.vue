<template>
  <div class="card">
    <div class="img-container">
      <img
        :src="poster"
        :alt="title"
      />
    </div>
    <div class="title">{{ title }} {{ getDate }}</div>
    <div class="meta">{{ getGenres }}</div>
  </div>
</template>

<script>
export default {
  name: 'CardDisplay',
  props: {
    title: {
      type: String,
      default: 'No name'
    },
    poster: {
      type: String,
      default: 'https://via.placeholder.com/510x775'
    },
    year: {
      type: [String, Number],
      default: 'No year'
    },
    genre: {
      type: Array,
      default: () => []
    },
    type: {
      type: String,
      default: '',
    }
  },
  computed: {
    getDate() {
      return this.year ? `(${this.year})` : ''
    },
    getGenres() {
      return this.genre && this.genre.length ? `Genre: ${this.genre.join(', ')}` : ''
    }
  }
}
</script>

<style lang="styl">
.card
  flex: 0 0 33.3%
  padding: 10px

  img
    width: 100%
  .title
    font-size: 20px
  .meta
    font-size: 14px
    text-transform: capitalize
</style>