<template>
    <div>
        <div class="carousel " >

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
            <a class="switchLeft sliderButton" @click="sliderScrollLeft()"><i class="icofont-rounded-left"></i></a>
            <a class="switchRight sliderButton" @click="sliderScrollRight()"><i class="icofont-rounded-right"></i></a>
        </div>
    </div>  
</template>
<script>
import axios from 'axios'
import '../assets/css/carousel.css'


export default {
    name: 'Carousel',
 
    props: ['url', 'typeDocument', 'description'],
    data(){
    return{
      dados: '',
        sliders : '',
       scrollPerClick: 0,
       ImagePadding: 20,
       scrollAmount: 0,
       title: '',
       info: ''
    }
  },

  
  created(){
    let dd;
    this.scrollPerClick = dd
    axios.get(this.url).then(response=>{
      this.dados = response.data.results
     
    })

    this.sliders = document.querySelector(".c"+this.typeDocument)
    
    this.get_movies();
  },

  methods:{

    view_movie(id){
      this.$router.push({name: 'find.id', params: { id: id }})
    },
    
    sliderScrollLeft() {
      
      document.querySelector(".c"+this.typeDocument).scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });

      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },

    

  sliderScrollRight() {
 
    if (this.scrollAmount <= document.querySelector(".c"+this.typeDocument).scrollWidth - document.querySelector(".carouselbox").clientWidth) {
      document.querySelector(".c"+this.typeDocument).scrollTo({
        top: 0,
        left: (this.scrollAmount += this.scrollPerClick),
        behavior: "smooth",
      });
    }


   
  },


  async get_movies(){

    await axios.get(this.url).then(response=>{
      this.info = response.data.results
    })

    this.scrollPerClick = document.querySelector(".img-1").clientWidth + 20;

  }
  }
}
</script>