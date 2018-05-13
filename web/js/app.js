Vue.config.devtools = true;

var app = new Vue({
    el: '#app',
    data: {
        message: 'a'
    },
    methods:{
        getHash()
        {
            axios.get("/github/VueTesting/web/getHash.php",{
                params:{
                    str:this.message
                }
            }).then(res=>{
                this.message = res.data;
            }).catch(err=>{
                this.message = res.data;
            });
        }
    }
});
