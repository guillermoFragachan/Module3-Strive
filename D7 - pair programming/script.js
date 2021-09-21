


let array = []
const getData = async () =>{
    let response = await fetch('https://jsonplaceholder.typicode.com/users')
    let data = await response.json()

 
    return data


}


let buttonName = document.getElementById('nameFilter')
buttonName.addEventListener('click', ()=>{
    filteringFunc()
})

let buttonUser = document.getElementById('usernameFilter')
buttonUser.addEventListener('click', ()=>{
    filteringFunc(1)
})

let buttonEmail = document.getElementById('emailFilter')
buttonEmail.addEventListener('click', ()=>{
    filteringFunc(0)
})



function cleanRow(){
    let rowNode = document.getElementsByClassName('row')[0]
    rowNode.innerHTML=''

}


function createCards(_element, _value){
    let rowNode = document.getElementsByClassName('row')[0]
    let card = document.createElement('div')
    card.classList.add('col-4')
    if(_value === 0){
        card.innerHTML=`
    <div class="container mt-5">
    <div class="row">
        <div class="card" ">
            <div class="card-body">
              <h5 class="card-title">${_element.email}</h5>
            </div>
          
          </div>
    </div>
    </div>
    
    
    
    `

    }else if(_value === 1) {
        card.innerHTML=`
    <div class="container mt-5">
    <div class="row">
        <div class="card" ">
            <div class="card-body">
              <h5 class="card-title">${_element.username}</h5>
            </div>
          
          </div>
    </div>
    </div>
    
    
    
    `
        
    } else {
        card.innerHTML=`
    <div class="container mt-5">
    <div class="row">
        <div class="card" ">
            <div class="card-body">
              <h5 class="card-title">${_element.name}</h5>
            </div>
          
          </div>
    </div>
    </div>
    
    
    
    `
        
    }

    rowNode.appendChild(card)
    

}

function display(){
    cleanRow()
    getData().then((data)=> {
        
        data.forEach(element => {
            createCards(element)
            
        })
    
        
    
    }
    )
}



function filteringFunc(_value){
    cleanRow()
    getData().then((data)=> {

        data.forEach(element =>{
            createCards(element, _value)
        })
        
       
    
        
    
    }
    )

}

let inputNode = document.getElementById('input')
inputNode.addEventListener('keydown', ()  =>{
    console.log(inputNode.value)
})


window.onload = () => {

    





}




