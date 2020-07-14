import axios from 'axios'

const state = {}
const getters = {   }
const mutations = {  }
const actions = {

    async distributors_registration({commit},value){
        console.log(value);

            try {
                var response = await axios
                .post(
                    "https://www.agropark.com.ng/api/v1/section/distributors_registration",value, { headers: { 'Content-Type': 'multipart/form-data' } }
                );
               console.log(response)
                return await response;
            }catch(error){
                console.log(error.response)
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






