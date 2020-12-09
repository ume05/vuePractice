const app = new Vue({
  el: '#app',
  data: {
    keyword: '',
    items: null,
    message: ''
  },
  watch: {
    keyword(newKeyword, oldKeyword) {
      // console.log(newKeyword)
      this.message = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created(){
    // this.keyword = 'JavaScript'
    // this.getAnswer()
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 1000)
  },
  methods: {
    getAnswer(){
      if(this.keyword === '') {
        this.items = null
        return
      }
      this.message="Loading..."
      let vm = this
      let params = { page: 1, per_page: 20, query: this.keyword}
      axios.get('https://qiita.com/api/v2/items',{params})
      .then(function(response){
        console.log(response)
        vm.items = response.data
      })
      .catch(function(error){
        vm.message = 'Error!' + error
      })
      .finally(function(){
        vm.message = ""
      })
    }
  }
})