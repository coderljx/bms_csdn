<template>

  <div>
    login
  </div>

</template>

<script setup>

let ws = new WebSocket("ws://localhost:19999/hello");

ws.onopen = function (rs) {

  var userMedia = window.navigator.mediaDevices.getUserMedia({ audio : true,video : true });
  userMedia.then(data => {
    console.log(data)
  })


}

</script>

<style scoped>

</style>