<script>
export default {
    name: "innit-header",


    methods: {
        updateValueCondition() {   
            this.$store.commit('setData')
        }
    },

    data() {
        return {
            isItShow: true,
            isActive: true
        }
    }
}
</script>



<template>
    <div class="header">
        <div class="headerlogo">
            <img src="../assets/logo1.png" alt="" class="logo" />
        </div>
        <div class="navbar" :class="{navbarMoobile:this.isActive}">

            <ul>
                <li class="active for-margin">
                    <router-link to="/" class="linkTag active">For business</router-link>

                </li>
                <li>
                    <router-link to="/recipes" class="linkTag">Recipes</router-link>
                </li>
                <li>
                    <router-link to="/products" class="linkTag">Products</router-link>

                </li>
                <li>
                    <router-link to="/customer" class="linkTag">Customer</router-link>
                </li>
                <li>
                    <router-link to="/apps" class="linkTag">Apps</router-link>

                </li>
            </ul>
        </div>

        <div class="icon-div">
            <img class="search-icon" @click.prevent="updateValueCondition(this.isItShow = !this.isItShow)"
                src="../assets/Search_Bar_Icon-web-liquid.png" />
            <img class="menu-icon" @click.prevent="this.isActive = !this.isActive" src="../assets/menu.png"
                alt="menu icon">
        </div>


    </div>

</template>


<style scoped>
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
}

.header {
    font-family: montserrat;
    width: 100%;
    height: 69px;
    background: #0e3f0e;
    font-family: Averta, Arial, Helvetica, sans-serif;
    position: fixed;
    line-height: 22px;
    top: 0;
    display: flex;
    z-index: 99;
}

.headerlogo {
    display: inline-block;
    margin: 0px 0px 0px 10%;
}

.headerlogo img {
    display: inline-block;
    width: 74px;
    height: 37px;
    padding: 13px;
}

.navbar {
    margin-left: 39%;
}

.navbar ul {
    float: right;
    font-size: 10px;
    font-weight: 900;

}

.navbar li {
    display: inline-block;
    margin: 24px 9px
}

.icon-div {
    display: inline-block;
    padding: 13px 10px;
}

.icon-div .search-icon {
    width: 21px;
    height: 21px;
    margin: 12px 5px;
}

.icon-div .menu-icon {
    display: none;
}

li a {
    color: white;
    text-transform: uppercase;
    padding: 0px 10px;
}

a:hover {
    color: #4cb935 !important;
}

a.active {
    color: #4cb935 !important;
    border-right: 2px solid #056f32;
    padding-right: 8px;
    transition: .5s;
}



li .linkTag {
    color: rgb(221, 216, 216);
    text-transform: uppercase;
    padding: 0px 10px;
}

.linkTag:hover {
    color: #4cb935 !important;
}

.linkTag .active {
    color: #4cb935 !important;
    border-right: 2px solid #056f32;
    padding-right: 8px;
    transition: .5s;
}

@media (max-width:1250px) {
    .navbar {
        margin-left: 32%;
    }

}


@media (max-width:1150px) {
    .navbar {
        margin-left: 25%;
    }

}

@media (max-width:1000px) {
    .navbar {
        margin-left: 20%;
    }

}

@media (max-width:900px) {
    .navbarMoobile ul {
        display: none;

    }

    .navbar {
        margin: 0% -78%;
        width: 100%;
    }


    .navbar ul {
        margin-top: 69px;
        float: left;
        background: #000;
        padding: 0px 2%;
        width: 100%;
    }

    .navbar li {
        width: 100%;

    }

    .navbar a {
        font-size: 20px;
    }

    .icon-div {
        margin: 0px 0% 0px 58%;
        display: inline-block;
        padding: 0px 10px;
    }

    .icon-div .menu-icon {
        display: inline-block;
    }

    .icon-div .search-icon {
        margin: 21px 7px;
    }

    .headerlogo {
        margin: 0px 27% 0px 39%;
    }


    a.active {
        color: #4cb935 !important;
        border-right: 2px solid transparent;
        padding-right: 8px;
        transition: .5s;
    }

}

@media (max-width:850px) {
    .navbar {
        width: 105%;
        margin: 0px -83%;
    }
}

@media (max-width:570px) {
    .navbar ul {
        width: 105%;
        padding: 0px 5%;
    }
}


@media (max-width:670px) {
    .headerlogo {
        margin: 0px 24% 0px 39%;
    }

    .icon-div {
        display: inline-block;
        padding: 10px 5px;
    }

    .icon-div .menu-icon {
        width: 60px;
        height: 60px;
    }

    .icon-div .search-icon {
        width: 18px;
        height: 18px;
    }


}

@media (max-width:570px) {
    .headerlogo {
        margin: 0px 16% 0px 39%;
    }

}

@media (max-width:430px) {
    .headerlogo {
        margin: 0px 18% 0px 9%;
    }

    .navbar ul {
        width: 105%;
        padding: 0px 16%;
    }

}

@media (max-width:430px) {

    .headerlogo img {
        display: inline-block;
        width: 54px;
        height: 27px;
        padding: 13px;
    }

    .navbar ul {
        padding: 0px 28%;
    }

    .icon-div {
        margin: 0px 0% 0px 81%;
    }

}
@media (max-width:345px) {

    .icon-div {
        margin: 0px 0% 0px 75%;
    }
}

@media (max-width:319px) {

    .icon-div {
        margin: 0px 0% 0px 64%;
    }
}   
</style>