<template>
  <div class="content">
    <!-- filter 1 -->
    <filter-container>
      <template #left>
        <drop-down name="Genre" :options="genreOptions" @on-select="val => addFilter('genre', val)"/>
        <drop-down name="Year" :options="yearOptions"  @on-select="val => addFilter('year', val)"/>
      </template>
      <template #right>
        <div class="searchbox">
          <input type="text" v-model="searchByTitle" />
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
        <button @click="clearFilters">clear filter</button>
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
import DropDown from './DropDown.vue'
import CardDisplay from './Card.vue'
import { fetchData } from './api'

export default {
  name: 'ExerciseTwo',
  components: {
    CardDisplay,
    DropDown,
    FilterContainer
  },
  data: () => ({
    allData: [],
    mediaType: null,
    filters: {
      genre: [],
      year: []
    },
    searchByTitle: ''
  }),
  mounted() {
    this.fetch()
  },
  computed: {
    filteredData() {
      let filtered;
      if (this.mediaType) {
        filtered = this.allData.filter(({type}) => type === this.mediaType)
      }
      if (this.filters.genre.length) {
        const currentSet = filtered?.length ? filtered : this.allData
        filtered = currentSet
          .filter(({ genre }) => genre
            .some(currentGenre => this.filters.genre.includes(currentGenre)))
      }
      if (this.filters.year.length) {
        const currentSet = filtered?.length ? filtered : this.allData
        filtered = currentSet.filter(({ year }) => this.filters.year.includes(year))
      }
      if (this.searchByTitle) {
        const currentSet = filtered?.length ? filtered : this.allData
        filtered = currentSet.filter(({ title }) => title.toLowerCase().includes(this.searchByTitle.toLowerCase()))
      }

      return filtered?.length ? filtered : this.allData
    },
    genreOptions() {
      const uniqueGenres = this.allData.reduce((acc, { genre }) => {
        genre.forEach(g => acc.add(g))
        return acc;
      }, new Set())
      return [...uniqueGenres]
    },
    yearOptions() {
      const uniqueYears= this.allData.reduce((acc, { year }) => {
        acc.add(year)
        return acc;
      }, new Set())
      return [...uniqueYears]
    },
  },
  methods: {
    async fetch() {
      const data = await fetchData();
      if (!data) {
        console.warn('Oops, something went wrong when fetching the data');
        return
      }
      this.allData = data.sort((a, b) => a.title.localeCompare(b.title));
    },
    addFilter(type, values) {
      this.filters[type] = values
    },
    clearFilters() {
      this.mediaType = null
      this.filters = {
        year: [],
        genre: []
      }
    }
  }
};
</script>

<style>
</style>