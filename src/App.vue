<template>  
  <div id="app">
    <app-header></app-header>
    <app-carousele></app-carousele>
    <app-features></app-features>
    <app-sendemail></app-sendemail>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import carousele from './components/carousele.vue'
  import features from './components/features.vue'
  import sendemail from './components/sendemail.vue'
  import footer from './components/footer.vue'

  export default {
    components:{
      'app-header': header,
      'app-carousele': carousele,
      'app-features': features,
      'app-sendemail': sendemail,
      'app-footer': footer
    }
  }
</script>

<style>
</style>
