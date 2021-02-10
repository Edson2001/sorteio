<template>
  <div id="app">

    <div class="top">

    </div>
    <swiper
    :slides-per-view="3"
    :space-between="50"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  />
    <swiper-slide>Slide 1p+erlo+ptrtr+ptrktgpokt0'ythoptoptporepoeppeopopo0oeopoppe</swiper-slide>
    <swiper-slide>Slideeewpçlrrkrororoor0rorororgr0r0'r0'rrrr0'or0'0r'0'rro'rore 2</swiper-slide>
    <swiper-slide>Slide rergrrrrrrrrrrrrrrrrrrrrrrrrrrrrrt3</swiper-slide>

    <div v-for="(itens, index) in dados" :key="index">
   
      
      <img  alt="Vue logo" :src="'https://image.tmdb.org/t/p/w500'+itens.poster_path">

    </div>
    
    
  </div>
</template>

<script>
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper-bundle.min.css';

export default {
  name: 'App',
  data(){
    return{
      url: "https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222",
      dados: ''
    }
  },

  components: {
    Swiper,
    SwiperSlide,
  },

  created(){
    
    axios.get(this.url).then(response=>{
      this.dados = response.data.results
     
    })
  },
  
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
#app {
  background: #222;
  padding: 0;
  margin: 0;
}
.top{
  width: 100%;
  box-shadow: 0 6px 6px rgba(0,0,0,.4);
  height: 500px;
  background: url('https://i1.wp.com/thefutureoftheforce.com/wp-content/uploads/2020/08/Zack-Snyders-Justice-League.jpg?fit=3200%2C1800&ssl=1');
  background-size: cover;
 
}
</style>
