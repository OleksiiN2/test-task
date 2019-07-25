<template>
    <div class="container">
        <div class="title">
            <h2>{{featuresContent.title}}</h2> 
            <h5 class="subtitle">{{featuresContent.subtitle}}</h5> 
        </div>
        <div class="row main-row">
            <div v-for="(item,index) in featuresContent.features" :key="index"  class="col-lg-4 col-md-6 col-sm-12 col-xs-12 main-col">
                <div class="row second-row">
                    <div class="col-lg-3 col-md-3 col-sm-4 ic">
                        <span :class="item.fimg"></span>
                    </div>
                    <div class="col-lg-9 col-md-9 col-sm-6 content">
                        <h5 enter-active-class="toasty">{{item.ftitle}}</h5> 
                        <p>{{item.fcontent}}</p> 
                    </div>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
    import featuresContentJson from '../assets/featuresContent.json'

    export default {
        data(){
            return {
                featuresContent: featuresContentJson
            }
        }   
    } 
</script>

<style scoped>

.container{
    max-width: 50%;
    max-height: max-content;
}
.title{
    text-align: center;
    margin: 80px auto;
}
.row{
    margin-bottom: 30px;
}
.main-row{
    margin-bottom: 80px;
}
.ic{
    font-size: 24px; 
    transition: color 0.3s;
}
h2,h5,p{
    margin-bottom: 1.5rem;
    padding: 0 10px;
}
h2{
    font-weight: bold;  
}
.ic:hover{
   color:rgba(255, 234, 0, 0.3);
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
        max-width: 80%; 
    }
    h2{
        font-size: 1.5rem;
    } 
    .subtitle{
        font-size: 1rem;
    }    
}
@media only screen and (max-width: 768px)  {
    .container{
        max-width: 90% ;
    }  
    .title{
        text-align: center;
        margin: 10px auto 80px;
    }
    .main-row{
        margin-bottom: 40px;
        width:100%;
        margin: 0 auto;    
    }
    .ic{
        font-size: 20px;
    }
    .ic span{
          float:right;
    }   
}
@media only screen and (max-width: 703px)  {
    .container{
        max-width: 95%;   
        padding-top: 60px;
    }
    .row{
        margin-bottom: 40px;      
    }
    .main-col{
        max-width:100%;
        margin: 0 auto;
    }    
    h5{
        font-size: 1.125rem;
    }
    p{
        font-size: 0.875rem;
    }
    .ic{
        font-size: 18px; 
        padding-top:6px;
    }   
}
@media only screen and (max-width: 576px)  {
    .second-row{
        max-width: 100%;
        margin: 0 auto;
    }
    .ic{
        width:30%;   
    }
    .content{
        width:60%;   
    }
    h5{
        font-size: 1.125rem;
    }
    p{
        font-size: 0.875rem;
    }   
}
@media only screen and (max-width: 414px)  {
    .container{
         max-width: 100%;   
    }
    .row{
        margin-bottom: 40px;     
    }
    h5{
        font-size: 1rem;
    }
    p{
        font-size: 0.75rem;
    }
    .ic{
        width:30%;   
    }
    .content{
        width:60%;  
    }
    .content p, .content h5{
         margin-left: -20px;
    }
    h5,p{
        margin-bottom: 0.75rem;
        padding: 0 10px;
    }    
}
</style>