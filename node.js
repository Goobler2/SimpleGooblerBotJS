// BOT PACKAGE CREATED FULLY BY ERIC! THANK HIM
const node = require('gooblernode') // constantly a node! don't change this!
const gooblerOn = require('gooblernode/on');

new gooblerOn('connect', function() {
  console.log("Package is on!")
})

new gooblerOn('message', function(message) {
  console.log(f"Message sent in channel {message.channel}")
})

node("yourToken") // inits the package
