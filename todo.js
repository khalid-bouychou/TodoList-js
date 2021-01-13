// declaration global 
 let ul = document.querySelector('ul');
 let para =document.querySelector('p')
 
 // check input 
 const check_Input = (input) =>{
   if (input.value == '') {
           return true;
    }
          return false ;
}

        
//clear all
const clearAll = () => {
    ul.innerHTML='';
    para.innerHTML = `<p> You have 0 pending tasks </p> `
}   
        
//add new li + button delete
       
 const addElement = () => {
    let val = document.querySelector('input')
    if (check_Input(val)) {
      alert('invalide empty value')
    } else {
      ul.innerHTML += ` <li> ${val.value} <button id="btn_del" 
      onclick ="deleteLi()"> Delete </button></li>
      `
      count_Tasks();   
      val.innerText='' ;
    }         
}

// button delete li 
const deleteLi = () => {
    let el_Li = document.querySelector(' ul> li ')
    el_Li.remove();
    count_Tasks();
 }


// count tasks
const count_Tasks = () => {
  const ul = document.querySelectorAll('ul > li');
  para.innerHTML =`You have ${ul.length}  pending tasks `;
}