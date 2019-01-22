<template>
    <div>
        <h1>{{titulo}}</h1>
        <form v-on:submit.prevent="postUsuario">
            <input type="text" v-model="email" placeholder="email" v-validate="'required|email'" name="email"><br>
            <span>{{ errors.first('email') }}</span><br>
            <input type="password" v-model="password" placeholder="password" v-validate="'required|min_value:3'" name="password"><br>
            <span>{{ errors.first('password') }}</span><br>
            <button type="submit">Iniciar Sesion</button>
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
            titulo:'Bievenido al login',
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

</style>
