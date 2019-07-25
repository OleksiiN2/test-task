<template>
    <slider ref="slider" class="slider" :options="options">
        <slideritem v-for="(item,index) in sliderContent" :key="index">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-sm-10 col-xs-12">
                        <h2>{{item.title}}</h2>
                        <h5>{{item.subtitle}}</h5>
                        <p>{{item.content}}</p>
                        <div class="icons">
                            <i class="fab fa-apple fa-2x"></i>
                            <i class="fab fa-android fa-2x"></i>
                            <i class="fab fa-windows fa-2x"></i>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6 col-xs-6 slideImg">
                        <img src="../assets/ipad2.png" alt="ipad">
                    </div>
                </div>
            </div>
        </slideritem>
    </slider>
</template>

<script>
import { slider, slideritem } from 'vue-concise-slider'
import sliderContentJson from '../assets/sliderContent.json'

export default {
    components: {
        slider,
        slideritem
    },
    data(){
        return {
            sliderContent: sliderContentJson,
            //Slider configuration [obj]
            options: {
                currentPage: 0,
                autoplay:10000,
                loop:true,
                effect:'slide',
                loopedSlides:1,
                slidesToScroll:1,
                timingFunction: 'ease',
                speed: 2000
                //freeze: true 
            }
        }
    },
    methods: {
      // Listener event
     /* slide (data) {
        console.log(data)
      },
      onTap (data) {
        console.log(data)
      },
      onInit (data) {
        console.log(data)
      }*/
    } 
} 
</script>

<style scoped>
.slider{
    max-width:1924px;
    margin:0 auto;
    height:650px;
    background:#fcdb00;
}
.container{
    max-width: 50%;
}
.slider-item{
    font-size: 1rem;
    color:#000;
    text-align: left;
}
h2,h5,p{
    margin-bottom: 1.5rem;
    padding: 0 10px;
}
h2{
    font-weight: bold;  
}
.slider-container{
    white-space: normal;
}
.icons{
    font-size: 24px; 
    margin-top: 20%;  
}
.fa-apple{
    padding: 0 20px 0 10px;
    transition: color 0.5s;
}
.fa-android, .fa-windows{
    padding: 0 20px;
    transition: color 0.5s;
}
.fab:hover{
    color: rgba(255,255,255, 0.75);   
}
.slideImg img{
    object-fit: contain;
    float: right;
}
.swiper-container-horizontal /deep/ .slider-pagination-bullet{
    height: 12px;
    width: 12px;
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
    .slider{
        margin:0 auto;
        height:650px;
    } 
}
@media only screen and (max-width: 1024px)  {
    .container{
        max-width: 80% ; 
    }
    .slider{
        margin:0 auto;
        height:650px;
    } 
    .slider-item{
        font-size: 1rem;   
    }   
    .icons{
        font-size: 20px; 
        margin-top: 5%;  
    }
    h2{
        font-size: 1.5rem;
    } 
    h5{
        font-size: 1.25rem;
    }     
}
@media only screen and (max-width: 768px)  {
    .container{
        max-width: 90% ;   
    }
    .slideImg{
        display:none;
    } 
    .slider{
        margin:0 auto;
        height:500px;
    } 
}
@media only screen and (max-width: 703px)  {
    .container{
        max-width: 95%;   
        padding-top: 60px;
    }
    .slider{
        margin:0 auto;
        height:600px;
    } 
}
@media only screen and (max-width: 414px)  {
    .container{
         max-width: 100%;   
    }
    .slider{
        margin:0 auto;
        height:650px;
    }  
}
</style>