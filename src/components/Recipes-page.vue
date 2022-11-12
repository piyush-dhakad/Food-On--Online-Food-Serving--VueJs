<template>

  <div class="main-container">
    <p class="CardHeading"> Related Recipes</p>
    <swiper :slidesPerView="4" :spaceBetween="15" :navigation="true" :loop="true" :modules="modules" class="mySwiper">
      <swiper-slide v-for="data in totalVuePackages.slice(0,15)" :key="data.isin">
        <div class="slideDiv">
          <img class="slideDivImage" :src="data.media['en-US'].image" alt="Slider image" />
          <img class="hearIcon" src="../assets/Eo_circle_grey_heart.svg.png" />
          <span>{{data.title['en-US']}}</span>

          <div class="side-subDiv">
            <p>{{new Date().getMinutes(data.lastPublishDate)}} min</p>
            <p>{{data.yield.serving}} serving</p>
          </div>
      
        </div>
      </swiper-slide>
    </swiper>


  </div>
</template>
  
<script>
import axios from 'axios'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation } from "swiper";

import constData from '../Constant-data'

export default {

  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
  data() {
    return {
      totalVuePackages: [],
     }
  },
  async mounted() {
    await this.fatchData();
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

.swiper-button-next {
  font-size: 10px;
}

.main-container {
  height: 100%;
  margin-bottom: 50px;
  background-color: rgb(240, 235, 235);
  padding: 10px;
  text-align: justify;
}


.main-container .CardHeading {
  text-transform: uppercase;
  display: inline-block;
  margin: 2%;
  font-weight: 1000;
  color: black;
}

.mySwiper {
  margin: 10px 20px 20px 20px;
}


.slideDiv {
  background-color: aliceblue;
  padding: 5px;
  text-align: center;
  background-repeat: no-repeat;

}

.hearIcon {
  width: 30px;
  position: absolute;
  right:5%;
  top:5%;
}

.slideDiv .slideDivImage {
  width: 100%;
  height: 200px;
  margin-bottom: 10%;
}

.slideDiv span {
  font-size: 15px;
  font-weight: 900;
  line-height: 0px;
  word-wrap: break-word;
}

.slideDiv p {
  font-weight: 900;
  line-height: 0px;
  color: #a9b3a7;
}
.side-subDiv {
  margin-top: 10%;
}
.side-subDiv p {
  display: inline-block;
  color: #357526;
  margin: 10px 12%;
}

@media (max-width:1150px) {
  .main-container .CardHeading {
    font-size: 15px;
  }

  .slideDiv span {
    font-size: 15px;
  }

  .slideDiv p {
    font-size: 10px;
  }
}

@media (max-width:1000px) {
  .slideDiv .slideDivImage {
    height: 160px;
  }
}

@media (max-width:900px) {
  .main-container .CardHeading {
    font-size: 10px;
  }

  .slideDiv span {
    font-size: 10px;
  }

  .slideDiv p {
    font-size: 7px;
  }
}

@media (max-width:800px) {

  .slideDiv .slideDivImage {
    height: 100px;
  }
  .hearIcon {
    width: 20px;
}
}


@media (max-width:581px) {
  .main-container .CardHeading {
    font-size: 7px;
  }

  .slideDiv span {
    font-size: 7px;
  }

  .slideDiv p {
    font-size: 5px;
  }

  .slideDiv .slideDivImage {
    height: 70px;
  }
}
</style>