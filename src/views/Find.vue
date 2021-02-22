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
                        <img src="https://1.bp.blogspot.com/-kHAICPADXdQ/XYJF-RF_0EI/AAAAAAACqQA/8zZel30vI2MwFrA6bi7emK-A1mVgkLE4gCEwYBhgL/s1600/cartaz_joker_danieldreyer.jpg" alt="">
                    </div>

                </div>
                <div class="sidebar">
                    <h3>Joker - 2020</h3>
                    <div>
                        <button>Assitir</button>
                    </div>
                    <div>
                        <b>IMDB: 9.0</b>
                    </div>
                    <p>
                        Sinopse: Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum dolore voluptates, a aperiam facere animi sed, dignissimos aut debitis odit inventore maiores molestiae exercitationem eius distinctio nihil quam impedit voluptatibus.
                    </p>

                    
                    <div>
                        <h4>Elenco</h4>
                    </div>
                    
                </div>
            </div>
        </div>

        <div class="container">
            <carousel :typeDocument="1"  :url='"https://api.themoviedb.org/4/list/3?page=1&api_key=5a1939e7ee4fd5d2be953c58f1787222"' :description="'Filmes recomendados'"></carousel>
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
import '../assets/css/query.css'
export default {
    name: 'find',
    components: {menuVue, carousel},
}
</script>
<style scoped>
.other{
    display: flex;
    justify-content: space-between;
    width: 1215px;
    flex-wrap: wrap;
    margin-top: 22px;
    margin-bottom: 22px;
  }

  .main{
    width: 30%;
 
  }
  .sidebar{
    width: 60%;
    color: #fff;
  }
  .main .img-poster img{
    width: 350px;
    height: 530px;
    border-radius: 10px;
  }
   footer{
    color:#fff;
    text-align: center;
    padding: 20px;
    border-top: 2px solid #333130;
    box-shadow: 0 2px 2px 0 #333130;
  }

</style>