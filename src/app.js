import Vue from 'vue';

document.addEventListener("DOMContentLoaded", () => {
  new Vue({
    el: "#app",
    data: {
      exchangeRates: {},
      selectedCurrency: null,
      selectedRate: null,
      baseRate: 1,
      conversionType: ""
    },
    mounted(){
      this.getExchangeRates()
    },
    computed: {
      toEuros: function(){
        return (this.baseRate * this.selectedCurrencyRate);
      },
      fromEuros: function(){
        (this.baseRate * this.selectedCurrencyRate);
      },
      selectedCurrencyRate: function() {
        return this.exchangeRates[this.selectedCurrency]
      }
    },
    methods: {
      getExchangeRates: function(){
        fetch("https://api.exchangeratesapi.io/latest")
        .then(res => res.json())
        .then(exchangeRates => this.exchangeRates = exchangeRates.rates)
      }
    }
  }
)}
)
