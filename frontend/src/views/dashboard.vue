<template>
  <div class="grid">
    <div class="headerGrid">
      <div class="headerContainer">
        <div class="headerNav">
          <p class="headerNavTitle">Welcome: {{nombreUsuario}}</p>
          <cerrarSesion></cerrarSesion>
        </div>
        <p class="headerContainerTitle">Super Mevn Crud</p>
        <p class="headerContainerSubTitle">Create a post</p>
        <router-link to='/dashboard/crearcomentario'><img type='submit' src="../assets/images/create.svg" class="bodyContainerButton"></router-link>
      </div>
    </div>
    <div class="bodyGrid">
      <div class="bodyContainer">
        <div class="bodyMainPosts">                           
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import jwt from "jsonwebtoken";
import cerrarSesion from '../components/cerrarsesion.vue';
import comentarios from '../components/comentarios.vue';

export default {
  name: 'home',
  components:{'cerrarSesion':cerrarSesion,'comentarios':comentarios},
  data(){
    return{
      titulo:'CRUD - M(mongodb) e(express) v(vuejs) n(nodejs)',
      nombreUsuario:''
    }
  },
  created(){
    const token = localStorage.getItem('token');
    const descifrado = jwt.decode(token);
    this.nombreUsuario = descifrado.nombre;
  }
}
</script>

<style scoped>
/* Generales */
  *                                           {margin: 0; padding: 0; font-size: 10px;}
  @font-face                                  {font-family: uno; src: url('../assets/fonts/Oxygen-Bold.ttf');}
  @font-face                                  {font-family: dos; src: url('../assets/fonts/Oxygen-Light.ttf');}
  body                                        {background: url('../assets/images/bg.svg') no-repeat 50% 50% fixed; -webkit-background-size: cover; -moz-background-size: cover; -o-background-size: cover; background-size: cover;}
/* Layout */
  .grid                                   {height: 100vh; display: grid; grid-template-areas: "headerGrid" "bodyGrid";} 
    .headerGrid                           {height: 36vh; display: grid; grid-area: headerGrid; border-bottom: 1px solid grey;}
      .headerContainer                      {height: 10%; display: grid; align-items: start; justify-items: center;}
        .headerNav                            {height: 7vh; width: 100%; background: none; display: grid; align-items: center; grid-template-columns: 80% 20%;}
          .headerNavTitle                       {color: #fff; font-family: dos; margin-left: 1em; font-size: 2.5em;}
          .headerContainerLogout                {height: 3em; width: 3em; margin-right: 1em; cursor: pointer; display: grid; justify-self: end;}
        .headerContainerTitle                 {font-size: 4.6em; font-family: uno; color: #fff;}
        .headerContainerSubTitle              {font-size: 3.5em; font-family: dos; margin-top: 1em; color: #fff;} 
        .headerContainerCreate                {height: 5em; width: 5em; margin-top: 1em; cursor: pointer;}
    .bodyGrid                             {height: 74vh; display: grid; grid-area: bodyGrid;}
      .bodyContainer                        {height: 100%; margin-top: 1em;  text-align: center; display: flex; justify-content: flex-start; align-items: center; flex-direction: column;}
        .bodyContainerTitle                   {font-size: 3.6em; font-family: two;}
        .bodyMainPosts                      {height: 100%; width: 100%; max-width: 768px; display: grid; justify-items: center; align-items: start;}
          .bodyContainerPost                  {width: 95%; color: white; border-radius: 1em; margin-top: 1em; margin-bottom: 1em; padding-top: 1em; padding-bottom: 1em; display: grid; justify-items: center; align-items: center;}
          .bodyContainerPost:hover              {border: .5em solid #dddbdb; transition: .5s;}
            .bodyContainerPostTitle             {font-size: 3.5em; color: #fff; font-family: uno; text-align: center;}
            .bodyContainerPostContent           {font-size: 2.5em; color: #fff; font-family: dos; margin-top: .5em; text-align: justify; padding-left: .3em; padding-right: .3em;}
            .bodyContainerPostContent::first-letter {font-size: 2.8em; color: #000000;}
            .bodyContainerPostButton            {height: 4em; width: 4em; margin-top: 1em; cursor: pointer;}
</style>
