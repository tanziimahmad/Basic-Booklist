let authors = document.querySelector('#author');
let names = document.querySelector('#title');
let publishYear = document.querySelector('#year');
let clickBtn = document.querySelector('#submitBtn');
let finalList = document.querySelector('#book-list');

clickBtn.addEventListener('click', function (rashik) {
  rashik.preventDefault();

  let authorsValue = authors.value;
  let namesValue = names.value;
  let publishYearValue = publishYear.value;

  let newRow = document.createElement('tr');
  let newAuthor = document.createElement('td');
  let newTitle = document.createElement('td');
  let newYear = document.createElement('td');

  newAuthor.innerHTML = authorsValue;
  newTitle.innerHTML = namesValue;
  newYear.innerHTML = publishYearValue;

  newRow.appendChild(newAuthor);
  newRow.appendChild(newTitle);
  newRow.appendChild(newYear);
  finalList.appendChild(newRow);
  

})