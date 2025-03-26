<template>
  <p>{{ contador }}</p><br>
  <button @click="incrementar">Incrementar</button><br>
  <button @click="decrementar">Decrementar</button><br>


</template>

<script setup>
import {ref} from 'vue'
const contador = ref(0)
const incrementar = () =>{
  contador.value++
}
const decrementar = () =>{
  contador.value--
}
</script>

<style scoped>
p{
  color: red;
}

</style>
