// initial state
const state = {
  gameNumber: 0,
  rounds: 0,
  roundDuration: 0,
  players: []
}

// getters
const getters = {}

// actions
const actions = {}

// mutations
const mutations = {
  setGameNumber (state, { gameNumber }) {
    state.gameNumber = gameNumber
  },
  setGameSettings (state, { rounds, roundDuration }) {
    state.rounds = rounds
    state.roundDuration = roundDuration
  },
  setPlayers (state, { players }) {
    state.players = players
  },
  reset (state) {
    state.gameNumber = 0
    state.rounds = 0
    state.roundDuration = 0
    state.players = 0
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
