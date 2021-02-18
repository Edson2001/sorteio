<template>
  <div id="app">

    <div class="top">

    </div>
    
    <div class="carousel">
      <div class="carouselbox" >
        
      </div>

      <a class="switchLeft sliderButton" @click="sliderScrollLeft()">-</a>
      <a class="switchRight sliderButton" @click="sliderScrollRight()">-</a>
    </div>

    
    
    
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'App',
  data(){
    return{
      url: "https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222",
      dados: '',
        sliders : '',
       scrollPerClick: 0,
       ImagePadding: 20,
       scrollAmount: 0,
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
      document.querySelector(".carouselbox").scrollTo({
        top: 0,
        left: (this.scrollAmount -= this.scrollPerClick),
        behavior: "smooth",
      });

      if (this.scrollAmount < 0) {
        this.scrollAmount = 0;
      }

      console.log("Scroll Amount  l: ", this.scrollAmount);
    },

  sliderScrollRight() {
 
    if (this.scrollAmount <= document.querySelector(".carouselbox").scrollWidth - document.querySelector(".carouselbox").clientWidth) {
      document.querySelector(".carouselbox").scrollTo({
        top: 0,
        left: (this.scrollAmount += this.scrollPerClick),
        behavior: "smooth",
      });
    }
    console.log("Scroll Amount r: ", this.scrollAmount);
  },

// For showing dynamic contents only
    async  showMoviesData() {
      //const api_key = "47071116ad3913e09389a88eb1f895b6";
      var result = await axios.get(
        "https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"
      );

      result = result.data.results;

      result.map( (cur, index) => {
      
        document.querySelector(".carouselbox").insertAdjacentHTML(
          "beforeend",
          `<img class="img-${index} slider-img" src="http://image.tmdb.org/t/p/w185/${cur.poster_path}" /> `
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
/*
#app {
  background: #222;
  padding: 0;
  margin: 0;
}*/
* {
  margin: 0;
  padding: 0;
}

body {
  height: 100vh;
  width: 100%;
  background-color: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
/*
.top{
  width: 100%;
  box-shadow: 0 6px 6px rgba(0,0,0,.4);
  height: 500px;
  background: url('https://i1.wp.com/thefutureoftheforce.com/wp-content/uploads/2020/08/Zack-Snyders-Justice-League.jpg?fit=3200%2C1800&ssl=1');
  background-size: cover;
 
}*/


.netflix-logo {
  height: 15vw;
  width: 100%;
  text-align: center;
}

.netflix-logo img {
  height: 100%;
  /* width: 100%; */
}

.carousel {
  height: 250px;
  width: 80%;
  position: relative;
}
.carousel .switchLeft,
.carousel .switchRight {
  color: white;
  font-weight: bold;
  height: 100%;
  width: 45px;
  line-height: 250px;
  font-size: 25px;
  text-align: center;
  background-color: lightgreen;
  font-family: sans-serif;
  top: 0;
  z-index: 3;
}

.carousel .switchLeft {
  position: absolute;
  left: -50px;
}

.carousel .switchRight {
  position: absolute;

  right: -50px;
}

.carouselbox {
  height: 250px;
  width: auto;
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-align: center;
  padding-bottom: 10px !important;
  display: flex;
  align-items: center;
}

.carouselbox img {
  min-width: 147px;
  max-width: 147px;
  height: 200px;
  background-size: cover;
  background-color: lightgreen;
  margin: 5px 10px;
  cursor: pointer;
  transition: 0.5s ease;
  z-index: 2;

  /* margin: 15px; */
}

.carouselbox img:hover {
  transform: scale(1.4);
  z-index: 5;
}
</style>
