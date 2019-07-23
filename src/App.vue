<template>  
  <div id="app">
    <app-header></app-header>
    <!--<router-view></router-view>-->
    <app-footer></app-footer>
  </div>

</template>

<script>
/* eslint-disable */
import header from './components/header.vue'
import footer from './components/footer.vue'

export default {
  components:{
    'app-header': header,
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
</style>
