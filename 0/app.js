const app=Vue.createApp({
    template:`
    <h2>Başlık: {{baslik}}</h2>
    <p>Batuhan: {{batu}}</p>
    <h1>{{appAdet}}</h1>
    <button v-on:click="appEkle()">Uygulama Ekle</button>
    <p @click="appEkle()">{{metin}}</p>
    <h1>{{degisken}}</h1>

    <div v-if="bGoster">Bilgiler1</div>

    <div v-show="bGoster">Bilgiler2</div>
    <button @click="degistir">
    <span v-if="bGoster">Gizle</span>
    <span v-if="!bGoster">Göster</span>
    </button>
    <ul>
    <li v-for="sayi in sayilar">{{sayi}}</li>
    </ul>

    `,

    data(){
        return{
            baslik:`Vue3 ile web sayfalari`,
            batu:`Tam isim`,
            appAdet:1,
            metin:`Metin eklemek için tıklayınız.`,
            degisken:`Burayı değiştir`,
            bGoster:false,
            sayilar:[5,262,47,559,65],
            


        }
    },
    methods:{
        appEkle(){
            this.appAdet++;
            this.metin=`Şu an ${this.appAdet} tane uygulama var`
            this.degisken=`Burayı degistirdin`
        },
        degistir(){
            this.bGoster=!this.bGoster

        }
    }
});

app.mount(`#uygulama`);