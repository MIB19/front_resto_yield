<template>
  <div v-if="isLoading" class="w-full min-h-screen flex justify-center items-center">
    <FontAwesomeIcon :icon="spinIc" spin />
  </div>
  <figure v-else class="w-full flex pt-28 px-4 sm:px-8 md:px-12 lg:px-20 flex-col gap-4 pb-10">
    <h1 class="text-black font-semibold text-2xl">
      List of Bussiness In USA
    </h1>
    <HomeSearch v-model="search" :selected="select" @change="changeSearch" @select="changeSelect" />
    <span
      v-if="business.businesses.length !== 0"
      class="text-base -mb-2 text-gray-400 mt-3"
    >Showing {{ minLength }} - {{ maxLength }} from {{ business.total }} business</span>
    <div v-if="!loadBusiness && business.businesses.length !== 0" class="grid grid-cols-1 md:grid-cols-2 items-center w-full gap-3">
      <HomeCardList v-for="(busines, i) in business.businesses" :key="i" :business="busines" />
    </div>
    <div v-else-if="loadBusiness" class="w-full h-96 flex items-center justify-center">
      <FontAwesomeIcon :icon="spinIc" spin />
    </div>
    <div v-else class="w-full flex flex-col min-h-1/3 justify-center items-center">
      <FontAwesomeIcon :icon="cryIc" size="6x" />
      <span class="mt-4 ">No Bussiness was found</span>
    </div>
    <t-pagination
      v-if="business.total >= 1"
      v-model="page"
      :total-items="business.total"
      :per-page="20"
      :limit="5"
      class="mt-4"
      @change="changePage"
    />
  </figure>
</template>
<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSadCry, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      search: '',
      cryIc: faSadCry,
      page: 1,
      business: [],
      isLoading: true,
      loadBusiness: false,
      spinIc: faSpinner,
      select: 'best_match'
    }
  },
  computed: {
    ...mapGetters('bussiness', ['getList']),
    minLength() {
      return this.page * 20 - 19
    },
    maxLength() {
      return this.page * 20
    }
  },
  async created() {
    await this.setData()
    this.isLoading = false
  },
  methods: {
    ...mapActions('bussiness', ['loadList']),
    async setData() {
      this.loadBusiness = true
      await this.loadList({ search: this.search, limit: 20, offset: this.createOffset(this.page), sort: this.select })
      this.business = this.getList
      this.loadBusiness = false
    },
    async changeSearch(val) {
      this.search = val
      await this.setData()
    },
    async changeSelect(val) {
      this.select = val
      await this.setData()
    },
    createOffset(val) {
      return val * 20 - 20
    },
    async changePage(val) {
      this.page = val
      await this.setData()
    }
  }
}
</script>
