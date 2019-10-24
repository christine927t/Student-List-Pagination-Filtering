/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.

***/
let list = document.getElementsByClassName("student-item");
let pageNum;




/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
function showPage(list, pageNum){
   let startIndex=(pageNum * 10) - 10; 
   let endIndex= pageNum * 10;
   

   for (let i = 0; i < list.length; i+=1){
      let li = list[i];
      if (i >= startIndex && i < endIndex){
      li.style.display = '';                      
      } else li.style.display = 'none';
   
   }
   
}
showPage(list,1);

//appendPageLinks function
const appendPageLinks = (list) =>{
   let pageDiv = document.querySelector('.page');
   let div = document.createElement('div');
   div.className='pagination';
   pageDiv.appendChild(div);
   let ul = document.createElement('ul');
   div.appendChild(ul);

   let listLength = Math.ceil(list.length/10);
   for (let i = 1; i <= listLength; i +=1){
      let li = document.createElement('li');
      ul.appendChild(li);
      let a = document.createElement('a');
      li.appendChild(a);
      a.className = 'active';
      a.href=('#');
      a.textContent = i;
   }  
   
   let a = document.querySelectorAll('a');
   for (let i = 0; i < a.length; i+=1){
      a[i].addEventListener('click', (e) => {
         showPage(list,a[i]);
      })
   }
   for (let i = 0; i < a.length; i+=1){
      a[i].className = 'none';
   } a.className ='active';

}
appendPageLinks(list);


// Remember to delete the comments that came with this file, and replace them with your own code comments.