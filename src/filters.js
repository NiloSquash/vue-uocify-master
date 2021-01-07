// filters.js
import Vue from "vue";

Vue.filter('formatTime', function(value) {
    if (value) {
      const parts = value.split(":");
      return +parts[0] + "h " + +parts[1] + "m";
    } else {
      return "unknown"
    }
  });