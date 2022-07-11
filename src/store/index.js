import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import app from './modules/app.js'
// import bluetooth from './modules/bluetooth.js'

const store = new Vuex.Store({
	modules: {
		app,
		// bluetooth
	}
})

export default store
