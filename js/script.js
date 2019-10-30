/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
let list = document.getElementsByClassName("student-item");
let pageNum;
let pageDiv = document.querySelector('.page');
let searchInput = document.createElement('input');
let button = document.createElement('button');
let text;
let searchDiv = document.createElement('div'); //creates div to hold search function
let pageHeader = document.querySelector('.page-header'); //gets access to page-header (parent div)

//showPage function - determines what index range of students to pull
const showPage = (list, pageNum) => {
   let startIndex=(pageNum * 10) - 10; 
   let endIndex= pageNum * 10;
   for (let i = 0; i < list.length; i++){
      let li = list[i];
      if (i >= startIndex && i < endIndex){
      li.style.display = '';                      
      } else li.style.display = 'none';
   }
   
}
//appendPageLinks function - dynamically creates div,ul,li & a elements;
const appendPageLinks = (list) => {
   //check to see if pagniation div exists
   let getPag = document.querySelector('.pagination');
   if (document.contains((getPag))){
      getPag.remove();
   } 
   let div = document.createElement('div');
   div.className='pagination';
   pageDiv.appendChild(div);
   let ul = document.createElement('ul');
   div.appendChild(ul);

   let listLength = (list.length/10);
   for (let i = 0; i <= listLength; i ++){
      let li = document.createElement('li');
      ul.appendChild(li);
      let a = document.createElement('a');
      li.appendChild(a);
      let aFirst = document.querySelector('a');
      aFirst.className = 'active';
      a.href=('#');
      a.textContent = i+1;
      let aListA = document.querySelectorAll('a'); 
      for (let j = 0; j < aListA.length; j++){
         a.addEventListener('click', (event) => { //click handler controls which records are shown when page number is clicked
         let aList = document.querySelectorAll('a'); 
         showPage(list,event.target.textContent); 
            for (let k = 0; k < aList.length; k++){
               aList[k].className = ' ';
            } event.target.className ='active';
         })
      }
   }
}

const createSearch = () => { //appends div, input and button to parent element; sets attributes for search elements
   pageHeader.appendChild(searchDiv);
   searchDiv.appendChild(searchInput);
   searchDiv.appendChild(button);

   searchDiv.className = 'student-search';
   searchInput.placeholder ='Search for students...';
   button.textContent='Search';
}

createSearch();

const runSearch = (text,list) => { //the search executed when 'Search' button is clicked
   var storageArray = [];
   for (let i = 0; i<list.length; i++){
      list[i].style.display= 'none';
      if (list[i].textContent.toLowerCase().includes(text.toLowerCase())){
         storageArray.push(list[i]);
      }
      let storeLen = Math.ceil(storageArray.length/10);      
   } 
   showPage(storageArray, 1);
   appendPageLinks(storageArray);
} 

button.addEventListener('click', (event) => {
   event.preventDefault();
   text = searchInput.value;  
   runSearch(text,list);
   console.log('Submit button is .functional!');
   console.log(text);
});


showPage(list, 1);
appendPageLinks(list);



// /* submit listener */
// search.addEventListener('keyup', () => {
//    searchFunc(search,tableCells);

//   // Invoke your search function here - Arguments: search, tableCells


//   // Helpful log statement to test function
//   console.log('Keyup event on the Search input is functional!');