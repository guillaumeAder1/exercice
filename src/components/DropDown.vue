<template>
  <div>
    <div class="dropdown-label" @click="toggle">
      {{ name }}
    </div>
    <ul v-if="display">
      <li v-for="(option, index) in options" :key="index">
        <input
          type="checkbox"
          :value="option"
          v-model="checked"
        />
        <label :for="option">{{ option }}</label>
      </li> 
    </ul>
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
    }
  },
  watch: {
    checked(values) {
      this.$emit('on-select', values)
    }
  }
}
</script>

<style lang="styl" scoped>
.dropdown-label
  background: red

ul
  position: absolute
  background: var(--grey-light)
  list-style: none
  margin: 0
  padding: 0

  li
    padding 3px 10px
      

</style>