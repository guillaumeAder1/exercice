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
          <input type="radio" id="type-movie" name="type" value="movie" />
          <label for="type-movie">Movie</label>
          <input type="radio" id="type-book" name="type" value="book" />
          <label for="type-book">Books</label>
        </div>
      </template>
      <template #right>
        <button>clear filter</button>
      </template>
    </filter-container>
  
    <!-- grid items -->
    <div class="grid-container">
      <card-display
        v-for="(item, index) in allData"
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
  }),
  mounted() {
    this.fetch()
  },
  methods: {
    async fetch() {
      const data = await fetchData();
      if (!data) return
      this.allData = data;
    }
  }
};
</script>

<style>
</style>