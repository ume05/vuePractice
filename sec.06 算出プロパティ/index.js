const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
    basePrice: 100
  },
  computed: {
    reversedMessage() {
      return this.message.split('').reverse().join('')
    },
    taxIncludedPrice: {
      get() {
        return parseInt(this.basePrice * 1.10)
      },
      set(taxIncludedPrice) {
        this.basePrice = Math.ceil(taxIncludedPrice / 1.10)
      }
    },
    computedNumber() {
      console.log('computed')
      return Math.random()
    }
  },
  methods: {
    reversedMessageMethod(){
      return this.message.split('').reverse().join('')
    },
    methodsNumber(){
      console.log('methods!')
      return Math.random()
    }
  }
})