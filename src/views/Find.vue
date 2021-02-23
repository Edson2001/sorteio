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
            <div class="other">
                <div class="main">
                    
                    <div class="img-poster">
                        <img :src="'http://image.tmdb.org/t/p/w185/'+movie.poster_path" alt="">
                    </div>
                    <div>
                        <button class="btn"><i class="icofont-play-alt-1"></i> Assitir</button>
                    </div>

                </div>
                <div class="sidebar">
                    <h3>{{movie.title}}</h3>
                   
                    <div class="classf">
                        <b>IMDB: {{movie.vote_average}}</b>
                    </div>
                    <p class="sinopse">
                        Sinopse: {{movie.overview}}
                    </p>

                    <p class="sinopse">
                        Gênero:
                    </p>
                    
                    <div class="generos">
                        <div v-for="(genero, index) in movie.genres" :key="index" class="item-genero">
                            <a  href="" class="genero">
                                {{genero.name}}
                            </a>
                        </div>
                    </div>

                    
                    <div>
                        <h4>Elenco</h4>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="container">
            <carousel :typeDocument="1"   :url='"https://api.themoviedb.org/3/movie/122/recommendations?api_key=5a1939e7ee4fd5d2be953c58f1787222&language=pt-BR&page=1"' :description="'Filmes recomendados'"></carousel>
        </div>

        <footer>
            <b> <a href="https://github.com/Edson2001/collflix">CollFlix</a> - 2021 | DADOS DE FILMES:  <a href="https://www.themoviedb.org/">TMDB</a> </b>
            <p>Criado por <a href="https://github.com/Edson2001">Edson Dos Santos Bandola</a> </p>

        </footer>

       

    </div>
</template>


<script>
import menuVue from '../components/menu.vue'
import carousel from '../components/carousel.vue'
import '../../src/assets/css/find.css'
import '../assets/css/query.css'
import axios from 'axios'
export default {
    name: 'find',
    components: {menuVue, carousel},

    data(){
        return{

            movie: '',
        }
    },

    created(){
        this.find_movie(122)
  
    },

    methods: {

        find_movie(id){

            axios.get('https://api.themoviedb.org/3/movie/'+id+'?api_key=5a1939e7ee4fd5d2be953c58f1787222&language=pt-BR')
            .then(response=>{
                console.log(response.data)
                this.movie = response.data
            })

        },

    }
}
</script>
