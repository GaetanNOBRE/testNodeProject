const io = require('socket.io-client')

// initial state
const state = {
  sessionId: null,
  username: null,
  gameSocket: null
}

// Game socket
let gameSocket = null

// getters
const getters = {
  isLoggedIn (state) {
    return !!state.sessionId
  },
  gameSocket () {
    return gameSocket
  }
}

// actions
const actions = {}

// mutations
const mutations = {
  login (state, { sessionId, username }) {
    state.sessionId = sessionId
    state.username = username

    // Connect socket
    const socketAddress = 'http://localhost:8080'
    gameSocket = io(socketAddress, { query: { sessionId: sessionId } })
  },
  logout (state) {
    state.sessionId = null
    state.username = null
    gameSocket = null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
  gameSocket
}
