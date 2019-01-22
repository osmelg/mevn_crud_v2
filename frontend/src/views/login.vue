<template>
    <div class="grid">
        <div class="headerGrid">
            <div class="headerContainer">
            <p class="headerContainerTitle">Mevn Super Crud</p>
            <button class="headerContainerButton">Features</button>
            </div>
        </div>
        <div class="bodyGrid">
            <div class="bodyContainer">
            <form v-on:submit.prevent="postUsuario">
                <p class="bodyContainerTitle">Log In</p>
                <input type="text" class="bodyContainerInput" v-model="email" placeholder="email" v-validate="'required|email'" name="email"><br>
                <span class="errors">{{ errors.first('email') }}</span><br>
                <input type="text" class="bodyContainerInput" v-model="password" placeholder="password" v-validate="'required|min_value:3'" name="password"><br>
                <span class="errors">{{ errors.first('password') }}</span><br>
                <button type="submit" class="bodyContainerButtonSubmit"><img type='submit' src="../assets/images/login.svg" class="bodyContainerButton"></button>
            </form>
            </div>
        </div>
        <div class="footGrid">
            <div class="footContainer">
            <a class="footContainerTitle" href="www.osmel.tk">www.osmel.tk</a>
            </div>
        </div>  
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import router from "../router";

export default {
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        postUsuario(){
            this.$validator.validateAll().then(res=>{
                if(res) {
                    axios
                    .post('http://localhost:3000/login',{
                        email:this.email,
                        password:this.password
                    })
                    .then(response =>{
                        if(response.data.rs === 'usuarioLogeado'){
                            const toast = this.$swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 3000
                                });
                                toast({
                                type: 'success',
                                title: 'Sesion Iniciada'
                                })
                            localStorage.setItem('token',response.data.token);
                            this.$router.push('/dashboard');
                        }
                    })
                    .catch(error=>{
                        if(error.response.data.rs === 'emailIncorrecto'){
                            alert('emailIncorrecto');
                        }else if (error.response.data.rs === 'errorIncriptacion'){
                            alert('errorIncriptacion');
                        }else if (error.response.data.rs === 'passwordIncorrecto'){
                            alert('passwordIncorrecto');
                        }else{
                            alert(error);
                        }
                    })                    
                } else {
                    alert('Verifica los datos');
                }
            })
        }
    }
}
</script>

