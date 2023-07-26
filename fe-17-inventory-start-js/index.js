let productType = document.querySelector('#type-select')
let productName = document.querySelector('#product-name')
let productCount = document.querySelector('#product-count')

let addProductButton = document.querySelector('.add-product')
let productsListElement = document.querySelector('.products-list')

let productsArray = []

addProductButton.addEventListener('click', function(event) {
  let productTypeValue = productType.value 
  let productNameValue = productName.value 
  let productCountValue = productCount.value
  
  let productObj = {
    productTypeKey: productTypeValue,
    productNameKey: productNameValue,
    productCountKey: productCountValue
  }
  
  productsArray.push(productObj)

  console.log(productsArray)  
  let innerHtmlWithProducts = ''
  
  productsArray.forEach((item) => {
    innerHtmlWithProducts += `<div class='product'>
    <div class='description-wrapper'>
      <p>Тип: ${item.productTypeKey}</p>
      <p>Название: ${item.productNameKey}</p>
      <p>Количество: ${item.productCountKey}</p>
    </div>
  </div>`
  })
  
  productsListElement.innerHTML = innerHtmlWithProducts
  })