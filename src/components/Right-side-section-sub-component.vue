
<script>

export default {
    name: "RightSideSectionSubComponent",
    props: {
        name: String,
        mydata: String,
        imagePath: String
    },
}
</script>

<template >
    <div class="container">
            <img v-bind:src="this.imagePath" :alt="'imageName '+imagePath" />
        <div class="sub-div">
            <p> <b> {{name}}</b><br>
                <span class="edit-text">{{mydata}} </span>
            </p>

        </div>
    </div>
</template>
<style scoped>
.container {
    width: 100%;
    margin: 10px 20px;
    display: flex;
    margin: 10px 20px;
     
}

img {
    width: 40%;
    height: 150px;
}

.sub-div {
    padding: 5% 2%;
    text-align: justify;
    
}
b {
    color: #919191;
    font-size: 15px;
}

.edit-text {
    font-weight: 800;
}

@media (max-width:900px) {
    img {
    width: 30%;
    height: 150px;
}

    .container {
        margin: 10px 0px;
    }

    .sub-container {
        padding: 5% 4%;
    }

    b {
        color: #778085;
    }

}

@media (max-width:900px) {
    .container {

        border: 1px solid rgb(167, 158, 158);

    }

    img {
        width: 30%;
       
    }
}

@media (max-width:600px) {
    img {
        width: 40%;
       
    }
}
@media (max-width:400px) {
   

    b {

        font-size: 10px;
    }

    .edit-text {
        font-size: 13px;
    }


    
}
</style>