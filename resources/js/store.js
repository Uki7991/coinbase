import { createStore } from "vuex";
import userState from "./states/states/userState";
import userMutations from "./states/mutations/userMutations";
import userActions from "./states/actions/userActions";

export default createStore({
    state() {
        return {
            ...userState,
        }
    },
    getters: {
        currentUser: (state) => {
            console.log(state)
            return state.currentUser
        }
    },
    mutations: {
        ...userMutations
    },
    actions: {
        ...userActions
    }
})
