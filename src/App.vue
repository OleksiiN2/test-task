<template>  
  <div id="app">
    <app-header></app-header>
    <app-carousele></app-carousele>
    <app-features></app-features>
    
    <app-footer></app-footer>
  </div>

</template>

<script>
/* eslint-disable */
import header from './components/header.vue'
import carousele from './components/carousele.vue'
import features from './components/features.vue'
import footer from './components/footer.vue'

export default {
  components:{
    'app-header': header,
    'app-carousele': carousele,
    'app-features': features,
    'app-footer': footer
  }
}
</script>

<style>
 /* body{
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    background: #ffd900;
   
  }*/
  html{
     font-family:Arial, Helvetica, sans-serif;
  }
</style>
