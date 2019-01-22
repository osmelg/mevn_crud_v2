<template>
    <div>
        <button v-on:click.prevent="cerrarSesion">Cerrar Sesion</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    methods:{
        cerrarSesion(){
            const toast = this.$swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
            });
            toast({
            type: 'success',
            title: 'Vuelva Pronto'
            })
            this.$router.push('/login');
            localStorage.removeItem('token');
        }
    }
}
</script>

<style>

</style>
