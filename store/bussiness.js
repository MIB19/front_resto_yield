const createParams = (s, l, o, lat, lng, sort) => {
  const params = {
    location: 'us',
    term: s,
    limit: l,
    offset: o,
    sort_by: sort || 'best_match'
  }
  if (lat && lng) {
    params.latitude = lat
    params.longitude = lng
  }
  return params
}

export const state = () => ({
  list: null
})

export const getters = {
  getList(state) {
    return state.list
  }
}

export const actions = {
  async loadList({ commit }, { search = 'us', limit = 20, offset = 0, lat, lng, sort }) {
    try {
      const response = await this.$api.$get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search', {
        params: createParams(search, limit, offset, lat, lng, sort)
      })
      commit('set_list', response)
    } catch (e) {
      console.error(e)
    }
  },
  async loadDetailBusiness({ commit }, id) {
    try {
      const response = await this.$api.$get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/' + id)
      return response
    } catch (e) {
      console.error(e)
    }
  },
  async loadReview({ commit }, id) {
    try {
      const response = await this.$api.$get('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/' + id + '/reviews')
      return response
    } catch (e) {
      console.error(e)
    }
  }
}

export const mutations = {
  set_list(state, data) {
    state.list = data
  }
}
