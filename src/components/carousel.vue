<template>
    <div>
        <div class="carousel " >

            <div class="title">
                <span>
                    #{{description}}
                </span>
            </div>

            <div :class="'carouselbox c'+ this.typeDocument"  >
            
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
       //urlQuery: 'https://api.themoviedb.org/3/search/movie?api_key=5a1939e7ee4fd5d2be953c58f1787222&language=en-US&query=The%20Batman&page=1&include_adult=true'
    }
  },

  
  created(){
    let dd;
    this.scrollPerClick = dd
    axios.get(this.url).then(response=>{
      this.dados = response.data.results
     
    })

    this.sliders = document.querySelector(".c"+this.typeDocument)
    
     this.showMoviesData();
  },

  methods:{
    
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



    async  showMoviesData() {
   
      var result = await axios.get(
        this.url
      );

      result = result.data.results;
      

      result.map( (cur, index) => {
      
        document.querySelector(".c"+this.typeDocument).insertAdjacentHTML(
          "beforeend",
          ` <div class="">
              <router-link to="/find?id=${cur.id}">
                <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" />
              </router-link >
              
            
              
            </div>
          `
        );

      });

      this.scrollPerClick = document.querySelector(".img-1").clientWidth + 20;
    }

  }
}
</script>