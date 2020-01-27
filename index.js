// IIFE
(() => {
  // creat an array

  let books = [
    {
      title: "The Design of EveryDay Things",
      author: "Don Norman",
      alreadyRead: false,
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
    },
    {
      title: "Thinking with Type",
      author: "Ellen Lupton",
      alreadyRead: true,
      img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      alreadyRead: false,
      img: "https://eloquentjavascript.net/img/cover.jpg"
    }
  ]
  // we take the author's name split the array and reverse it, than join it again
  let newArray = books.map(book => {
    book.author = book.author.split(" ").reverse().join(" ")
    return book;
  })

  // we sort the books acording to the  author's name
  // TODO: Ternary operator
  let sortedArray = books.sort((a, b) => {
    if (a.author.charAt(0) > b.author.charAt(0)) {
      return 1;
    } else {
      return -1;
    }


  })

  const ul = document.querySelector('.book-list');

  // loop through the books array

  sortedArray.map(book => {
    //creating li for each book
    const li = document.createElement('li');

    //  creat a img tag and then add source attribute for image
    const img = document.createElement('img');
    img.src = book.img
    // create a h3 for book title
    // TODO consistent heading hierarchy
    const h2 = document.createElement('h2');
    h2.textContent = book.title
    // create a h5 for the author name 
    const h3 = document.createElement('h3');
    h3.textContent = book.author;
    // create a div with a span showing the status
    const div = document.createElement('div');
    div.classList.add('button-area');
    const span = document.createElement('span');
    span.classList.add('button');

    span.textContent = book.alreadyRead ? 'Read' : 'To read';
    book.alreadyRead ? span.style.backgroundColor = 'green' : span.style.backgroundColor = 'gray';

    div.appendChild(span)
    li.append(img, h2, h3, div);
    console.log(li);

    ul.appendChild(li);

  })



  // store the li into an array
  // sort it according to the author last name and append it into the ul


})()