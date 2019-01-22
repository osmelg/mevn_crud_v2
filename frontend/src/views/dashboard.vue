<template>
  <div class="home">
    <h3>{{titulo}}</h3>
    <h3>{{nombreUsuario}}</h3>
    <router-link to='/dashboard/crearcomentario'>Crear</router-link>
    <cerrarSesion></cerrarSesion><hr>
    <comentarios></comentarios>
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
    this.nombreUsuario = `Bienvenido ${descifrado.nombre}`;
  }
}
</script>

<style scoped>
/* *               {margin: 0; padding: 0; font-size: 10px;} */
.home               {text-align: center; font-family: 'Helvetica';}
.comentarios        {background: grey; margin-bottom: 2em; margin-top: 2em; width: 50%;}
</style>
