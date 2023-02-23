<template>
  <!-- <h3>{{baslik}}</h3>
  <input type="text" ref="isim">
  <input type="text" ref="parola">
  <button @click="handClick">Tıkla</button>
  <br/> -->
  <Header/>
  <h1>CLI ile Proje oluşturma</h1>
</template>

<script>

import Header from './components/Header';


export default {
  name: 'App',
  components:{
    Header
  },

  data(){
    return{
      baslik:'Merhaba Vue CLI',
      sonuc:''
    }
  },
  methods:{
    handClick(){
      console.log(this.$refs.isim.value)
    }
  }
}
 
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
