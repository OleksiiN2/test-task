<template>
    <div class="email-container">
        <div class="container">
            <div class="title">
                <h2>{{featuresContent.title}}</h2> 
                <h5 class="subtitle">{{featuresContent.subtitle}}</h5> 
            </div>

            <div class="row email-form">
                <div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 form-group email-form-error">
                    <input name="Email"
                        class="form-control email-input"
                        id="input-email"
                        v-model="email"
                        type="email"
                        placeholder="Enter your email to update"
                        v-validate="validation">
                    <span class="error">{{ errors.first('Email') }}</span>
                </div>
                <div class="col-lg-2 col-md-2 col-sm-2 col-xs-2 button">
                    <button type="submit" @click="submit" :disabled="err" class="submit">SUBMIT</button>
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
            }
        },
        methods:{
            makeToast(variant,title,content) {
                    this.$bvToast.toast(content, {
                        title: title,
                        autoHideDelay: 8000,
                        appendToast: true,
                        variant: variant,
                        solid: true,
                        toaster: "b-toaster-bottom-right"
                    })
            },
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
                    //console.log('SUCCESS!', response.status, response.text);
                    this.makeToast("success","Success!","Email successfully updated");
                },(err) => {
                    //console.log('FAILED...', err);
                    this.makeToast("danger","Error!",err);
                });
            }
        },
        computed:{
            err(){
                if(!this.email || this.errors.first('Email')){
                    return true;
                } else {
                return false;
                }
            }
        }
    } 
</script>

<style scoped>
.email-container{
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
h2,h5{
    margin-bottom: 1.5rem;
    padding: 0 10px;
    color:#898989;
}
h2{
    font-weight: bold;  
    color:#fcdb00;
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
.submit{
    background: #fcdb00;
    color:#000;
    font-weight: bold;
    border-radius: 0.25rem;
    border: none;   
    padding: 7px 30px; 
}
.submit:disabled{
   background: rgba(252,219,0,0.75);  
}
.form-control:focus{
    border-color:#000;
    box-shadow: none;
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
        padding: 7px 25px;
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
        padding: 7px 15px;
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
    .submit{
        padding: 7px 10px;
    }    
}
@media only screen and (max-width: 576px)  {
    h5{
        font-size: 1.125rem;
    }
    .submit{
        padding: 7px 25px;
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
        margin-bottom: 0.75rem;
        padding: 0 10px;
        font-size: 1rem;
    } 
}

</style>