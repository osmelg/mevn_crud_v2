<template>
  <div>
    <router-link to='/dashboard'>Volver</router-link>
      <p>{{comentarioError}}</p><hr>
      <form v-on:submit.prevent="putComentario">
        <input type="text" v-model="comentario.titulo"><br>
        <input type="text" v-model="comentario.comentario"><br>
        <a href="" v-on:click.prevent="deletecomentario(comentario._id)">Eliminar</a>
        <button>Actualizar</button>
      </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import router from "../router";
export default {
  data(){
    return{
      comentario:{},
      comentarioError:''
    }
  },
  created(){
    this.getcomentario();
  },
  methods:{
    getcomentario(){
      axios
      .get('http://localhost:3000/dashboard/comentario/'+this.$route.params.id)
      .then(response =>{
        this.comentario = response.data;
      })
      .catch(error=>{
        if(error.response.data.rs === 'getComentarioError'){
          this.comentarioError = 'getComentarioError';
        }        
      })
    },
    putComentario(){
      axios
      .put('http://localhost:3000/dashboard/comentario/'+this.$route.params.id,this.comentario)
      .then(response=>{
        if(response.data.rs === 'comentarioActualizado'){
          this.$router.push('/dashboard');
        }
      })
      .catch(error=>{
        if(error.response.data.rs === 'putComentarioActualizadoError'){
          alert('putComentarioActualizadoError');
        }
      })
    },
    deletecomentario(id) {
      axios
        .delete("http://localhost:3000/dashboard/comentario/"+id)
        .then(response => {
          if (response.data.rs === "comentarioEliminado") {
            this.$router.push('/dashboard');
          }
        })
        .catch(error=>{
          if(error.response.data.rs === 'comentarioEliminadoError'){
            this.comentariosError = 'comentarioEliminadoError';
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
  .comentarios       {background: grey; margin-bottom: 2em; margin-top: 2em; width: 50%;}
</style>

