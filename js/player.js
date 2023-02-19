



function addPlayerName(playerId, btnId) {
    const olList = document.querySelector('#ol-list')
    if (olList.childElementCount > 4) {
        alert("You can't select more than five")
        return
    }



    const nameId = document.getElementById(playerId)
    const nameEden = nameId.innerText
    const newList = document.createElement('li')
    newList.innerText = nameEden
    olList.appendChild(newList)

    const buttonId = document.getElementById(btnId)
    buttonId.disabled = true;
    if (buttonId.disabled = true) {
        buttonId.style.color = 'black'
        buttonId.style.backgroundColor = 'white'

    }



}