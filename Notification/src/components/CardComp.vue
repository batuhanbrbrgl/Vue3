<script setup>
const props=defineProps(["title","Paragraph"])

</script>
<template>
   <div class="h-screen items-center justify-center flex flex-col card">
        <div class="bg-blue rounded-lg shadow-md text-center justify-center p-6">
            <h2 class="text-lg font-semibold mb-4 mx-auto">{{props.title}}</h2>
            <p class="text-gray-600">{{props.Paragraph}}</p>
            <button class="bg-slate-800 p-4 rounded-lg hover:bg-slate-200" @click="clickHandler">Button</button>
          </div>
   </div>
      
</template>



<style>

</style>