<template>
    <div>
      <p>{{comentariosError}}</p>
      <div class="comentarios" v-for="comentario of comentarios" :key="comentario._id">
        <h3>{{comentario.titulo}}</h3>
        <h4>{{comentario.comentario}}</h4>
        <router-link :to="{name:'comentario',params:{id:comentario._id}}">Actualizar</router-link><br>
      </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data(){
        return{
            comentarios:[],
            comentariosError:''
        }
    },
    created(){
        this.getComentarios();
    },
    methods:{
        getComentarios(){
        axios
        .get('http://localhost:3000/dashboard',{
                headers: {
                    Authorization: 'Bearer '+ localStorage.getItem('token')
                },
            })     
        .then(response =>{
            this.comentarios = response.data;
        })
        .catch(error =>{
            if(error.response.data.rs === 'tokenExpired'){
            alert('tokenExpired');
            this.$router.push('/login');
            localStorage.removeItem('token');
            }else if (error.response.data.rs === 'getComentariosError'){
            this.comentariosError = 'getComentariosError';
            }
        })
        }
    }
}
</script>

<style>

</style>
