<template>
  <h1>Personeller</h1>
  <div v-for="personel in personeller" :key="personel.id">
    <p>{{personel.ad}}</p>
  </div>
  
</template>

<script>
export default {
    data(){
        return{
            personeller:[
                {id:1,ad: Luffy, gorev:kaptan},
                {id:2,ad: Zoro, gorev:Yardımcı},
                {id:3,ad: Sanji, gorev:Aşcı},

            ]
        }
    }
}
</script>

<style>

</style>