import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      rates: {
        currency:{},
        rate:{}
      }
    },

    mounted(){
      this.getRates()
    },
    methods: {
      getRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(rates => this.rates = rates)
      },


    }
  }
)}
)
