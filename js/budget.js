document.getElementById('calculate-btn').addEventListener('click', function () {
    const perPlayer = findInputvalue('per-player')
    if (isNaN(perPlayer) || perPlayer < 0) {
        alert('Please Input Vaild Number!!!')
        return
    }
    const playerBudget = perPlayer * 5

    const playerExpenses = document.getElementById('player-expenses')
    playerExpenses.innerText = playerBudget

})

document.getElementById('calculate-total').addEventListener('click', function () {

    const manager = findInputvalue('manager')
    if (isNaN(manager) || manager < 0) {
        alert('Please Input Vaild Number!!!')
        return
    }

    const coach = findInputvalue('coach')

    if (isNaN(coach) || coach < 0) {
        alert('Please Input Vaild Number!!!')
        return
    }

    const player = document.getElementById('player-expenses')
    const playerExpensesString = player.innerText
    const playerExpenses = parseFloat(playerExpensesString)
    const total = manager + coach + playerExpenses

    const calculation = document.getElementById('sum-total')
    calculation.innerText = total



})