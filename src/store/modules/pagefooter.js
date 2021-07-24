export default {
    namespaced:true,
    state:{
        playData:[]
    },
    mutations:{
        setData(state,res){
            state.playData = res
        },
        getData(state){
            return state.playData
        }
    },//mutations
   
}