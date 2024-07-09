const MyNameApp = {
    data(){
        return{
            name:"kauã",
            age:"13 anos"
            input_name:""
        }
    }
    methods:{
       submitForm(e){
        e.preventDefault(); 
        console.Log("this.inpput_name");

        this.name = this.input_name;

    } 
    }
}

Vue.createApp(MyNameApp).mount("#app");