<template>
  <div>
    <div class="top">
      <div class="options">
        <form action="" class="search">
          <div class="top-search">
            <input v-model="query" type="text" placeholder="Encontre filmes e séries" />
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
            <img :src="'http://image.tmdb.org/t/p/w185/' + movie.poster_path" alt="" />
          </div>
          <div>
            <button class="btn"><i class="icofont-play-alt-1"></i> Assitir</button>
          </div>
        </div>
        <div class="sidebar">
          <h3>{{ movie.title }}</h3>

          <div class="classf">
            <b>IMDB: {{ movie.vote_average }}</b>
          </div>
          <p class="sinopse">Sinopse: {{ movie.overview }}</p>

          <p class="sinopse">Gênero:</p>

          <div class="generos">
            <div v-for="(genero, index) in movie.genres" :key="index" class="item-genero">
              <a href="" class="genero">
                {{ genero.name }}
              </a>
            </div>
          </div>

          <div>
            <iframe
              width="560"
              height="315"
              :src="'https://www.youtube.com/embed/' + video"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4>Elenco</h4>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <carousel
        :typeDocument="1"
        :url="
          'https://api.themoviedb.org/3/movie/' +
          id_movie +
          '/recommendations?api_key=5a1939e7ee4fd5d2be953c58f1787222&language=pt-BR&page=1'
        "
        :description="'Filmes recomendados'"
      ></carousel>
    </div>

    <footer>
      <b>
        <a href="https://github.com/Edson2001/collflix">CollFlix</a> - 2021 | DADOS DE
        FILMES: <a href="https://www.themoviedb.org/">TMDB</a>
      </b>
      <p>
        Criado por <a href="https://github.com/Edson2001">Edson Dos Santos Bandola</a>
      </p>
    </footer>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";

import "../assets/scss/query.scss"
import "../../src/assets/scss/find.scss"
import axios from "axios";
export default {
  name: "find",
  components: { carousel },

  data() {
    return {
      query: "",
      movie: "",
      id_movie: "",
      video: "",
    };
  },

  created() {
    if (
      this.$router.history.current.params.id == "" ||
      this.$router.history.current.params.id == null
    ) {
      this.id_movie = 233;
    } else {
      this.id_movie = this.$router.history.current.params.id;
    }

    this.find_movie(this.id_movie);
    axios
      .get(
        "https://api.themoviedb.org/3/movie/" +
          this.id_movie +
          "/videos?api_key=5a1939e7ee4fd5d2be953c58f1787222&language=en-US"
      )
      .then((response) => {
        this.video = response.data.results[0].key;
      });
  },

  methods: {
    find_movie(id) {
      console.log(id);
      axios
        .get(
          "https://api.themoviedb.org/3/movie/" +
            id +
            "?api_key=5a1939e7ee4fd5d2be953c58f1787222&language=pt-BR"
        )
        .then((response) => {
          this.movie = response.data;
        });
    },
  },
};
</script>
