import api from "../plugins/axios"

const api_key = process.env.VUE_APP_API_KEY
export default {
    async list(){
       try{
        const response = await api.get('/4/list/8?page=1&api_key='+api_key)
        return response.data
       }catch(e){
        console.log(e)
        return []
       }
    },

    async query(query){
        try{
            const response = await api.get('/3/search/movie?api_key='+api_key+'&language=en-US&query='+query+'&page=1&include_adult=false&include_video=true')
            return response.data
        }catch(e){
            console.log(e)
            return []
        }
    }
}