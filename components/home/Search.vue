<template>
  <div class="w-full flex flex-row flex items-center">
    <div class="w-full flex flex-row items-center">
      <div class="flex border rounded-l-md p-2 px-3 gap-2 border-r-0 flex-row items-center">
        <FontAwesomeIcon :icon="searchIc" />
        <t-input
          v-model="inputSearch"
          class="border-0 border-b-0 min-w-40"
          placeholder="search bussiness"
          @keyup="changValue"
        />
      </div>
      <t-dropdown :text="'Sort: ' + sort">
        <div slot-scope="{ hide, blurHandler }" class="py-1 rounded-md shadow-xs" @blur="blurHandler">
          <button
            class="block px-4 py-2 w-full text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
            @click="select(hide, 'best_match')"
          >
            Best Match
          </button>
          <button
            class="block px-4 py-2 w-full text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
            @click="select(hide, 'rating')"
          >
            Rating
          </button>
          <button
            class="block px-4 py-2 w-full text-sm leading-5 capitalize text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            role="menuitem"
            @click="select(hide, 'review_count')"
          >
            Review count
          </button>
        </div>
      </t-dropdown>
    </div>
  </div>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'Search',
  components: {
    FontAwesomeIcon
  },
  props: {
    value: {
      type: String,
      required: true
    },
    selected: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      sort: 'Best Match',
      inputSearch: '',
      searchIc: faSearch
    }
  },
  created() {
    this.inputSearch = this.value
    this.sort = this.selected
  },
  methods: {
    changValue() {
      // emit event
      this.$emit('change', this.inputSearch)
    },
    select(callback, value) {
      if (value === 'best_match') {
        this.sort = 'Best Match'
      } else if (value === 'rating') {
        this.sort = 'Rating'
      } else if (value === 'review_count') {
        this.sort = 'Review count'
      }
      this.$emit('select', value)
      callback()
    }
  }
}
</script>
