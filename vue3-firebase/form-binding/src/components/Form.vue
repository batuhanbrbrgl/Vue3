<template>
  <label>Email</label>
  <input type="email" v-model="email"/>
  {{ email }}

  <select v-model="yetki">
      <option>Editör</option>
      <option>Admin</option>
</select>
<div>
    <input type="checkbox" name="" value="yönetim" v-model="istekler">
    <label for="">Yönetim</label>
</div>
<div>
    <input type="checkbox" name="" value="erişim" v-model="istekler">
    <label for="">Erişim</label>
</div>
<div>
    <input type="checkbox" name="" value="silme" v-model="istekler">
    <label for="">Silme</label>
</div>

<br>
{{ istekler }}
</template>

<script>
export default {
data(){
    return{
        email:'234234',
        yetki:'',
        anlasma:false,
        istekler:[],
    }
}
}
</script>

<style>

</style>