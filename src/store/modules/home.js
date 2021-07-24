//导入 api
import { getHome } from '@/api/home'
export default{
     namespaced:true,
    state:{
        data:[],
        bool:true
    },
    mutations:{
       setSateData(state,res){
            return  state.data=res
        },
        getdata(state) {
            return state.data
          }, 
          setpath(state,res){
              return  state.bool = res
          },

    },
    actions: {
        async gethomeData ({ commit } ){
             let res = await getHome();
            commit('setSateData',res.data);
        },
        
    }
}