<template>
    <div>
        <router-link to='/dashboard'>Volver</router-link>
        <h1>{{componenteTitulo}}</h1>
        <form v-on:submit.prevent="postComentario">
            <input type="text" v-model="titulo" placeholder="titulo"><br>
            <input type="text" v-model="comentario" placeholder="comentario"><br>
            <button type="submit">Crear Comentario</button>
        </form><hr>
    </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import router from "../router";
export default {
    data(){
        return{
            componenteTitulo:'Crea un Post',
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

</style>
