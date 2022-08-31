<template>
  <div class="content">
    <!-- filter 1 -->
    <filter-container>
      <template #left>
        <div class="dropdown">Genre</div>
        <div class="dropdown">Year</div>
      </template>
      <template #right>
        <div class="searchbox">
          <input type="text" />
        </div>
      </template>
    </filter-container>
    <!-- filter 2 -->
    <filter-container>
      <template #left>
        <div>
          <input type="radio" id="type-movie" name="type" value="movie" v-model="mediaType" />
          <label for="type-movie">Movie</label>
          <input type="radio" id="type-book" name="type" value="book" v-model="mediaType" />
          <label for="type-book">Books</label>
        </div>
      </template>
      <template #right>
        <button @click="mediaType = null">clear filter</button>
      </template>
    </filter-container>
  
    <!-- grid items -->
    <div class="grid-container">
      <card-display
        v-for="(item, index) in filteredData"
        :key="index"
        v-bind="item"
      />
    </div>
  </div>
</template>

<script>
import FilterContainer from './FilterContainer.vue'
import CardDisplay from './Card.vue'
import { fetchData } from './api'

export default {
  name: 'ExerciseTwo',
  components: {
    CardDisplay,
    FilterContainer
  },
  data: () => ({
    allData: [],
    mediaType: null,
  }),
  mounted() {
    this.fetch()
  },
  computed: {
    filteredData() {
      if (this.mediaType) {
        return this.allData.filter(({type}) => type === this.mediaType)
      }
      return this.allData
    }
  },
  methods: {
    async fetch() {
      const data = await fetchData();
      if (!data) {
        console.warn('Oops, something went wrong when fetching the data');
        return
      }
      this.allData = data.sort((a, b) => a.title.localeCompare(b.title));
    }
  }
};
</script>

<style>
</style>