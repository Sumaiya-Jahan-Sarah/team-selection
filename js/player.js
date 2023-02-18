// document.getElementById('select-btn').addEventListener('click', function (playerId) {
//     const olList = document.getElementById('ol-list')
//     const nameId = document.getElementById(playerId)
//     const nameEden = nameId.innerText
//     const newList = document.createElement('li')
//     newList.innerText = nameEden
//     olList.appendChild(newList)

// })


// document.getElementById('select-btn').addEventListener('click', function () {

//     const olList = document.getElementById('ol-list')
//     // olList.target.parentNode.removeChild(olList.target)
//     // console.log(olList.target)
//     console.log(olList)

// })



function addPlayerName(playerId,) {
    const olList = document.getElementById('ol-list')
    const nameId = document.getElementById(playerId)
    const nameEden = nameId.innerText
    const newList = document.createElement('li')
    newList.innerText = nameEden
    olList.appendChild(newList)





}