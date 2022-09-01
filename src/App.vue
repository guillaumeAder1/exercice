<template>
  <div id="app">
    <div class="exercise-header">
      <h2>Exercise 1 - Testimonial Block</h2>
    </div>

    <div>
      <div>
        <div>
          <p>
            Gingerbread tart cupcake cake muffin cookie liquorice tiramisu.
            Toffee cupcake cake cake croissant icing carrot cake cookie. Dessert
            chocolate bar apple pie sesame snaps liquorice carrot cake cookie
            danish.
          </p>
          <span>Indiana Jones, Archaeologist</span>
        </div>
        <a>Tell Me More</a>
      </div>
    </div>

    <div class="exercise-header">
      <h2>Exercise 2 - Filterable Content</h2>
    </div>

    <div id="exercise2">
      <exercise-two />
    </div>
  </div>
</template>

<script>
import ExerciseTwo from "@/components/ExerciseTwo";
export default {
  name: "App",
  components: {
    ExerciseTwo,
  },
};
</script>

<style lang="styl">
@import "./styles/index.css";
@import "./styles/normalize.css";
/* exercise 1 CSS */
#app > div:nth-child(2)
  background #FBF8F7
  display flex
  align-items center
  justify-content center
  padding 40px
  color #71656E
 
  > div
    width 60vw
    display flex
    align-items center
    border-left 2px solid #FF6C03

    > div
      padding 20px

      p
        font-family Montserrat

      span
        font-size 12px
        font-weight 700

    a
      background-color #00A4E2
      color white
      width 300px
      text-transform uppercase
      padding 20px 40px
      font-size 13px
      text-align center

</style>
