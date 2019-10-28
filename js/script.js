/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
let list = document.getElementsByClassName("student-item");
let pageNum;
let pageDiv = document.querySelector('.page');

const search = document.getElementsByClassName('student-search');
const submit = document.getElementsByTagName('button');
let searchInput;
let button = document.createElement('button'); //creates search button




//showPage function - determines what index range of students to pull
const showPage = (list, pageNum) => {
   let startIndex=(pageNum * 10) - 10; 
   let endIndex= pageNum * 10;
   for (let i = 0; i < list.length; i++){
      let li = list[i];
      if (i >= startIndex && i <= endIndex){
      li.style.display = '';                      
      } else li.style.display = 'none';
   }
   
}
//appendPageLinks function - dynamically creates div,ul,li & a elements;
const appendPageLinks = (list) => {
   //let pageDiv = document.querySelector('.page');
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

const searchFunc = (searchInput,list) => {
   let searchDiv = document.createElement('div'); //creates search div; appends it before student-list ul
   searchDiv.className = 'student-search';
   pageDiv.appendChild(searchDiv);
   let studentList = document.querySelector('.student-list');
   let insertSearchDiv = pageDiv.insertBefore(searchDiv,studentList);

   searchInput = document.createElement('input'); //creates input box
   searchInput.placeholder ='Search for students...';
   searchDiv.appendChild(searchInput);

   button.textContent='Search';
   searchDiv.appendChild(button);

   button.addEventListener('click', (event) => {
      event.preventDefault();
      for (let i = 0; i<list.length; i++){
      list[i].style.display= 'none'; //searchInput.value.length !== 0 &&//
         if (list[i].textContent.toLowerCase().includes(searchInput.value.toLowerCase())){
            list[i].value.className = 'active';
         }
      }
      console.log('Submit button is .functional!');
      console.log(searchInput.value);


   });
}

showPage(list, 1);
appendPageLinks(list);
searchFunc(searchInput,list);


// /* submit listener */
// search.addEventListener('keyup', () => {
//    searchFunc(search,tableCells);

//   // Invoke your search function here - Arguments: search, tableCells


//   // Helpful log statement to test function
//   console.log('Keyup event on the Search input is functional!');