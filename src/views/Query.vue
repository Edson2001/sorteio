<template>
    <div>
        <div class="top" >
            <div class="options">
                <form action="" class="search" >
                    <div class="top-search">
                        <input v-model="query" type="text" placeholder="Encontre filmes e séries">
                        <button type="submit" @click.prevent="getMovies">
                            <i class="icofont-search"></i>
                        </button>
                    </div>
                </form>
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

import '../assets/scss/query.scss'

import movie from "../services/movie"

export default {
    name: 'Query',
    data(){
        return{
            query: '',
            result: '',
            number_result: 0,
        }
    },

    methods:{
        async getMovies(){
            const response = await movie.query(this.query)
            this.result = response.results
            console.log(this.result)
        }
    },
}
</script>
<style >

</style>
