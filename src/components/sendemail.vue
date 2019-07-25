<template>
   <div class="main-container">
         <div class="container">
             <div class="title">
                <h2>{{featuresContent.title}}</h2> 
                <h5 class="subtitle">{{featuresContent.subtitle}}</h5> 
             </div>

             <div class="row email-form">
              
                          <div class="col-lg-10 col-md-10 col-sm-10 form-group email-form-error">
                               <!--  <b-form-input-->
                              <input name="Email"
                                     class="form-control email-input"
                                     id="input-email"
                                     v-model="email"
                                     type="email"
                                     placeholder="Enter your email to update"
                                     v-validate="validation">
                               <!--</b-form-input>-->
                              <span class="error">{{ errors.first('Email') }}</span>
                          </div>
                          <div class="col-lg-2 col-md-2 col-sm-2 button">
                              <b-button type="submit" @click="submit" :disabled="err" class="submit">SUBMIT</b-button>
                          </div>
                   
       </div>
      

   </div>
  </div>

  
</template>

<script>
import featuresContentJson from '../assets/featuresContent.json'
import * as emailjs from 'emailjs-com';

export default {
    data(){
        return {
            featuresContent: featuresContentJson,
            email: "",
            validation: "email"
          //  SENDGRID_API_KEY: "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"
           // show: true
        }
    },
    methods:{
        makeToast(variant,title,content) {
        //this.toastCount++
        this.$bvToast.toast(content, {
          title: title,
          autoHideDelay: 8000,
          appendToast: true,
          variant: variant,
          solid: true,
          toaster: "b-toaster-bottom-right"
        })
      },
        sendEmail(){},
        submit(evt) {
        evt.preventDefault();
        let templateParams = {
            "email": this.email,
            "name": "Oleksii Nedosiek"
        }
        this.email="";
        let serviceID = "sendgrid";
        let templateID = "template_ecuIdYho";
        let userID = "user_XJdhPVHhYgXAzRbdqXQRx";
        emailjs.send(serviceID, templateID, templateParams, userID).then((response) => {
             console.log('SUCCESS!', response.status, response.text);
             //this.email="";
             this.makeToast("success","Success!","Email successfully updated");
        },(err) => {
             console.log('FAILED...', err);
            // this.email="";
              this.makeToast("danger","Error!",err);
        });
      }
    },
    computed:{
        err(){
            if(!this.email || this.errors.first('Email')){
                return true;
           } else{
               return false;
           }
        }
    }
} 
</script>

<style scoped>
.main-container{
    background: #000;
    max-height: max-content;
   
}
.container{
    max-width: 50%;
   padding-top: 80px;
   padding-bottom: 60px;
  
    
}
.title{
    text-align: center;
    
    margin: 10px auto 80px;
    
}
.row{
    margin-bottom: 30px;
    padding: 0 30px;
    margin:0 auto;
}
.main-row{
    margin-bottom: 80px;
}
.ic{
    font-size: 24px; 
}
h2,h5,p{
    margin-bottom: 1.5rem;
    padding: 0 10px;
    color:#fff;
}
h2{
    font-weight: bold;  
    color:#fcdb00;
}
.ic:hover{
   color:rgba(255, 234, 0, 0.3);
}
.email-form{
    text-align: center;
}
.email-form-error{
    text-align: left;
}
.error{
    color: #ff8300;
    font-size: 0.875rem;  
}
.btn-secondary{
    background: #fcdb00;
    color:#000;
    font-weight: bold;
    border: none;
}
.btn-secondary:disabled{
   background: rgba(252,219,0,0.95);
    color:#000;
    font-weight: bold;
}
.btn-secondary:disabled:hover{
   background: rgba(252,219,0,0.95);
    color:#000;
    font-weight: bold;
}
.btn-secondary:hover{
    background: #fcb100;
    color:#000;
    font-weight: bold;
    border: none;
}
.submit{
    padding:7px 30px;
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
    .submit{
      padding:7px 25px;
    }
}
@media only screen and (max-width: 1024px)  {
    .container{
         max-width: 80% ; 
    }
    
    h2{
        font-size: 1.5rem;
    } 
    .subtitle{
        font-size: 1rem;
        
    }  
    .submit{
      padding:7px 15px;
    }
    
}
@media only screen and (max-width: 768px)  {
    .container{
         max-width: 90% ;
         padding-bottom: 40px;
    }  
    .title{
        text-align: center;
        margin: 10px auto 80px;
    }
    .row{
        margin-bottom: 40px;  
        padding: 0 10px;  
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
    .submit{
      padding:7px 10px;
    }
    
    
}
@media only screen and (max-width: 576px)  {
    
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
    .submit{
      padding:7px 25px;
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