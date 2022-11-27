<template>
    <div>
        <div class="menu">
            <router-link to="/" class="logo">
                <h1>CollFlix</h1>
            </router-link>
            <nav>
                <ul>
                    <li>
                        <router-link to="/query">Séries</router-link>
                    </li>
                    <li>
                        <router-link to="/query">Filmes</router-link>
                    </li>
                    <li>
                        <router-link to="/query">Minha Lista</router-link>
                    </li>
                    <li>
                        <router-link to="/query">
                            <i class="icofont-search"></i>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/">
                            <img src="https://avatars.githubusercontent.com/u/39365797?s=460&u=4ebebc0bce1839222a2ce180b0b4aa0e13d45b1a&v=4" alt="" srcset="">
                            <span>Dos Santos</span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import '../assets/css/menu.css'
export default {
    name: "MenuVue"
}
</script>