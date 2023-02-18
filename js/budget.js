document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = inputvalue('per-player')
    const playerBudget = perPlayer * 5
    console.log(playerBudget)
    const playerExpenses = document.getElementById('player-expenses')
    playerExpenses.innerText = playerBudget

})

document.getElementById('calculate-total').addEventListener('click', function () {

    const manager = inputvalue('manager')
    const coach = inputvalue('coach')

    const player = document.getElementById('player-expenses')
    const playerExpensesString = player.innerText
    const playerExpenses = parseFloat(playerExpensesString)
    const total = manager + coach + playerExpenses

    const calculation = document.getElementById('sum-total')
    calculation.innerText = total



})