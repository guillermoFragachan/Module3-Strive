
// All requests made with the client will be authenticated


let dataArray = []

let dataArray2 = []


// fetch URL + QUERY 
fetch("https://api.pexels.com/v1/search?query=people", {
    headers: {
        Authorization: "563492ad6f917000010000019b5a12d6ac8c42e39efb9e162087db71"
    }
})
    .then(resp => {
        return resp.json()
    })
    .then(data => {
        //console.log(data.photos)
       // console.log(data.photos[0].src.medium)
        for(let i = 0; i<data.photos.length; i++){
            dataArray.push(data.photos[i])
        }
        
    })
// API key:  563492ad6f917000010000019b5a12d6ac8c42e39efb9e162087db71

fetch("https://api.pexels.com/v1/search?query=dogs", {
    headers: {
        Authorization: "563492ad6f917000010000019b5a12d6ac8c42e39efb9e162087db71"
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

    for (let i = 0; i < SVGNode.length; i++) {
        SVGNode[i].removeChild(SVGNode[i].children[0])
        let IMGNode = document.createElement('img')
        IMGNode.src = data[i].src.medium
        SVGNode[i].insertBefore(IMGNode, SVGNode[i].firstChild);
    }

}

let buttonNodeFirst = document.getElementsByClassName('btn btn-primary my-2')[0]
buttonNodeFirst.addEventListener('click', () => {return loadIMGs(dataArray)})


let buttonNodeSecond = document.getElementsByClassName('btn btn-secondary my-2')[0]
buttonNodeSecond.addEventListener('click', () => {return loadIMGs(dataArray2)})


let buttonHide = document.querySelectorAll('.btn-group > button:nth-child(2)')


function hideIMG(){
    for(let i=0; i<buttonHide.length; i++){
       
        console.log(buttonHide[i])
        buttonHide[i].innerText='Hide'
        buttonHide[i].addEventListener('click', ()=>{
            buttonHide[i].parentElement.parentElement.parentElement.parentElement.firstChild.remove()
        })

    }
}

window.onload = function(){ 
    hideIMG()
}

//changeedit to hide


//addevent listener 