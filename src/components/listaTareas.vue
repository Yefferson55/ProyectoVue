<template>
    <div><h2>Lista de Tareas</h2></div><br>
    <input type="text" v-model="nuevaTarea" @keyup.enter = "addTarea"><br>
    <ul>
        <li v-for="(tarea, index) in tareas" :key="index">
            {{ tarea }}
            <button @click="borrarTarea">Borrar</button>
        </li>
    </ul>
</template>
<script setup>
import {ref} from 'vue'
const tareas = ref([])
const nuevaTarea =ref('')

const addTarea = ()=> {
    tareas.value.push(nuevaTarea.value)
    nuevaTarea.value = ''
}
const borrarTarea = (index)=>{
    tareas.value.splice(index,1)
}
</script>
<style></style>