const url = 'https://hangry-db.herokuapp.com/restaurant_list/'
const sendUrl = 'https://hangry-db.herokuapp.com/restaurant_list/'
const restaurantList = []
let randomItem = 0
let clickedRestaurant = 0


fetch(url)
  .then(response => response.json())
  .then(myJson => {
    restaurantList.push(myJson)
  })


  function workingButton() {
    let findDinner = document.querySelector('button')
    findDinner.addEventListener('click', pickOne)
  }

  
  function pickOne() {
    randomItem = restaurantList[0].restaurants[Math.floor(Math.random() * restaurantList[0].restaurants.length)] 
    getResaturant(randomItem)
    console.log('Click', randomItem)
  }
  

  workingButton()


  function getResaturant() {
    let restName = document.querySelector('h2')
    restName.textContent = randomItem.Restaurant
    let restImg = document.querySelector('img')
    restImg.src = randomItem.Image
    let restHour = document.querySelector('h3')
    restHour.textContent = randomItem.Hours
    let restLink = document.querySelector('a')
    restLink.href = randomItem.Url
    let delButt = document.getElementsByClassName('delete')[0]
    delButt.id = randomItem.id
    delButt.addEventListener("click", openModal)
    for (let i = 0; i < restaurantList.length; i++) {
    }
  }


  getResaturant()


let modal = document.getElementById('myModal')
let span = document.getElementsByClassName("close")[0]
let btn = document.getElementById('confirmation')



  function openModal(event){
    modal.style.display = "block"
    clickedRestaurant = event.target.id
  }


  span.onclick = function() {
    modal.style.display = "none";
}
btn.onclick = function() {
  deleteFunction(clickedRestaurant)
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}


function deleteFunction(id){
  fetch(`${url}${id}`,{
  method: 'DELETE'

  }
  )}


  function toggler(button) {
    let butt = document.getElementById("button2").addEventListener("click", logging)
  }


  toggler()
  

  function logging() {
    if (restPick.hidden = false) {
      restPick.hidden = true
    }
    if (restPick.hidden = true) {
      postRest.hidden = false
    } else {
      postRest.hidden = true
    }
  }


  const form = document.querySelector('form')


form.addEventListener('submit', formSubmitted)
form.addEventListener('submit', closeForm)


function closeForm(){
  if (postRest.hidden = false) {
    postRest.hidden = true
  }
  if (postRest.hidden = true) {
    restPick.hidden = false
  } else {
    restPick.hidden = true
  }
}


  function formSubmitted() {
    event.preventDefault()
    const formData = new FormData(form)
    const newRestaurant = formData.get('name')
    const newHours = formData.get('hours')
    const newMenu = formData.get('url')
    const newImage = formData.get('logo')
    const dataSend = {
        Restaurant: newRestaurant,
        Hours: newHours,
        Url:  newMenu,
        Image: newImage
      }


    addRestaurant(dataSend)
  }
  

  function addRestaurant(data) {
    fetch(sendUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
    .catch(console.error)
  }