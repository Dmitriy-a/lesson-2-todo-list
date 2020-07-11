const number = 'number-entry-key';

let numberEntry = localStorage.getItem(number);

if(!numberEntry){
    localStorage.setItem(number, '1');
    }
  numberEntry = +localStorage.getItem(number);
  
  if (numberEntry === 1 || numberEntry === 3){
      alert('Hello!');
  }
numberEntry++;
localStorage.setItem(number, numberEntry);