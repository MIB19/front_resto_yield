<template>
  <div class="flex w-full flex-row justify-between items-center p-3 border rounded-lg gap-3 cursor-pointer" @click.stop="toDetail">
    <section class="flex flex-col items-start justify-start">
      <span class=" font-medium">{{ business.name }}</span>
      <div class="w-full flex flex-row items-center gap-1.5">
        <span class="text-sm mt-1">{{ rating }}</span>
        <StarRating v-model="rating" :show-rating="false" :star-size="13" />
        <span class="mt-1 text-sm">({{ business.review_count }}) - {{ business.price }}</span>
      </div>
      <span class="text-sm text-gray-400 mt-0.5"><label class="capitalize" :class="business.is_closed ? 'text-red-500' : 'text-green-500'">{{ business.is_closed ? 'close' : 'open' }}</label> - {{ business.categories[0].title }}</span>
      <span class="text-sm text-gray-500 mt-0.5">{{ business.location.display_address[0] }} - {{ business.location.city }}</span>
      <span class="text-sm text-gray-400 mt-1.5 gap-1">{{ transactions }}</span>
    </section>
    <img :src="business.image_url" class="w-24 h-24 object-cover rounded-md" />
  </div>
</template>
<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'CardList',
  components: {
    StarRating
  },
  props: {
    business: {
      type: [Array, Object],
      required: true
    }
  },
  computed: {
    rating() {
      return this.business.rating
    },
    transactions() {
      if (this.business.transactions.length === 3) {
        return this.business.transactions[0] + ', ' + this.business.transactions[1] + ' and ' + this.business.transactions[2]
      } else if (this.business.transactions.length === 2) {
        return this.business.transactions[0] + ' and ' + this.business.transactions[1]
      } else if (this.business.transactions.length === 1) {
        return this.business.transactions[0]
      }
      return ''
    }
  },
  methods: {
    toDetail() {
      this.$router.push('/detail/' + this.business.id)
    }
  }
}
</script>
