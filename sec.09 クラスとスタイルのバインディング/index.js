const app = new Vue({
  el: '#app',
  data: {
    largeClass: {
      large: true,
      'bg-gray': true
    },
    dangerClass: {
      'text-danger': true
    },
    isLarge: true,
    styleObject: {
      color: 'blue',
      fontSize: '36px'
    }
  }
})