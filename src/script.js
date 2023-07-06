var alldata = [
  "pen" , "pineapple" , "apple" , "pen"
];

var vm = new Vue({
  el: "#app",
  data: {
    fruits: alldata,
    status: ""
  },
  methods: {
    remove: function (id , fname) {
      this.fruits.splice(id,1);
      this.status = "第" + (id+1) + "項" + fname + "已經被移除了" ; 
    },
    add: function (data) {
      this.fruits.push(data);
      this.status = "我剛剛加入了" + data;
    }
  },
  computed: {
    totals: function(){
    var total={pen: 0,pineapple: 0,apple: 0};
      for(var i=0 ; i<this.fruits.length ; i++){
        total[this.fruits[i]]+=1;
      }
      return total;
    }
  }
});