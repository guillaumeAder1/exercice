<template>
  <div class="dropdown-container">
    <div class="dropdown-label" @click="toggle">
      {{ name }}
    </div>
    <ul v-if="display">
      <li v-for="(option, index) in options" :key="index">
        <input
          type="checkbox"
          :value="option"
          :id="option"
          v-model="checked"
        />
        <label :for="option">{{ option }}</label>
      </li> 
    </ul>
    <div v-if="display" @click="display = false" class="overlay"></div>
  </div>
</template>

<script>

export default {
  name: 'DropDown',
  props: {
    name: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    display: false,
    checked: []
  }),
  methods: {
    toggle() {
      this.display = !this.display
    },
  },
  watch: {
    checked(values) {
      this.$emit('on-select', values)
    }
  }
}
</script>

<style lang="styl" scoped>

.overlay
  position absolute
  top 0
  left 0
  width 100%
  height 100%
  z-index 1

.dropdown-container
  font-weight: 700
  text-transform: uppercase
  

  .dropdown-label
    background: var(--grey-button-bg)
    padding: 7px 10px
    border-bottom: 2px solid var(--grey-light)
    color: var(--grey-font)

  ul
    position: absolute
    border: 1px solid var(--grey-light)
    margin: 10px 0
    padding: 0
    list-style: none
    background-color: white
    z-index: 2

    li
      padding 10px 15px
      color: var(--grey-font)

      label
        margin-left: 10px
      

</style>