const message = "Hello world"
const helloDiv = document.getElementById("configurator-container")
let index = 0

// Fonction pour afficher chaque lettre avec un délai
function displayLetter() {
  if (index < message.length) {
    helloDiv.textContent += message.charAt(index)
    index++
    // Délai de 200 millisecondes entre chaque lettre
    setTimeout(displayLetter, 200)
  }
  window.IntegrationProxy.submit(message)
}

displayLetter()
