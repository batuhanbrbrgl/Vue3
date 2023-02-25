<template>
  <div class="yapilacak" :class="{yapildi:yapilacak.yapildi}">
    <div class="baslik" >
        <h3 @click="detayac">{{yapilacak.baslik}}</h3>
        <div class="icon">
            <span class="material-symbols-outlined">
                edit
                </span>
            <span class="material-symbols-outlined" @click="toggle">
                done_outline
                </span>
                <span class="material-symbols-outlined" @click="yapilacakSil">
                    delete
                    </span>
        </div>
    </div>
    <div class="detay" v-if="detayGoster">
        <p>{{yapilacak.icerik}}</p>
    </div>

  </div>
</template>

<script>
export default {
props:['yapilacak'],
data(){
    return{
        detayGoster:false,
        uri:'http://localhost:3000/yapilacaklar/'+this.yapilacak.id
        
    }

},
methods:{
    detayac(){
      this.detayGoster=!this.detayGoster
    },
    yapilacakSil(){
        fetch(this.uri,{method:'DELETE'})
            .then(()=>this.$emit('sil',this.yapilacak.id))
            .catch((err)=>console.log(err))

    },
    toggle(){
        fetch(this.uri,{
            method:'PATCH', 
            headers:{'Content-type':'application/json',},
            body:JSON.stringify({yapildi:!this.yapilacak.yapildi})
        }).then(()=>{this.$emit('yapildi',this.yapilacak.id)})
        .catch((err)=>console.log(err))
    }

}
}
</script>

<style>
.yapilacak{
    margin:20px auto;
    background-color: #4b4b4b;
    padding: 10px 20px;
    border-radius: 15px;
    border:3px solid #b33939;
    color:#f7f1e3;
}

.yapilacak:hover{
    box-shadow: 8px 10px 10px rgba(2,2,2,0.3);
}
h3{
    cursor: pointer;
}
.baslik{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.material-symbols-outlined{
    font-size: 25px;
    margin-left: 15px;
    color: #b33939;
    cursor: pointer;
}
.material-symbols-outlined:hover{
    color: #272626;
}
.yapilacak.yapildi{
    border:3px solid #218c74
}
.yapilacak.yapildi .tick{
    color: #218c74;
}
</style>