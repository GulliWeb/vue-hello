const { createApp } = Vue

createApp({
    data(){ 
        return {
            message: 'Hello world',
           
        }
    }
}).mount('#app');

console.log(Vue);