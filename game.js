let health = 100
let hits = 0

let healthStatus = document.getElementById("health")
let hitStatus = document.getElementById("hits")
let targetName = document.getElementById("name")
targetName.innerHTML = `
<h1>Scarecrow</h1>
`

function slap() {
  health--
  hits++
  update()
}

function punch() {
  health -= 5
  hits++
  update()
}

function kick() {
  health -= 10
  hits++
  update()
}

function update() {
  healthStatus.innerHTML = `
  ${health}
  `

  hitStatus.innerHTML = `
  ${hits}
  `
}

function restartGame() {
  if (health == 0) {

  }
}

update()