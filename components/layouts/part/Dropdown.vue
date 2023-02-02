<template>
  <t-dropdown>
    <div
      slot="trigger"
      slot-scope="{
        mousedownHandler,
        focusHandler,
        blurHandler,
        keydownHandler,
        isShown
      }"
    >
      <button
        id="user-menu"
        class="flex px-4 items-center text-sm py-1 text-white transition duration-150 ease-in-out border-2 border-gray-200 rounded-full focus:outline-none focus:shadow-solid"
        :class="{ 'border-gray-300 bg-gray-500 text-white ': isShown }"
        aria-label="User menu"
        aria-haspopup="true"
        @mousedown="mousedownHandler"
        @focus="focusHandler"
        @blur="blurHandler"
        @keydown="keydownHandler"
      >
        {{ selected === 'id' ? 'Indonesia' : 'English' }}
        <FontAwesomeIcon :icon="downIc" class="ml-2" />
      </button>
    </div>
    <div slot-scope="{ hide, blurHandler }">
      <button
        class="block w-full py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        role="menuitem"
        @click="selectItem(hide, 'id')"
        @blur="blurHandler"
      >
        Indonesia
      </button>
      <button
        class="block w-full py-2 text-sm leading-5 text-gray-700 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
        role="menuitem"
        @click="selectItem(hide, 'en')"
        @blur="blurHandler"
      >
        English
      </button>
    </div>
  </t-dropdown>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Dropdown',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      downIc: faAngleDown
    }
  },
  computed: {
    ...mapGetters('language', ['getActiveLang']),
    selected() {
      return this.getActiveLang
    }
  },
  methods: {
    ...mapActions('language', ['changeLang']),
    selectItem(callback, value) {
      this.changeLang(value)
      callback()
    }
  }
}
</script>
