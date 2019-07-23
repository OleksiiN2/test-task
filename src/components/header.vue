<template>
    <div class="header">
        <b-navbar toggleable="md" type="light">
            <div class="container pt-n1">
                <b-navbar-brand>
                    <router-link class="navbar-brand font-weight-bold txt-size-n1" to="#" exact>
                        <img src="../assets/logo1.png" width="40" height="40" class="d-inline-block" alt="logo">
                        tinyone
                    </router-link>
                </b-navbar-brand>

                <b-navbar-toggle target="nav-collapse" class="font-weight-bold"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
            
                    <!-- Right aligned nav items -->
                
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item>
                            <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Features</router-link>
                        </b-nav-item>
                        <b-nav-item>
                            <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Support</router-link>
                            </b-nav-item>
                        <b-nav-item>
                            <router-link class="nav-link text-dark font-weight-bold" to="#" exact>Blog</router-link>
                        </b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>

//import { mdbNavbar, mdbNavItem, mdbNavbarNav, mdbNavbarToggler, mdbContainer, mdbRow, mdbInput, mdbNavbarBrand, mdbIcon } from 'mdbvue';
export default {
  /*  name: 'HamburgerMenuPage',
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
            },*/
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
b-navbar{
    background-color: #fcdb00 !important;
}
.navbar-light .navbar-toggler{
    border:none;
    color: #000;
}
button:focus{
    outline: none !important;
}
.navbar-toggler:after{
     content:"  Menu";
     font-size: 1.2rem;
}
.pt-n1{
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
.header{
    background-color: #fcdb00;
}
.container{
    max-width: 50%;   
}
.nav-link:hover{
    color: #fff !important;
}


/*MEDIA*/
@media only screen and (max-width: 1680px)  {
    .container{
         max-width: 60%;   
    }
}
@media only screen and (max-width: 1440px)  {
    .container{
         max-width: 70%;   
    }
}
@media only screen and (max-width: 1024px)  {
    .container{
         max-width: 80% ; 
    }
    .pt-n1{
        padding-top: 0.5rem !important;
    }
}
@media only screen and (max-width: 768px)  {
    .container{
         max-width: 90% ;   
    }
    .pt-n1{
        padding-top: 0.5rem !important;
    }
    .nav-item{
        text-align: center;
    }
    .nav-item:hover{
        background:rgba(255, 240, 0, 0.35);
        margin: 0 -10%;
    }   
}
@media only screen and (max-width: 703px)  {
    .container{
         max-width: 95%;   
    }
    .pt-n1{
        padding-top: 0 !important;
    }
}
@media only screen and (max-width: 414px)  {
    .container{
         max-width: 100%;   
    }
    .pt-n1{
        padding-top: 0 !important;
    }   
}
</style>