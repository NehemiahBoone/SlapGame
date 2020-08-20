let health = 100
let healthStatus = document.getElementById("health")


function slap() {
  health--
  update()
}

function update() {
  healthStatus.innerHTML = `
  ${health}
  `
}



update()