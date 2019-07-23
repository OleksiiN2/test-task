
<template>
    <div>
        <nav class="navbar navbar-light" style="background-color: ##fcdb00;">
            <div class="container pt-n1">
                <div class="navbar-header">
                    <router-link class="navbar-brand font-weight-bold txt-size-n1" to="#" exact>
                        <img src="../assets/logo1.png" width="40" height="40" class="d-inline-block" alt="logo">
                        tinyone
                    </router-link>
                    <button class="navbar-toggler" data-toggle="collapse" data-target="#mydropdown" aria-controls="mydropdown" aria-expanded="false" aria-label="Toggle navigation">
                       <!-- <span class="sr-only">Toggle navigation</span>
                        <span class="navbar-toggler-icon"></span>
                        <div class="animated-icon1"><span></span><span></span><span></span></div>-->
                        <span class="dark-blue-text"><i class="fas fa-bars fa-1x"></i></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="mydropdown">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item pr-n1 active">
                            <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Features<span class="sr-only">Toggle navigation</span></router-link>
                        </li>
                        <li class="nav-item pr-n1">
                            <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Support</router-link>
                        </li>
                        <li class="nav-item pr-n1">
                            <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Blog</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div class="container">
        
        </div>
    </div>
</template>

<script>
/* eslint-disable */
//import
//import {db, auth} from '../init-firebase'
//import account from '../account'

export default {
    data(){
        return {
            
        }
    }    
    
}
</script>


<style scoped>
/*nav{
    background: #ffd900;
} */
.pt-n1 {
  padding-top: 1.5rem;
}
.pr-n1{
    padding-right: 25px; 
}
.txt-size-n1{
    font-size: 1.5rem;
}
.container{
    width: 50%;
}
.nav-link:hover{
    color: #fff !important;
}






.navbar-toggler:after{
        
        content:"Menu";
       
    }
.navbar-toggler-icon:after{
        
        content:"Menu";
       
    } 

</style>