let books = []

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
            <div class="card" ;">
                <img class="card-img-top" src="${element.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            
            
            `
            let bodyNode = document.getElementsByClassName('row')[0]
            bodyNode.appendChild(card)
            console.log(element)
        })


    })


