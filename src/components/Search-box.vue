<template>
    <div id="SearchSection">
        <div class="search-field-container">
            <form method="" action="" @submit.prevent="submitForm" autocomplete="off">
                <div class="innerdiv">

                    <select name="selectbox" id="selectBox">
                        <option value="select all">Select All</option>
                        <option value="search products">Search Products</option>
                        <option value="search recipes">Search recipes</option>
                    </select>
                    <input type="text" name="textBox" id="searchTextBox" v-model.lazy="this.query" @keyup.enter="fatchData"
                        placeholder="Find a food product or recipe." />

                </div>
            </form>

        </div>

    </div>

</template>

<script>

export default {
    name: "search-box",
        submitForm() {
        },
}
</script>

<style scoped>
#SearchSection {
    background-image: url(../assets/background-image.jpg);
    padding: 22px 0px;

}

.search-field-container {
    display: block;

}

#selectBox {
    padding: 15px 17px;
    background-color: #f8f8f8;
    border-radius: 30px 0 0 30px;
}

#searchTextBox {
    width: 40%;
    padding: 15px 17px;
    border-radius: 0 30px 30px 0;
    background-color: #ffffff;
    color: #8b8484;
    background-image: url('../assets/Search_Bar_Icon-web-liquid-green.png');
    background-repeat: no-repeat;
    background-size: 20px;
    background-position-x: 95%;
    background-position-y: 50%;
}
.listImage{
    width:100px;
    height:100px;
}

.dataTable table {
    width: 100%;
    margin:50px 0 0 0 ;
    padding:30px;
}

.dataTable table tr {
background-color: rgb(255, 255, 255);    
}
.dataTable table tr th {
    padding:30px;
}
.search-icon {
    width: 21px;
    height: 21px;
}
.paginate{
    display: inline-block;

}
.paginate span{
    background-color:rgb(181, 189, 192);
color:black;
float: left;
padding:8px 16px;
text-decoration:none;
}
.paginate span .active{
    background-color: wheat;
    color: black;
    border-radius: 5px;

}

.paginate span :hover:not(.active){
    background-color: #ddd;
    border-radius: 5px; 
}

@media (max-width:770px) {
    #selectBox {
        display: none;
    }

    #searchTextBox {
        width: 60%;
        border-radius: 30px 30px 30px 30px;
    }

    
}
@media (max-width:370px){
    .paginate span{
    padding:6px 13px;
    }
    
}
</style>