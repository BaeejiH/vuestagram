import { createStore } from "vuex";

const store = createStore({
    state() {
        return{
            name : 'kim' // state 보관하고 싶으면 여기에
        }
    },
})
export default store;