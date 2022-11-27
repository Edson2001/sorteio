<template>
    <div>
        <menu-vue ></menu-vue>
        <slot></slot>
    </div>
</template>

<script>
import menuVue from "../components/menuVue.vue" 
export default{
    name: 'defaultLayout',
    components: {MenuVue: menuVue} 
}
</script>