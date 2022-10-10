const cardList = document.querySelector('.albumList');

function render(list, callbackArr) {

  list.innerHTML = '';
  const noAlbum = document.createElement('span');
  noAlbum.innerText = "Nenhum álbum encontrado";
  if (callbackArr.length === 0) {
    list.append(noAlbum);
  }
  else {

    let control = callbackArr;
  
    if (callbackArr) {
      control.forEach(element => list.append(element));
    }

  }

}

function cards(array) {

  let control = [];
  array.forEach((element, index) => {

    const album = document.createElement('li');
    const albumImg = document.createElement('img');
    const divInfo = document.createElement('div');
    const info = `<small>${element.band}</small><small>${element.year}</small>`;
    const heading = document.createElement('h3');
    const divValue = document.createElement('div');
    const value = `<span>R$ ${(element.price).toFixed(2)}</span><button>Comprar</button>`;

    albumImg.src = `${element.img}`;
    heading.innerText = `${element.title}`;

    album.classList.add('album');
    divInfo.classList.add('info');
    divValue.classList.add('value');

    element.id = (array[index].id);

    divInfo.insertAdjacentHTML('afterbegin', info);
    divValue.insertAdjacentHTML('afterbegin', value);

    album.append(albumImg, divInfo, heading, divValue);
    cardList.append(album);

    control.push(album);

  })

  return control;

}

render(cardList, cards(products));