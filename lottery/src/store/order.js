
export default {
  state: {
    selectshop: 0,
    zhu: 0,
    jin: 0,
    json: {},
    bigarr: []
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
    },
    setJson (state, value) {
      state.json = value
    },
    setBigarr (state, value) {
      state.bigarr.push(value)
    }
  }
}
