<template>
<div class="container">
<div class="sub-container-one">
<h2>Work with innit</h2>
<p>We work across the Grocery Retail,
    CPG, HealthCare and Smart kitchen 
    industries to enhance end-user experiences and provide meaningful touchpoints between brands and consuers.
</p>
</div>
<div class="sub-container-two">

<div v-for='n in 6' :key="n" class="card" :style="{'background-image': 'url(' + require(`../assets/card-image/${this.card.backgroundImg[2]}`) + ')'}">
<h1 class="heading">{{this.card.img[0]}}</h1>
<p class="title-txt">{{this.card.txt[0]}}</p>
<p class="location-txt">{{this.card.location[0]}}</p>
</div>
</div>
<div class="sub-container-three">
<p class="txt">Customer Testimonials</p>

<div class="box">

<h4>Signature</h4>
<p>"Innit helps home chefs get the most out of the powerful cooking technologies in Signature Kitchen Suite pro-ranges, while simplifying everyday meal preparation.<br/> We believe that better cooking is possible through better thinking, and performance to elevate the overall culinary experience."</p>
<p>Zach Elkin. General manager of Signature Kitchen Suite.</p>
</div>

</div>
</div>
</template>

<script>
export default {
    name:'CustomerPage',
    data(){
        return {
            card: {
                backgroundImg:["mobileImg.jpeg","blue.jpeg","darkBlue.png"],
                img:["INTERMARCHE"],
                txt:["Retail Solution"],
                location:["franch",""]
            }
        }
    }
}
</script>
<style scoped>
.container {
width:100%;
padding: 12px;
box-sizing:border-box;
}
.sub-container-one {
    width:46%;
    margin:0 auto;
    padding:1%;
}
.sub-container-one p {
    letter-spacing: 0px;
}
.sub-container-one h2 {
    color: #328b32;
}

.sub-container-two
{   box-sizing: border-box;
    width:80%;
    margin: auto;
    padding:0 0%;
}
.sub-container-two .card {
    width:23%;
    height:340px;
    margin:10px 10px;
    font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    text-align: justify;
    padding:0 0 0 20px;
    border-radius:20px 20px 20px 20px;
    display: inline-block;
}
.sub-container-two .card .heading {
    font-weight: 900;
    font-size:20px;
    color: aliceblue;
}

.sub-container-two .card .title-txt {
    color: rgb(207, 208, 209);
    font-size:15px;
    margin-top:100%;
}
.sub-container-two .card .location-txt {
    color: aliceblue;
}
.sub-container-three {
    width:80%;
    margin:30px auto;

}
.sub-container-three .txt {
    text-transform: uppercase;
    color: rgb(187, 238, 172);
    font-weight: 900;
    margin: 40px 0 20px 0;
}
.sub-container-three .box {
width:50%;
margin:auto;
background-color: rgb(216, 218, 221);
padding:30px 40px;
border-radius:20px;
}
.sub-container-three .box h4 {
    text-transform: uppercase;
    background-color: black;
    color:aliceblue;
    display: inline;
    padding:10px 20px;
    border-radius:80px 80px 80px 90px;
}

.sub-container-three .box p {
    color: black;
}

@media (max-width:1100px){
    .sub-container-two .card {
    height:310px;
    transition:0.5m;
}
}

@media (max-width:1000px){
    .sub-container-two .card {
    height:280px;
    transition:0.5m;
}

    .sub-container-two .card .heading {
        margin-top:20px;
        font-size:15px;
}


.sub-container-two .card .title-txt {
    font-size:12px;
}
.sub-container-two .card .location-txt {
    font-size:11px;
}
}

@media (max-width:900px){
    .sub-container-two .card {
    height:250px;
 
}
}

@media (max-width:800px){
    .sub-container-two .card {
    height:230px;
 
}
}
@media (max-width:700px){
    .sub-container-two .card {
    height:210px;
 
}
.sub-container-three .box {
width:70%;
}
}
@media (max-width:650px){
    .sub-container-one {
    width:80%;
    }
}
</style>