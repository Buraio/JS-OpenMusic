function filterByCategory(array) {

  const tags = document.querySelectorAll('.tag');

  tags.forEach(tag => {

    tag.addEventListener('click', (e) => {

      const tagEvent = parseInt(e.target.id);
      if (tagEvent === 0) {
        render(cardList, cards(products));
      }
      else {

        const filterArr = array.filter((element, index) => {
  
          if (element.category === tagEvent) {
            return element
          };
  
        });
  
        render(cardList, cards(filterArr));

      }

    })

  })

}

function filterByPrice(array) {

  const priceSpan = document.querySelector('.rangePrice');
  const priceRange = document.querySelector('.priceRange');

  let controlArr;
  priceRange.addEventListener('mousemove', (e) => {

    const price = parseInt(e.target.value);
    priceSpan.innerText = `Até R$ ${(price).toFixed(2)}`;

    controlArr = array.filter(element => element.price <= price);

    render(cardList, cards(controlArr));

  })

}

filterByCategory(products)

filterByPrice(products);