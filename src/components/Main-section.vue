<script>
    import Mainleftsidesection from "./Main-left-side-section.vue";
    import Mainrightsidesection from './Main-right-side-section.vue';
    import SearchBox from "./Search-box.vue";


    export default {
        name: "Main-Section",

        components: {
    Mainleftsidesection,
    Mainrightsidesection,
    SearchBox,

},
data(){
        return{
            isItShow:true   
        }
    }
    }
    </script>
    
<template>
    <div class="container">
           <SearchBox v-if="this.$store.state.isActive"/>
           
        <div class="main-section">
          
            <Mainleftsidesection />
            <mainrightsidesection />
        </div>
        
    </div>


</template>
<style scoped>

.main-section {
    display: flex;
    width: 90%;
    height:auto;
    margin:30px 8%;
}
@media (max-width:900px)
{

    .main-section {
    display:block;
    width: 90%;
    height: auto;
    margin:30px 5%;

}
}
</style>
