<template>
    <div>
        
            <div class="title">
                <span>
                    #{{description}}
                </span>
            </div>

            <div :class="'carouselbox c'+ this.typeDocument"  >
              <div @click="view_movie(item.id)" class="" v-for="(item, index) in info" :key="index">
                <img :class="'img-'+index +' '+ 'slider-img'" :src="'http://image.tmdb.org/t/p/w185/'+item.poster_path" />
              </div>
              
            </div>
           
        </div>
    </div>  
</template>
<script>

import axios from 'axios'
import '../assets/scss/carousel.scss'


export default {
    name: 'Carousel',
    props: ['url', 'typeDocument', 'description'],
    data(){
    return{
      sliders : '',
      scrollPerClick: 0,
      ImagePadding: 20,
      scrollAmount: 0,
      title: '',
      info: ''
    }
  },

  

  mounted(){
   // this.getMovies()
  },
  methods:{

    view_movie(id){
      //this.$router.push({name: 'find.id', params: { id: id }})
    },
    
    async getMovies(){
      await axios.get(this.url).then(response=>{
        this.info = response.data.results
        console.log(this.info)
      })
      this.scrollPerClick = document.querySelector(".img-1").clientWidth + 20;
    }
  }
}
</script>