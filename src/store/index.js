import { createStore } from 'vuex'

const store = createStore({
    state :{
    isActive:true,
},  
mutations:{
    setData(state){
        state.isActive = !state.isActive;
    },
},
getters : {
    getData(state){
        return state.isActive;
    },

}

})
export default store;