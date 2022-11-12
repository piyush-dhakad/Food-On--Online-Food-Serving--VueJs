<template>
    <div class="main-container" >
        <RightSideSectionSubComponent v-for="data in totalVuePackages.slice(2,5)" v-bind:key="data.inis" :imagePath="data.media['en-US'].image" :mydata="data.slug" :name="data.title['en-US']"></RightSideSectionSubComponent>
    </div>
</template>

<script>
import RightSideSectionSubComponent from "./Right-side-section-sub-component.vue";
import axios from 'axios';
import constData from '../Constant-data'
export default {
    name: 'Main-right-side-section',
    components:{
    RightSideSectionSubComponent,
},
data(){
return {
    totalVuePackages:[],    
}
},

async  mounted(){
      await  this.fatchData()
    },
methods: {
  
    fatchData() {
            // GET request using axios with set headers
        
             axios.get(constData.BASEPATH, constData.CONFIG)
                .then(response => {
                    this.totalVuePackages = response.data.results;
                }).catch((error) => {
                    console.log(error + '------------this is an error');
                }).finally(() => {
                    console.log("API was called");
                });


        }
}
}
</script>

<style scoped>
.main-container {
    box-sizing: border-box;  
    width: 40%;

}

@media (max-width:900px) {
    .main-container {

        width:100%;
    }


}


</style>