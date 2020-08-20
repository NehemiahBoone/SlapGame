let health = 100
let hits = 0

let winStatus = document.getElementById("gameWon")
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
  if (health <= 0) {
    health = 0
    winStatus.hidden = false

  }

  healthStatus.innerHTML = `
  ${health}
  `

  hitStatus.innerHTML = `
  ${hits}
  `
}

function restartGame() {
  hits = 0
  health = 100
  winStatus.hidden = true

  update()
}

update()