
// All requests made with the client will be authenticated


let dataArray = []

let dataArray2 = []


// fetch URL + QUERY 
fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
        Authorization: "563492ad6f9170000100000129ca9a39898c4d60b54d8276cc4d9c80"
    }
})
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        console.log(data.photos)
       // console.log(data.photos[0].src.medium)
        for(let i = 0; i<data.photos.length; i++){
            dataArray.push(data.photos[i])
        }
        
    })
// API key:  563492ad6f9170000100000129ca9a39898c4d60b54d8276cc4d9c80


fetch("https://api.pexels.com/v1/search?query=dogs", {
    headers: {
        Authorization: "563492ad6f9170000100000129ca9a39898c4d60b54d8276cc4d9c80"
    }
})
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        for(let i = 0; i<data.photos.length; i++){

            dataArray2.push(data.photos[i])
        }
        
    })

function loadIMGs(data) {
    let SVGNode = document.querySelectorAll('.card.mb-4.shadow-sm')
    let mins9Node = document.getElementsByClassName('text-muted')


    for (let i = 0; i < SVGNode.length; i++) {
        SVGNode[i].removeChild(SVGNode[i].children[0])
        let IMGNode = document.createElement('img')
        IMGNode.src = data[i].src.medium
        SVGNode[i].insertBefore(IMGNode, SVGNode[i].firstChild)
    }

    for(let i = 0; i < mins9Node.length; i++){
        mins9Node[i].innerText=data[i].id

    }

}

let buttonNodeFirst = document.getElementsByClassName('btn btn-primary my-2')[0]
buttonNodeFirst.addEventListener('click', () => {return loadIMGs(dataArray)})


let buttonNodeSecond = document.getElementsByClassName('btn btn-secondary my-2')[0]
buttonNodeSecond.addEventListener('click', () => {return loadIMGs(dataArray2)})


let buttonHide = document.querySelectorAll('.btn-group > button:nth-child(2)')





function hideIMG(){
    for(let i=0; i<buttonHide.length; i++){
       
        
        buttonHide[i].innerText='Hide'
        buttonHide[i].addEventListener('click', ()=>{
            buttonHide[i].parentElement.parentElement.parentElement.parentElement.children[0].classList.toggle('example')
        })

    }
}

function search(data){
    let searchNode = document.getElementById('searchBox').value
    let searchArray =[]

    fetch("https://api.pexels.com/v1/search?query=" + searchNode, {
    headers: {
        Authorization: "563492ad6f9170000100000129ca9a39898c4d60b54d8276cc4d9c80"
    }
})
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        for(let i = 0; i<data.photos.length; i++){
            
            searchArray.push(data.photos[i])
            
        }
        let SVGNode = document.querySelectorAll('.card.mb-4.shadow-sm')
        
        setTimeout(function() { alert(searchArray.length + `loaded imgs `); }, 200)
        
        for (let i = 0; i < searchArray.length; i++) {
            SVGNode[i].removeChild(SVGNode[i].children[0])
            let IMGNode = document.createElement('img')
            IMGNode.src = searchArray[i].src.medium
            console.log(searchArray[i].src.medium)
            SVGNode[i].insertBefore(IMGNode, SVGNode[i].firstChild)
        }
        
        
        

        
    })
    

    

    
        
    
    
}

let searchNode = document.getElementById('buttonSearch')
searchNode.addEventListener('click', search)

window.onload = function(){ 
    hideIMG()
}

//changeedit to hide


//addevent listener 