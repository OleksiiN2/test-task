<template>
   <div class="footer">
         <div class="container">
             <div class="contact-social">
                    <i class="fab fa-facebook-square fa-2x"></i>
                    <i class="fab fa-twitter-square fa-2x"></i>
                    <i class="fab fa-google-plus-square fa-2x"></i>
                    <i class="fab fa-pinterest-square fa-2x"></i>
             </div>
             <div class="footer-block">
                <div class="block-1">
                    <p>Lorem ipsum dolor sit amet, adipiscing percipitur id cum, an verear persius pro Lorem ipsum dolor sit amet, adipiscing percipitur id cum, an verear persius pro</p>
                    <a href="mailto:onedosiek@gmail.com">onedosiek@gmail.com</a>
                    <p>+38(000)000-00-00</p>
                </div>
                <ul class="block-2">
                    <li><router-link to="#" exact>Example</router-link></li>
                    <li><router-link to="#" exact>Shop</router-link></li>
                    <li><router-link to="#" exact>License</router-link></li>
                </ul>   
                <ul class="block-3">
                    <li><router-link to="#" exact>Contact</router-link></li>
                    <li><router-link to="#" exact>About</router-link></li>
                    <li><router-link to="#" exact>Privacy</router-link></li>
                    <li><router-link to="#" exact>Terms</router-link></li>
                </ul>   
                <ul class="block-4">
                    <li><router-link to="#" exact>Download</router-link></li>
                    <li><router-link to="#" exact>Support</router-link></li>
                    <li><router-link to="#" exact>Documents</router-link></li>
                </ul>   
                <ul class="block-5">
                    <li><router-link to="#" exact>Media</router-link></li>
                    <li><router-link to="#" exact>Blog</router-link></li>
                    <li><router-link to="#" exact>Forums</router-link></li>
                </ul>  
             </div>
         </div>
   </div>
</template>

<script>
    export default {
        data(){
            return { 
            }
        },
        methods:{  
        }
    } 
</script>

<style scoped>
.footer{
    background: #000;
    max-height: max-content;  
}
.container{
    max-width: 60%;
    padding-bottom: 60px;    
}
.contact-social{
    text-align: center;
    font-size: 20px;
    color:rgb(252,219,0);   
    padding-bottom: 120px;
}
.contact-social i{
   margin: 0 20px;
   transition: color 0.5s;
}
.contact-social i:hover{
    text-align: center;
    color:#fff;
}
.footer-block{
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr;
    grid-auto-rows: minmax(60px,auto);
    padding-bottom: 80px;
}
.block-1 a{
    padding:0 10px;
    color: #898989;
    text-decoration: none;
    transition: color 0.5s;
    font-weight: bold;
}
.block-1 *:hover{
    padding:0 10px;
    color: #fff;
    text-decoration: none;
}
.footer-block ul{
    list-style: none;
}
.footer-block li a{
    transition: color 0.4s;
    text-decoration: none;
    color: rgb(137,137,137)
}
.footer-block li a:hover{
    color: #fff;
}
.footer-block ul,.footer-block div{
    border-right: 2px solid rgba(137,137,137,0.15);   
}
.footer-block ul:hover,.footer-block div:hover{
    border-right: 2px solid rgba(137,137,137,0.3);
}
p{
    margin-bottom: 1.5rem;
    padding: 0 10px;
    color:#898989;
    transition: color 0.5s;
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
    .footer-block{
        grid-gap: 20px;
        grid-template-columns: 1.5fr 1fr 1fr;
        grid-auto-rows: minmax(100px,auto);
        padding-bottom: 80px;
    }
    .block-1{
        grid-row: 1 / span 2;
    } 
}
@media only screen and (max-width: 768px)  {
    .container{
         max-width: 90% ;
         padding-bottom: 40px;
    }  
}
@media only screen and (max-width: 703px)  {
    .container{
         max-width: 95%;      
    }    
}
@media only screen and (max-width: 576px)  {
    .footer-block{
        grid-gap: 20px;
        grid-template-columns: 2fr 2fr;
        grid-auto-rows: minmax(100px,auto);
        padding-bottom: 80px;
    }
    .block-1{
        max-width: 60%;
        grid-column: 1 / span 2;
    }
    .footer-block div{
         border-right: none;  
    }
    .footer-block div:hover{
         border-right: none;  
    }
    .contact-social{
        padding-bottom: 80px;
    }
    .contact-social i{
        margin: 0 15px;
    }   
}
@media only screen and (max-width: 414px)  {
    .container{
         max-width: 100%;   
    }
    p{
        margin-bottom: 0.75rem;
        padding: 0 10px;
    }
    .contact-social i{
        margin: 0 12px;
    }
    .footer-block{
        grid-gap: 30px 10px;
        padding-bottom: 50px;
    } 
}
</style>