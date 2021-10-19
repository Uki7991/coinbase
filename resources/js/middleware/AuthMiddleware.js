import store from "../store";

export default function (from, to, next) {
    if (!store.state.currentUser) {
        next({name: 'home'})
    } else {
        next()
    }
}
