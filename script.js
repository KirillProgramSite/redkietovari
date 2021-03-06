//Получение БД
async function getData(){
    let dataProduct = await fetch('productServer.json');
    let contentData = await dataProduct.json();

    let list = document.querySelector('.product__row');


    let key;

    //Вывод товара
    for(key in contentData) {
        //Если есть скидка
        if(contentData[key].sale){
            list.innerHTML += `
            <div class="product__card">
                <div class="product__card-img"><img src="${contentData[key].img}" alt=""></div>
                <div class="product__card-content">
                <div class="product__card-info">
                    <h1>${contentData[key].name}</h1>
                    <p>${contentData[key].des}</p>
                </div>
                <div class="product__card-price">
                    <p class="sale">${contentData[key].sale}</p>
                    <strong>${contentData[key].price}</strong>
                </div>
            </div>
            <div class="product__card-link">
                <a href="" class="open__modal">Поподробней</a>
            </div>
        </div>
    `
    //Если нет скидки
        } else{
            list.innerHTML += `
            <div class="product__card">
                <div class="product__card-img"><img src="${contentData[key].img}" alt=""></div>
                <div class="product__card-content">
                <div class="product__card-info">
                    <h1>${contentData[key].name}</h1>
                    <p>${contentData[key].des}</p>
                </div>
                <div class="product__card-price">
                    <strong>${contentData[key].price}</strong>
                </div>
            </div>
            <div class="product__card-link">
                <a href="" class="open__modal">Поподробней</a>
            </div>
        </div> 
    `
        }

    //Вывод модального окна
    let modal = document.querySelector('.modal'),
        linkOpenModal = document.querySelectorAll('.open__modal'),
        closeBtn = document.querySelector('.modal__close');

        linkOpenModal.forEach(element => {
            element.addEventListener('click', function(event){
                event.preventDefault();
                modal.style.display = "block";
            });
        });

        closeBtn.addEventListener("click", () =>{
            modal.style.display = "none";
        });
    
    }

    //Категория товара

    
}

getData();