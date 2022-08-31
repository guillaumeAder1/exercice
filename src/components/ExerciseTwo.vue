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
      <div class="card">
        <div class="img-container">
          <img
            src="https://ia.media-imdb.com/images/M/MV5BMTc0NDQzNTA2Ml5BMl5BanBnXkFtZTcwNzI2OTQzMw@@._V1_.jpg"
            alt="..."
          />
        </div>
        <div class="title">perdator</div>
        <div class="meta">2012 comedie</div>
      </div>
      <div class="card">
        <div class="img-container">
          <img
            src="https://ia.media-imdb.com/images/M/MV5BMTc0NDQzNTA2Ml5BMl5BanBnXkFtZTcwNzI2OTQzMw@@._V1_.jpg"
            alt="..."
          />
        </div>
        <div class="title">perdator</div>
        <div class="meta">
          2012 comedie Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Accusamus necessitatibus harum omnis ea quis, asperiores eos provident
          blanditiis est nam quas neque! Nisi nihil vero totam, ipsum provident
          enim temporibus.
        </div>
      </div>
      <div class="card">
        <div class="img-container">
          <img
            src="https://ia.media-imdb.com/images/M/MV5BMTc0NDQzNTA2Ml5BMl5BanBnXkFtZTcwNzI2OTQzMw@@._V1_.jpg"
            alt="..."
          />
        </div>
        <div class="title">perdator</div>
        <div class="meta">2012 comedie</div>
      </div>
      <div class="card">
        <div class="img-container">
          <img
            src="https://ia.media-imdb.com/images/M/MV5BMTc0NDQzNTA2Ml5BMl5BanBnXkFtZTcwNzI2OTQzMw@@._V1_.jpg"
            alt="..."
          />
        </div>
        <div class="title">perdator</div>
        <div class="meta">2012 comedie</div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterContainer from './FilterContainer.vue'
export default {
  name: 'ExerciseTwo',
  components: {
    FilterContainer
  }
};
</script>

<style>
</style>