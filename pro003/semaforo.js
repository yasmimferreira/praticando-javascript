const img = document.getElementsById('img')
const buttons = document.getElementsById('buttons')

const trafficLight = ( event ) => {
    console.log (event) 
}

buttons.addEventListener('click', trafficLight)
