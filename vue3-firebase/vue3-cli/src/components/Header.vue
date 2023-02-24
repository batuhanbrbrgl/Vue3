<template>
  <div @click="temizle">
   <button>temizle</button>
  </div>
  <br>
  <div>
    <input type="text" ref="metin">
  </div>
  
</template>

<script>
export default {
  props:['baslik'],
    data(){
      
        return{
            baslik:"Merhaba batu"
        }
    },
    methods:{
      temizle(){
        this.$refs.metin.value='';
        this.$emit('temizle')
      }
    }
}
</script>

<style scoped>
h1{
    color: aqua;
}

</style>