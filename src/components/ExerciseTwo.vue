<template>
  <div class="content">
    <!-- filter 1 -->
    <filter-container>
      <template #left>
        <drop-down ref="genre-dd" name="Genre" :options="genreOptions" @on-select="val => addFilter('genre', val)"/>
        <drop-down ref="year-dd" name="Year" :options="yearOptions"  @on-select="val => addFilter('year', val)"/>
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
        </div>
        <div>
          <input type="radio" id="type-book" name="type" value="book" v-model="mediaType" />
          <label for="type-book">Books</label>
        </div>
      </template>
      <template #right>
        <button @click="clearFilters" class="btn-link">clear filter</button>
      </template>
    </filter-container>
  
    <!-- grid items -->
    <div class="grid-container">
      <template v-if="filteredData.length">
        <card-display
          v-for="(item, index) in filteredData"
          :key="index"
          v-bind="item"
        />
      </template>
      <div v-else>
        <p>
          Sorry, no item found
        </p>
      </div>
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
        filtered = this.allData.filter(({ type }) => type === this.mediaType)
      }
      if (this.filters.genre.length) {
        const currentSet = this.hasResults(filtered)
        filtered = currentSet
          .filter(({ genre }) => genre
            .some(currentGenre => this.filters.genre.includes(currentGenre)))
      }
      if (this.filters.year.length) {
        const currentSet = this.hasResults(filtered)
        filtered = currentSet.filter(({ year }) => this.filters.year.includes(year))
      }
      if (this.searchByTitle) {
        const currentSet = this.hasResults(filtered)
        filtered = currentSet.filter(({ title }) => title.toLowerCase().includes(this.searchByTitle.toLowerCase()))
      }
      return this.hasFilterSelected ? filtered : this.allData
    },
    hasFilterSelected() {
      return this.mediaType || this.filters.genre.length || this.filters.year.length || this.searchByTitle
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
      return [...uniqueYears].sort()
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
    hasResults(filteredData) {
      return filteredData?.length ? filteredData : this.allData;
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
      this.$refs['genre-dd'].clear()
      this.$refs['year-dd'].clear()
    }
  }
};
</script>

<style lang="styl">
#exercise2

  width: 100vw
  display: flex

  .content
    border: 1px solid var(--grey-light)
    width: 75%
    margin: auto

    .filters
      display: flex
      justify-content: space-between

      > div
        display: flex

      .left-container

        .dropdown
          border: 1px solid var(--grey-light)

    .grid-container
      display: flex
      flex-wrap: wrap
      border-top: 1px solid var(--grey-light)

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

label
  margin-left: 10px
  font-weight: 700

.padded
  padding: 15px

.gap
  gap: 10px

.btn-link
  color: var(--blue-link)
  text-transform: uppercase
  text-decoration: underline
  background: none
  border: none
  font-weight: 700
  cursor: pointer
  

</style>