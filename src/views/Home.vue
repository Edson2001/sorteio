<template>
  <div id="app" >

    <menu-vue></menu-vue>

    <div class="top">

    </div>

    <div class="container">
      
      <carousel :typeDocument="1"  :url='"https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'DC FILMES'"></carousel>
      <carousel :typeDocument="2"  :url='"https://api.themoviedb.org/4/list/1?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'Marvel FILMES'"></carousel>
      

      <div class="other">
        <div class="main">
          <carousel :typeDocument="3"  :url='"https://api.themoviedb.org/3/trending/all/week?api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'Em alta'"></carousel>
          <carousel :typeDocument="4"  :url='"https://api.themoviedb.org/4/list/4?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'Outros'"></carousel>
          <h5 class="trailer">Vejá o trailer de: Zack Snyder's Justice League | Official Trailer | HBO Max</h5>
          <iframe width="705" height="315" src="https://www.youtube.com/embed/vM-Bja2Gy04" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>

        <div class="sidebar">
          <div class="title">
            <span>
              #Recomendados para você
            </span>
          </div>

          <div class="recomendados">
            <div v-for="(item, index) in movie" :key="index" class="item-re ">
              <img :src="'http://image.tmdb.org/t/p/w185//'+item.poster_path" alt="" class="item-poster">
              <div class="info">
                <h6>{{item.title}}</h6>
                <div>
                  <span>{{item.vote_average}}</span>
                </div>
              </div>
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


import menuVue from '../components/menu.vue'
import carousel from '../components/carousel.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {menuVue, carousel},
  data(){
    return{
      recommendations: '',
      movie: [],
    }
  },

  mounted(){
    this.getrecommendations()
  },

  methods:{
    getrecommendations(){
      axios.get('https://api.themoviedb.org/4/list/8?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222')
      .then(response=>{
        this.recommendations = response.data.results
        
        this.movie.push(this.recommendations[0]) 
        this.movie.push(this.recommendations[1]) 
        this.movie.push(this.recommendations[2]) 
        this.movie.push(this.recommendations[3]) 
        this.movie.push(this.recommendations[4]) 
        console.log(this.movie)
        
      })
    }
  }
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}


body {
 
  background-color: #262626;
  font-family: 'Roboto';

}

.container{
  margin: 0 auto;
  width: 1250px;
}

.top{
    max-width: 100%;
    box-shadow: 0 6px 6px rgba(0,0,0,.4);
    height: 500px;
    background: url('https://i1.wp.com/thefutureoftheforce.com/wp-content/uploads/2020/08/Zack-Snyders-Justice-League.jpg?fit=3200%2C1800&ssl=1');
    background-size: cover;
   
  }

  .other{
    display: flex;
    justify-content: space-between;
    width: 1215px;
    flex-wrap: wrap;
    margin-top: 22px;
    margin-bottom: 22px;
  }

  .main{
    width: 60%;
 
  }
  .sidebar{
    width: 30%;

  }

  .item-re{
    display: flex;
    color: #fff;
    align-items: center;
    margin-bottom: 12px;
    flex-wrap: wrap;
  }
  .item-re img{
    height: 140px;
    margin-right: 12px;
  }
  .sidebar .title{
    margin-bottom: 20px;
  }
  h5.trailer{
    color: #fff;
    font-size: 20px;
    margin-top: 30px;
    margin-bottom: 12px;
  }
  footer{
    color:#fff;
    text-align: center;
    padding: 20px;
    border-top: 2px solid #333130;
    box-shadow: 0 2px 2px 0 #333130;
  }

</style>
