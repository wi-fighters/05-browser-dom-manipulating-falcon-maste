// IIFE
(() => {
  // creat an array

  const books = [
    {
      title: "The Design of EveryDay Things",
      author: "Don Norman",
      alreadyRead: false,
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
    },
    {
      title: "The Most Human Human",
      author: "Brian Christian",
      alreadyRead: true,
      img:
        "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
    },
    {
      title: "Thinking with Type",
      author: "Ellen Lupton",
      alreadyRead: true,
      img:
        "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
    },
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      alreadyRead: false,
      img: "https://eloquentjavascript.net/img/cover.jpg"
    }
  ];




  let newArray = books.map(book => {
    book.author = book.author.split(" ").reverse().join(" ")
    return book;
  })

  let sortedArray = books.sort((a, b) => {
    if (a.author.charAt(0) > b.author.charAt(0)) {
      return 1
    } else {
      return -1;
    }
  })




  // loop through the books array

  sortedArray.map(book => {
    //creating li for each book
    const li = document.createElement('li');

    //  creat a img tag and then add source attribute for image
    const img = document.createElement('img');
    img.src = book.img
    // create a h3 for book title
    const h3 = document.createElement('h3');
    h3.textContent = book.title
    // create a h5 for the author name 
    const h5 = document.createElement('h5');
    h5.textContent = book.author;
    // create a dive with a span showing the status
    const div = document.createElement('div');
    const span = document.createElement('span');
    span.textContent = book.alreadyRead;
    div.appendChild(span)
    li.append(img, h3, h5, div);
    console.log(li);

    const ul = document.querySelector('.book-list');
    ul.appendChild(li);

  })


  // store the li into an array
  // sort it according to the author last name and append it into the ul


})()