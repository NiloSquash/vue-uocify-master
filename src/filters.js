// filters.js
import Vue from "vue";

// filtre per a mostrar la duració del Track en format NN:NN
Vue.filter('formatTime', function(value) {
    if (value) {
      const parts = value.split(":");
      return +parts[0] + "h " + +parts[1] + "m";
    } else {
      return "unknown"
    }
  });

  // filtre per mostrar el nombre de fans amb "," cada 3 números
  Vue.filter('NumFormat', function(value) {
    if (!value) return '0.00';
    var intPart = Number(value).toFixed(0);
    var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1, ');
    var floatPart = ".00";
    var value2Array = value.split(" . ");
    if(value2Array.length == 2) {
      floatPart = value2Array[1].toString();
      if(floatPart.length == 1) {
        return intPartFormat + "." + floatPart + '0';
      } else {
        return intPartFormat + "." + floatPart;
      }
      }
  })
