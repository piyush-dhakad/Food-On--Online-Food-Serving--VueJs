<script scoped>
import axios from 'axios'
import constData from '../Constant-data'

export default {
    name: "Main-left-side-section",

    data(){
    return {
        totalVuePackages:[]
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
    display: inline-block;
    width: 60%;
    border-right:1px outset black;

}

.sub-container {

    background-repeat:no-repeat;
    background-size: cover;
    height:100%;
    width: 90%; 

}

.inner-container {
    background-color:#fff;
    display:inline;
    padding:0px 10px;
    float:right;
    margin:20% 0px;
}

.text-design {
font-size:20px;
font-weight:900;
letter-spacing: 1px;
}
.upper-inner-div p {
  text-indent: 0px;
  text-align: justify; 
}
.text-small-size {
    font-size:7px;
    letter-spacing: 1px;
}
b {
color:#232525;
font-size:13px;
}
.lower-inner-div{
    margin:50px 0px 0px 0px;

}
.lower-inner-div p {
     text-align: justify;
     font-weight:700;
    color:#4cb935;
    font-size:15px;
}
.lower-inner-div img {
    width:20px;
    height: 10px; 
    margin-left:15px;
}

@media (max-width:900px) {
    .main-container {
        width:100%;
        margin:0px 0px 50px 0px;
        border-right:1px outset transparent;        
    }

    .sub-container {
        width:100%;
        height:480px;
   
    }
    

}

@media (max-width:420px) {
    .main-container {
        width:100%;
        margin:0px 0px 20px 0px;

    }
     
    .sub-container {
        height:350px;
        box-sizing:border-box;
    }

.inner-container {
    display:block;
    box-sizing:border-box;
    padding:0px 10px;
    margin:25% 0px;
    
}

.text-design {
font-size:15px;
font-weight:900;
letter-spacing: 0px;
}
.upper-inner-div p {
  text-indent: 0px;
  text-align: justify; 
}
.text-small-size {
    font-size:0px;
    letter-spacing: 0px;
}
b {
font-size:10px;
}
.lower-inner-div{
    margin:20px 0px 0px 0px;

}
.lower-inner-div p {
     text-align: justify;
     font-weight:700;
    color:#4cb935;
    font-size:10px;
}

}

@media (max-width:305px){
    .text-design {
        font-size:11px;
    }        
}

</style>

<template>
    <div class="main-container" v-for="data in totalVuePackages.slice(3,4) " :key="data.isin">        
        
        <div class="sub-container" :style="{'background-image': 'url('+data.media['en-US'].image + ')'}">
            <div class="inner-container">
                <div class="upper-inner-div">
                    <p><b>{{data.provider}} - {{new Date().toDateString(data.lastPublishDate)}}</b>
                            <br>
                       <span class="text-design"> {{data.title['en-US']}}</span>
                        <br>
                      <b class="text-small-size">RADICAL EATS FOR NOT SO RADICAL FREE RADICALS.</b>
                     </p>
                </div>
                <div class="lower-inner-div">
                    <p >CHECK IT OUT<img src="../assets/arrow_icon.png" alt="arrow_icon"/> </p> 

                </div>
            </div>         
        </div>
    </div>
</template>
