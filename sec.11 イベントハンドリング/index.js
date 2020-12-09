const app = new Vue({
  el: '#app',
  data: {
    message: '',
    time: '',
    inputText: ''
  },
  methods: {
    clickHandler($event,message){
      console.log($event)
      this.message = message
    },
    timeHandler(){
      this.time = new Date().toLocaleTimeString()
    },
    escDelete(){
      this.inputText = ''
    },
    clickAlert(){
      alert('Shift + Click!');
    }
  }
})