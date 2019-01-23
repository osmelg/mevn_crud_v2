<template>
    <div class="grid">
    <div class="headerGrid">
        <div class="headerContainer">
        <div class="headerNav">
            <router-link to='/dashboard' class="headerNavLeft">Volver</router-link>
            <p class="headerNavCenter">Super Mevn Crud</p>
            <p class="headerNavRight">Welcome: Osmel.</p>
            <!-- <img class="headerContainerLogout" src="logout.svg" alt=""> -->
        </div>
        <p class="headerContainerSubTitle">Create a post</p>
        <img class="headerContainerCreate" src="create.svg" alt="">
        </div>
    </div>
    <!-- <div class="bodyGrid">
        <div class="bodyContainer">
        <div class="bodyMainPosts">
            <div class="bodyContainerPost">
                <form v-on:submit.prevent="postComentario">
                    <input type="text" v-model="titulo" placeholder="titulo" class="bodyContainerPostTitle"><br>
                    <input type="text" v-model="comentario" placeholder="comentario" class="bodyContainerPostContent"><br>
                    <button type="submit" v-on:click.prevent="cerrarSesion" class="bodyContainerButtonSubmit"><img type='submit' src="../assets/images/create.svg" class="bodyContainerButton"></button>
                </form>
            </div>                             
        </div>
        </div>
    </div> -->
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import router from "../router";
export default {
    data(){
        return{
            titulo:'',
            comentario:''
        }
    },
    methods:{
        postComentario(){
            axios
            .post('http://localhost:3000/dashboard/crearcomentario',{
                titulo:this.titulo,
                comentario:this.comentario
            })
            .then(response =>{
                if(response.data.rs === 'comentarioCreado'){
                    this.$router.push('/dashboard');
                }
            })
            .catch(error=>{
                if(error.response.data.rs === 'errorCrearComentario'){
                    alert('errorCrearComentario');
                }else if(error.response.data.rs === 'tokenExpired'){
                    this.$router.push('/login');
                    localStorage.removeItem('token');
                    alert('tokenExpired');            
                }
            })
        }
    }
}
</script>

<style>
/* General */
    *                                           {margin: 0; padding: 0; font-size: 10px;}
    @font-face                                  {font-family: uno; src: url('../assets/fonts/Oxygen-Bold.ttf');}
    @font-face                                  {font-family: dos; src: url('../assets/fonts/Oxygen-Light.ttf');}
    body                                        {background: url('../assets/images/bg.svg') no-repeat 50% 50% fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;}
/* Layout */
    .grid                                       {height: 100vh; display: grid; grid-template-areas: "headerGrid" "bodyGrid";} 
    .headerGrid                                 {height: 36vh; display: grid; grid-area: headerGrid; border-bottom: 1px solid grey;}
        .headerContainer                        {height: 10%; display: grid; align-items: start; justify-items: center;}
        .headerNav                              {height: 7vh; width: 100%; background: none; display: grid; align-items: center; grid-template-columns: 20% 60% 20%;}
            .headerNavLeft{display: grid; justify-self: start;}
            .headerNavCenter{font-size: 4.6em; font-family: uno; color: #fff; display: grid; justify-self: center;}
            .headerNavRight{height: 3em; width: 3em; margin-right: 1em; cursor: pointer; display: grid; justify-self: end;}
            /* .headerNavTitle                     {color: #fff; font-family: dos; margin-left: 1em; font-size: 2.5em; background: gold;} */
            /* .headerContainerLogout              {height: 3em; width: 3em; margin-right: 1em; cursor: pointer; display: grid; justify-self: end;} */
        .headerContainerTitle                   {font-size: 4.6em; font-family: uno; color: #fff;}
        .headerContainerSubTitle                {font-size: 3.5em; font-family: dos; color: #fff;} 
        .headerContainerCreate                  {height: 5em; width: 5em; margin-top: 1em; cursor: pointer;}
    .bodyGrid                                   {height: 74vh; display: grid; grid-area: bodyGrid;}
        .bodyContainer                          {height: 100%; margin-top: 1em;  text-align: center; display: flex; justify-content: flex-start; align-items: center; flex-direction: column;}
        .bodyContainerTitle                     {font-size: 3.6em; font-family: two;}
        .bodyMainPosts                          {height: 100%; width: 100%; max-width: 768px; display: grid; justify-items: center; align-items: start;}
            .bodyContainerPost                  {width: 95%; border: .5em solid #dddbdb; transition: .5s; color: white; border-radius: 1em; margin-top: 1em; margin-bottom: 1em; padding-top: 1em; padding-bottom: 1em; display: grid; justify-items: center; align-items: center;}
            /* .bodyContainerPost:hover              {} */
            .bodyContainerPostTitle             {font-size: 3.5em; width: 90%; background: #ebebeb2c; color: #fff; font-family: uno; text-align: center; }
            .bodyContainerPostContent           {font-size: 2.5em; width: 90%; background: #ebebeb2c; color: #fff; font-family: dos; margin-top: .5em; text-align: center;}
            .bodyContainerPostButton            {height: 4em; width: 4em; margin-top: 1em; margin-right: 1em; cursor: pointer;}
            .bodyContainerPostActions           {display: flex;}
</style>
