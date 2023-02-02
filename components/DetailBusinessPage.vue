<template>
  <div v-if="isLoading" class="w-full min-h-screen flex justify-center items-center">
    <FontAwesomeIcon :icon="spinIc" spin size="lg" />
  </div>
  <div v-else class="w-full flex flex-col min-h-screen pt-20">aaa</div>
</template>
<script>
import { mapActions } from 'vuex'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
export default {
  name: 'DetailBusinessPage',
  components: {
    FontAwesomeIcon
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      isLoading: true,
      business: null,
      review: null,
      spinIc: faSpinner
    }
  },
  async created() {
    this.business = await this.loadDetailBusiness(this.id)
    this.review = await this.loadReview(this.id)
    console.log(this.business)
    console.log(this.review)
    this.isLoading = false
  },
  methods: {
    ...mapActions('bussiness', ['loadDetailBusiness', 'loadReview'])
  }
}
</script>
