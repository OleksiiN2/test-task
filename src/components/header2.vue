
<template>
    <!--<mdb-container>
    <mdb-container>
      Navbar-->
      <mdb-navbar color="yellow accent-3" class="mt-0" navIconClass="dark-teal-text" animated animation="3">
          <mdb-container class="pt-n1">
        <!-- Navbar brand -->
        
        <mdb-navbar-brand>
            <router-link class="font-weight-bold txt-size-n1 txt-color-black" to="#" exact>
                        <img src="../assets/logo1.png" width="40" height="40" class="d-inline-block" alt="logo">
                        tinyone
                    </router-link>
            </mdb-navbar-brand>
            
        <mdb-navbar-toggler>
            
          <mdb-navbar-nav right>
            <li class="nav-item pr-n1 active">
                <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Features<span class="sr-only">Toggle navigation</span></router-link>
            </li>
            <li class="nav-item pr-n1">
                <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Support</router-link>
            </li>
            <li class="nav-item pr-n1">
                <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Blog</router-link>
            </li>
          </mdb-navbar-nav>
         
        </mdb-navbar-toggler>
       
        </mdb-container>
     </mdb-navbar>
       <!--.Navbar
      
    </mdb-container>
  </mdb-container>-->
</template>

<script>
/* eslint-disable */
//import
//import {db, auth} from '../init-firebase'
//import account from '../account'
import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbRow, mdbInput, mdbNavbarBrand, mdbIcon } from 'mdbvue';
export default {
    name: 'HamburgerMenuPage',
             components: {
                mdbNavbar,
                mdbNavItem,
                mdbNavbarNav,
                mdbNavbarToggler,
                mdbContainer,
                mdbRow,
                mdbInput,
                mdbNavbarBrand,
                mdbIcon
            },
    data(){
        return {
             
             }
        }
    }    
    

</script>


<style scoped>
/*nav{
    background: #ffd900;
} */.dark-teal-text {
    color: #004d40;
  }
.pt-n1, .navbar-toggler {
  padding-top: 1.5rem !important;
}
.pr-n1{
    padding-right: 25px; 
}
.txt-size-n1{
    font-size: 1.5rem;
}
.txt-color-black{
    color:black;
}
.container{
    width: 50%;
}
.nav-link:hover{
    color: #fff !important;
}
.animated-icon3 /deep/ span{
    background:#000 !important;     
}




</style>