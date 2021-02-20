<template>
    <div>
        <div class="menu">
            <router-link to="/" class="logo">
                <h1>CollFlix</h1>
            </router-link>
            <nav>
                <ul>
                    <li>
                        <a href="">Séries</a>
                    </li>
                    <li>
                        <a href="">Filmes</a>
                    </li>
                    <li>
                        <a href="">Minha Lista</a>
                    </li>
                    <li>
                        <router-link to="/query">
                            <i class="icofont-search"></i>
                        </router-link>
                    </li>
                    <li>
                        <a href="">
                            <img src="https://avatars.githubusercontent.com/u/39365797?s=460&u=4ebebc0bce1839222a2ce180b0b4aa0e13d45b1a&v=4" alt="" srcset="">
                            <span>Dos Santos</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import '../assets/css/menu.css'
export default {
    name: 'menuVue'
}
</script>