<template>
    <div class="footer">
        <div class="footer-left">
            <div class="footer-logo">
                <img src="../assets/logo1.png" alt="logo image footer" />
            </div>
        </div>
        <div class="footer-right">
          <div class="container">

            <div class="sub-div">
                <ul>
                    <li class="txt-bold">Company</li>
                    <li>About Us</li>
                    <li>Our Team</li>
                    <li>Support</li>
                    <li>Careers</li>
                    <li>Press</li>
                </ul>
            </div>

            <div class="twoSection">

            <div class="sub-div">
                <ul>
                    <li class="txt-bold">Shopwell App</li>
                    <li>About</li>
                    <li>App Store</li>
                    <li>Play Store</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Pinterest</li>

                </ul>

            </div>
            <div class="sub-div">
                <ul>
                    <li class="txt-bold">Innit App</li>
                    <li>About</li>
                    <li>App Store</li>
                    <li>Play Store</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Pinterest</li>

                </ul>


            </div>
</div>
<div class="twoSection">
      
<div class="sub-div">
                <ul>
                    <li class="txt-bold">For business</li>
                    <li>For Business</li>
                    <li>Works with Innit</li>
                    <li>Lens with Innit</li>    

                </ul>
            </div>
            <div class="sub-div">
                <ul>
                    <li class="txt-bold">Explore</li>
                    <li>Guides</li>
                    <li>Premium</li>
                    <li>How-To's</li>
                    <li>Recipes</li>
                    <li>Products</li>

                </ul>

            </div>
        </div>
</div>
        </div>
    </div>
    <div class="lastdiv">
        <p> @ Innit International SCA</p>
        <p> Terms of Service</p>
        <p> Privacy Policy </p>
        <p> Sitemap</p>
        <p> Web Accessibility</p>

    </div>
</template>

<script>
export default {
    name: "Footer-Page"
}
</script>

<style scoped>
.footer {
    padding: 60px 0px;
    background-color: #0e3f0e;
    display: flex;
}

.footer-left {
    width: 15%;
}
.footer-logo img {
width:68px;
height: 33px;
}
.footer-logo {
margin: 7% 0px;
}
.footer-right {
    width: 85%;
    display: flex;
    box-sizing: border-box;
}

.container {
display: flex;
}

.sub-div {
    text-align: justify;
    margin: 0% 25px;
}

.sub-div ul {
    list-style: none;
    color: aliceblue;
    font-family: 'Averta Regular', 'Averta', Arial, Helvetica, sans-serif;
    font-size: 13px;
}
.sub-div ul li {
    padding-top: 7px;
}
.txt-bold {
    text-transform: uppercase;
    font-weight: 800;
    padding-bottom:8px;
}

.lastdiv {
    background-color: #0e3f0e;
}

.lastdiv p {
    display: inline;
    color: aliceblue;
    font-family: 'Averta Regular', 'Averta', Arial, Helvetica, sans-serif;
    margin:2px 8px;
    font-size: 11px;
}
.twoSection {
    display:flex;
}
@media (max-width:1008px) {

    .sub-div {
    margin: 0% 14px;
}

}

@media (max-width:880px) {
    .sub-div {
    margin: 0% 7px;
}
}

@media (max-width:800px){
  
.sub-div ul {
 font-size: 10px;

}

}


@media (max-width:700px) {
    .sub-div {
    margin: 0% 0px;
}
}


@media (max-width:610px) {
    .footer {
        display: block;
    }
    .footer-right{
    width: 100%;
    }
    .footer-left {
    width: 100%;
}



}
@media (max-width:530px){
    .sub-div {
    margin: 0% -6px;
}
}
@media (max-width:480px){

.container {
display: block;
}
}   


</style>