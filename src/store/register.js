import axios from 'axios'

const state = {}
const getters = {   }
const mutations = {  }
const actions = {

    async distributors_registration({commit},value){

            try {
                var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/section/distributors_registration",value
                );
               
                return await response;
            }catch(error){
                return await error.response;
            } 
      
    },





}

export default {
    state,
    getters,
    mutations,
    actions,
}






