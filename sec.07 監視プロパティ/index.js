const app = new Vue({
  el: '#app',
  data: {
    km: 0,
    m: 0,
    mm: 0,
    firstNameCo: '',
    lastNameCo: '',
    firstNameWa: '',
    lastNameWa: '',
    colors:[
      {name: 'Red'},
      {name: 'Green'},
      {name: 'Blue'}
    ]
  },
  watch: {
    km(value) {
      // console.log(value)
      this.km = value
      this.m = value * 1000
      this.mm = value * 1000000
    },
    m(value) {
      // console.log(value)
      this.km = value / 1000
      this.m = value
      this.mm = value * 1000
    },
    mm(value) {
      // console.log(value)
      this.km = value / 1000000
      this.m = value / 1000
      this.mm = value
    },
    firstNameWa(value) {
      this.firstNameWa = value
    },
    lastNameWa(value) {
      this.lastNameWa = value
    },
    colors: {
      handler(newValue, oldValue) {
        console.log('Update!')
        console.log('new: %s, oldValue: %s', JSON.stringify(newValue, null, '\t'),JSON.stringify(oldValue, null, '\t') )
      },
      deep: true,
      immediate: false
    }
  },
  computed: {
    computedName() {
      return `${this.firstNameCo} ${this.lastNameCo}`
    }
  }
})