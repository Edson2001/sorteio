<template>
    <div>

        <menu-vue></menu-vue>

        <div class="top" >
           

            <div class="options">
                <form action="" class="search" >
                    <div class="top-search">
                        <input v-model="query" type="text" placeholder="Encontre filmes e séries">
                        <button type="submit" @click.prevent="get_data()">
                            <i class="icofont-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            

        </div>

        <div class="container">
             <div class="result">
                <h5>Resultado para: {{query}}</h5>
                
            </div>
           
        </div>

        <div class="continer">

           

            <div class="data">
                <div v-for="(item, index) in result" :key="index" class="item">
                
                    <div class="item-poster">
                        <img :src="'http://image.tmdb.org/t/p/w185/'+item.poster_path" alt="">
                    </div>            
                
                </div>
                
            </div>

        </div>

    </div>
</template>


<script>
import menuVue from '../components/menu.vue'
import '../assets/css/query.css'
import axios from 'axios'
export default {
    name: 'Query',
    components: {menuVue},

    data(){
        return{
            query: '',
            result: '',
            number_result: 0,
            //link para trailer https://www.themoviedb.org/video/play?key=Xq3fTk_9xfc
        }
    },

    methods:{
        get_data(){
            console.log(this.query)
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=5a1939e7ee4fd5d2be953c58f1787222&language=en-US&query='+this.query+'&page=1&include_adult=false&include_video=true')
            .then(response=>{
               this.result =  response.data.results
               console.log(response.data.results)
               
            })
        }
    }
}
</script>
<style >

</style>
