
export default {
  state: {
    selectshop: 0,
    zhu: 0,
    jin: 0
  },
  mutations: {
    setselectshop (state, value) {
      state.selectshop = value
    },
    setZhu (state, value) {
      state.zhu = value
    },
    setJin (state, value) {
      state.jin = value
    }
  }
}
