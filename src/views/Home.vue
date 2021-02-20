<template>
  <div id="app" >

    <menu-vue></menu-vue>

    <div class="top">

    </div>

    <div class="container">
      
        <carousel :typeDocument="1"  :url='"https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'DC FILMES'"></carousel>
        <carousel :typeDocument="2"  :url='"https://api.themoviedb.org/4/list/1?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'Marvel FILMES'"></carousel>
      
    </div>
    
    

    
    
    
  </div>
</template>

<script>


import menuVue from '../components/menu.vue'
import carousel from '../components/carousel.vue'


export default {
  name: 'Home',
  components: {menuVue, carousel},
  
  
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


</style>
