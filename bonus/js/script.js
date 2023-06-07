"use strict"

const {createApp} = Vue;

createApp({
    data(){
        return{
            message: 'Hello Star Wars',
            image: "./img/la-vendetta-dei-sith.jpg",  
           
        }
    },
    
}).mount('#app');

