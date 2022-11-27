<template>
    <div>
        <component :is="layoutView" >
            <router-view />     
        </component>   
    </div>    
</template>
<script>
export default{
    name: "appLayout",
    data(){
        return {
            layoutView: null, 
            layoutName: 'defaultLayout',
        }
    },
    created(){
        this.layoutView = ()=> import(`../layout/${this.layoutName}.vue`)
    },
}

</script>