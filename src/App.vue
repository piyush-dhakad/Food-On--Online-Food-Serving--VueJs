<script>
import InnitHeader from './components/Innit-header.vue';
import Footer from './components/Innit-footer.vue';

export default {
  name: 'App',
  components: {
    InnitHeader,
    Footer
},
  data() {
    return {
      isShow: true
    }
  },
  methods: {
    updateValue(value) {
      console.log(value);
      this.isShow = value;
    }
  }

}
</script>
  


<template>
  <div>
    <div class="dmy-div"></div>
    <InnitHeader :updateValueCondition="updateValue" />    
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>








<style >
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
  padding: 0%;
}

body {
  margin: 0;
  padding: 0;
}

.dmy-div {
  height:65px;
  border:1px solid red;
}
</style>
