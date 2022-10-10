const tagList = document.querySelector('.tagList');

function createTags(array) {

  array.forEach((element, index) => {

    const tag = document.createElement('li');
    tag.innerText = element;
    tag.classList.add('tag');

    tag.id = index;

    if (tag.innerText === 'Todos') {
      tag.classList.add('selected');
    }

    tagList.appendChild(tag);

  });

}

createTags(categories);

const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {

  tag.addEventListener('click', () => {

    tags.forEach(verifiedTag => {
      if (verifiedTag.classList.contains('selected')) {
        verifiedTag.classList.remove('selected');
      }
    })

    tag.classList.add('selected');

    filterByCategory(products, categories);

  })

})

