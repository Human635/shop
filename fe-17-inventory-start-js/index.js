//инпуты
let productType = document.querySelector('#type-select')
let productName = document.querySelector('#product-name')
let productCount = document.querySelector('#product-count')

//кнопки
let addProductButton = document.querySelector('.add-product')
let productsListElement = document.querySelector('.products-list')

let productsArray = []
let countId = 0

addProductButton.addEventListener('click', addProduct)

function addProduct() {
  let productTypeValue = productType.value 
  let productNameValue = productName.value 
  let productCountValue = productCount.value

  countId += 1

  let productId = countId
  
  let productObj = {
    productId: productId,
    productTypeKey: productTypeValue,
    productNameKey: productNameValue,
    productCountKey: productCountValue
  }

  productsArray.push(productObj)
  rerederProductsTable()
}
  
function deleteProduct(productId) {
  //Через фильтр
  //productsArray.filter(product => product.productId !== productId)
  //Через slice
  let productIdx = productsArray.findIndex(product => product.productId === productId)
  productsArray.splice(productIdx, 1)
  rerederProductsTable()
}

function rerederProductsTable(){
  let innerHtmlWithProducts = ''
  
  productsArray.forEach((item) => {
    innerHtmlWithProducts += `<div class='product'>
    <div class='description-wrapper'>
    <p>Тип: ${item.productTypeKey}</p>
      <p>Название: ${item.productNameKey}</p>
      <p>Количество: ${item.productCountKey}</p>
      <button class="remove-button" onclick="deleteProduct(${item.productId})">Delete</button>
    </div>
  </div>`
  })
  
  productsListElement.innerHTML = innerHtmlWithProducts
}