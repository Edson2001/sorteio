<template>
  <div id="app" >

    <div class="top">

    </div>

    <div class="container">
      
      <carousel :typeDocument="1"  :url='url_carousel(3)' :description="'DC FILMES'"></carousel>
      <carousel :typeDocument="2"  :url='url_carousel(1)' :description="'Marvel FILMES'"></carousel>
      

      <div class="other">
        <div class="main main-home">
          <carousel :typeDocument="3"  :url='"https://api.themoviedb.org/3/trending/all/week?api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'Em alta'"></carousel>
          <carousel :typeDocument="4"  :url='"https://api.themoviedb.org/4/list/4?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'Outros'"></carousel>
          <h5 class="trailer">Vejá o trailer de: Zack Snyder's Justice League | Official Trailer | HBO Max</h5>
          <iframe width="705" height="315" src="https://www.youtube.com/embed/vM-Bja2Gy04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="sidebar sidebar-home">
          <div class="title">
            <span>
              #Recomendados para você
            </span>
          </div>

          <div class="recomendados">
            

            <div v-for="(item, index) in movie" :key="index" class="item-re ">
              <router-link :to="'/find?id='+item.id">
                <img :src="'http://image.tmdb.org/t/p/w185//'+item.poster_path" alt="" class="item-poster">
                <div class="info">
                  <h6>{{item.title}}</h6>
                  <div>
                    <span>{{item.vote_average}}</span>
                  </div>
                </div>
              </router-link>
            </div>    

            
             
          </div>

        </div>
      </div>

      

    </div>

    <footer>
      <b> <a href="https://github.com/Edson2001/collflix">CollFlix</a> - 2021 | DADOS DE FILMES:  <a href="https://www.themoviedb.org/">TMDB</a> </b>
      <p>Criado por <a href="https://github.com/Edson2001">Edson Dos Santos Bandola</a> </p>

    </footer>
    
  </div>
</template>

<script>
import '../assets/css/home.css'
import carousel from '../components/carousel.vue'
import movie from '../services/movie'

export default {
  name: 'Home',
  components: { carousel},
  data(){
    return{
      recommendations: '',
      movie: [],
    }
  },
  methods:{
    url_carousel(position){
      return  'https://api.themoviedb.org/'+position+'/list/3?page=1&api_key='+import.meta.env.VITE_API_KEY
    }
  },
  async mounted(){
    const response = await movie.list()
    this.recommendations = response.results
    for(let i = 0; i < 5; i++){
      if(this.recommendations[i]){
        this.movie.push(this.recommendations[i]) 
      }
    }
  },
}
</script>

