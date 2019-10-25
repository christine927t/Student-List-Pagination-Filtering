for (let i = 1; i <= listLength; i += 1) {
     let li = document.createElement('li');
     ul.appendChild(li);
     let a = document.createElement('a');
     li.appendChild(a);
     a.className = 'active';
     a.href = ('#');
     a.textContent = i;
     let aList = document.querySelectorAll('a');
     for (let j = 1; j <= aList.length; j++) {
        a.addEventListener('click', (event) => {
       //call showPage function
       //Pass in list and J var
           for (let k = 0; k < aList.length; k++) {
             //set every aList item(a tag) class name to empty string
           //end for loop
           //set event.target classname to active
        });
     }
  }
showPage(list, 1);
appendPageLinks(list);