<style>
/* USAR HOVER DE PESTAÑAS DE FIREFOX  - COLOR DE ICONOS A9AAAB */
button{background: url(../assets/images/login.svg)}
*                                           {margin: 0; padding: 0; font-size: 10px;}
@font-face                                  {font-family: one; src: url('../assets/fonts/Oxygen-Bold.ttf');}
@font-face                                  {font-family: two; src: url('../assets/fonts/Oxygen-Light.ttf');}
body                                        {background: url('../assets/images/bg.svg') no-repeat 50% 50% fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;}
.bodyContainerButtonSubmit                  {border: none; cursor: pointer;}
.errors                                     {font-size: 2em; color: #cfcfcf;}
/* Variables */
:root{
  /* Background */
    /* --bgUno: #000; */
  /* Fonts */
    --fontUno: #000;
    --fontTwo: green;
  /* background: var(--bgUno); */
}
/* Mobile 
GRID display: grid; justify-items: center; align-items: center; FLEX justify-content align-items */
@media screen and (max-width: 768px) 
  {
    .grid                                   {height: 100vh; display: grid; grid-template-areas: "headerGrid" "bodyGrid" "footGrid"; } 
      .headerGrid                           {height: 15vh; display: grid; grid-area: headerGrid;}
        .headerContainer                      {height: 100%; display: grid; justify-items: center; align-items: center;}
          .headerContainerTitle                 {color: #ffffff; font-size: 4.6em; font-family: one;}
          .headerContainerButton                {padding: 0.5em; font-family: helvetica; font-size: 1.5em; border: none; cursor: pointer;}
      .bodyGrid                             {height: 80vh; display: grid; grid-area: bodyGrid;}
        .bodyContainer                        {height: 100%; text-align: center; display: flex; justify-content: center; align-items: center; flex-direction: column;}
          .bodyContainerTitle                   {color: #fff; font-size: 3.6em; font-family: two;}
          .bodyContainerInput                   {width:70vw; height: 3em; text-align: center; font-size: 1.1em; padding: 1em; margin-top: 1em; border: 1px solid #B1B1B1; border-radius: 20px;}
          .bodyContainerButton                  {height: 5em; text-align: center; margin-top: 1em; cursor: pointer;}
      .footGrid                             {height: 5vh; display: grid; grid-area: footGrid;}
        .footContainer                        {height: 100%; display: grid; justify-items: center; align-items: center;}
          .footContainerTitle                   {color: #ffffff; font-size: 1.5em; font-family:dos;}          
  }
/* Tablet
GRID display: grid; justify-items: center; align-items: center; FLEX justify-content align-items */
@media screen and (min-width: 768px) 
  {
    .grid                                   {height: 100vh; display: grid; grid-template-areas: "headerGrid" "bodyGrid" "footGrid"; } 
      .headerGrid                           {height: 15vh; background: var(--bgUno); display: grid; grid-area: headerGrid;}
        .headerContainer                      {height: 100%; display: grid; justify-items: center; align-items: center;}
          .headerContainerTitle                 {color: #ffffff; font-size: 4.6em; font-family: one;}
          .headerContainerButton                {padding: 0.5em; font-family: helvetica; font-size: 1.5em; border: none; cursor: pointer;}
      .bodyGrid                             {height: 80vh; display: grid; grid-area: bodyGrid;}
        .bodyContainer                        {height: 100%; text-align: center; display: flex; justify-content: center; align-items: center; flex-direction: column;}
          .bodyContainerTitle                   {color: #fff; font-size: 3.6em; font-family: two;}
          .bodyContainerInput                   {width:40vw; height: 3em; text-align: center; font-size: 1.1em; padding: 1em; margin-top: 1em; border: 1px solid #B1B1B1; border-radius: 20px;}
          .bodyContainerButton                  {height: 5em; text-align: center; margin-top: 1em; cursor: pointer;}
      .footGrid                             {height: 5vh; background: var(--bgUno); display: grid; grid-area: footGrid;}
        .footContainer                        {height: 100%; display: grid; justify-items: center; align-items: center;}
          .footContainerTitle                   {color: #ffffff; font-size: 1.5em; font-family:dos;}          
  }
/* Laptop ++ 
GRID display: grid; justify-items: center; align-items: center; FLEX justify-content align-items */
@media screen and (min-width: 1280px) 
  {
    .grid                                   {height: 100vh; display: grid; grid-template-areas: "headerGrid" "bodyGrid" "footGrid"; } 
      .headerGrid                           {height: 15vh; display: grid; grid-area: headerGrid;}
        .headerContainer                      {height: 100%; display: grid; justify-items: center; align-items: center;}
          .headerContainerTitle                 {color: #ffffff; font-size: 4.6em; font-family: one;}
      .bodyGrid                             {height: 80vh; display: grid; grid-area: bodyGrid;}
        .bodyContainer                        {height: 100%; text-align: center; display: flex; justify-content: center; align-items: center; flex-direction: column;}
          .bodyContainerTitle                   {color: #fff; font-size: 3.6em; font-family: two;}
          .bodyContainerInput                   {width:25vw; height: 3em; text-align: center; font-size: 1.1em; padding: 1em; margin-top: 1em; border: 1px solid #B1B1B1; border-radius: 20px;}
          .bodyContainerButton                  {height: 5em; text-align: center; margin-top: 1em; cursor: pointer;}
      .footGrid                             {height: 5vh; display: grid; grid-area: footGrid;}
        .footContainer                        {height: 100%; display: grid; justify-items: center; align-items: center;}
          .footContainerTitle                   {color: #ffffff; font-size: 2em; font-family:dos;}          
  }
</style>
