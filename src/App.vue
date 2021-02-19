<template>
  <div id="app">

    <menu-vue></menu-vue>

    <div class="top">

    </div>

    <div class="limite">
      <div class="carousel ">

        <div class="title">
          <span>
           #DC FILMES
          </span>
        </div>

        <div class="carouselbox c1" >
          
        </div>

        

        <a class="switchLeft sliderButton" @click="sliderScrollLeft()"><i class="icofont-rounded-left"></i></a>
        <a class="switchRight sliderButton" @click="sliderScrollRight()"><i class="icofont-rounded-right"></i></a>
      </div>

      <div class="carousel ">

        <div class="title">
          <span>
            #MARVEL FILMES
          </span>
        </div>

        <div class="carouselbox c2" >
          
        </div>

        

        <a class="switchLeft sliderButton" @click="sliderScrollLeft2()"><i class="icofont-rounded-left"></i></a>
        <a class="switchRight sliderButton" @click="sliderScrollRight2()"><i class="icofont-rounded-right"></i></a>
      </div>
    </div>
    
    

    
    
    
  </div>
</template>

<script>
import axios from 'axios'
import './assets/css/carousel.css'
import menuVue from './components/menu.vue'


export default {
  name: 'App',
  components: {menuVue},
  data(){
    return{
      url: "https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222",
      dados: '',
        sliders : '',
       scrollPerClick: 0,
       ImagePadding: 20,
       scrollAmount: 0,
       title: ''
    }
  },

  
  created(){
    let dd;
    this.scrollPerClick = dd
    axios.get(this.url).then(response=>{
      this.dados = response.data.results
     
    })

    this.sliders = document.querySelector(".carouselbox")
    
     this.showMoviesData();
  },

  methods:{
    
    sliderScrollLeft() {
      
      document.querySelector(".c1").scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });

      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },

    sliderScrollLeft2() {
      document.querySelector(".c2").scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });
      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }
    },

  sliderScrollRight() {
 
    if (this.scrollAmount <= document.querySelector(".c1").scrollWidth - document.querySelector(".c2").clientWidth) {
      document.querySelector(".c1").scrollTo({
        top: 0,
        left: (this.scrollAmount += this.scrollPerClick),
        behavior: "smooth",
      });
    }


   
  },

  sliderScrollRight2() {


    if (this.scrollAmount <= document.querySelector(".c2").scrollWidth - document.querySelector(".c2").clientWidth) {
      document.querySelector(".c2").scrollTo({
        top: 0,
        left: (this.scrollAmount += this.scrollPerClick),
        behavior: "smooth",
      });
    }
    
  },


    async  showMoviesData() {
   
      var result = await axios.get(
        "https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"
      );

      var result2 = await axios.get(
        "https://api.themoviedb.org/4/list/1?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"
      );


      result = result.data.results;
      result2 = result2.data.results;

      result.map( (cur, index) => {
      
        document.querySelector(".c1").insertAdjacentHTML(
          "beforeend",
          ` <div class="">
              
              <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" />
            
              
            </div>
          `
        );

      });

      result2.map( (cur, index) => {

        document.querySelector(".c2").insertAdjacentHTML(
          "beforeend",
          ` <div class="">
              
              <img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" />
            
              
            </div>
          `
        );

      });

      this.scrollPerClick = document.querySelector(".img-1").clientWidth + 20;
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


</style>
