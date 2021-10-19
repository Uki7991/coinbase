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
    mutations: {
        ...userMutations
    },
    actions: {
        ...userActions
    }
})
