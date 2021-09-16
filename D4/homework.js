let array = []

fetch("https://striveschool-api.herokuapp.com/books", {

})
    .then(resp => {
        return resp.json()
    })
    .then(data => {


        data.forEach(element => {
            let card = document.createElement('div')
            card.classList.add('col-3', 'mx-1')
            card.innerHTML = `
            <div class="card"  >
                <img class="card-img-top" src="${element.img}" alt="Card image cap">
                <div class="card-body">
                    <h6 class="card-title">${element.title}</h6>
                    <p>${element.price}</p>
                    <a href="#" class="btn btn-primary" id='${element.asin}' onclick="remove(event, 0)">Add to cart</a>
                    <a href="#" class="btn btn-secondary mt-1" onclick="remove(event, 1)">Skip</a>
                </div>
            </div>
            
            
            `
            let bodyNode = document.getElementsByClassName('row')[0]
            bodyNode.appendChild(card)
            
            
            array.push(element) 
            
        })


    })

    


    function remove(_event, _value){
        _event.target.closest('.col-3').remove()


        let card = _event.target.parentElement.children[0]

        let liNode = document.createElement('li')
        liNode.classList.add('list-group-item')
        liNode.appendChild(card)

    
        
        
        let bodyNode = document.getElementsByClassName('list-group')[_value]
        bodyNode.appendChild(liNode)

        


    }


    function addToCart(){

    }

