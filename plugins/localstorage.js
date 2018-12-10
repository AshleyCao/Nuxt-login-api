import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'vuex',
        paths: [],
        storage: 
            window.sessionStorage
    })(store)
}