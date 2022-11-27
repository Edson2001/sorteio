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
            ss: ''
        }
    },
    created(){
        console.log(this.$route.meta.layout)

        this.layoutView = ()=> import(`../layout/${this.layoutName}.vue`)
        this.ss = this.$route.meta?.layout
        this.$watch(this.ss, ()=>{

            console.log('oijnjnjnjnjnnjnjnjnjnjn')

           /*  if(this.$route.meta.layout){
                this.layoutName =  this.$route.meta.layout
            } */

           // this.layoutView = ()=> import(`../layout/${this.layoutName}.vue`)
        }, {deep: true, immediate: true})
    },

   
}

</script>