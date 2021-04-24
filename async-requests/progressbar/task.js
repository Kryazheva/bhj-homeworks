'use strict';
const form = document.querySelector('#form');
form.addEventListener('submit', (event) => {
   event.preventDefault();
   const formData = new FormData (form);
   const xhr = new XMLHttpRequest();
   let progress = document.getElementById('progress');
   xhr.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
   xhr.upload.onprogress = function(event) {
      progress.value = event.loaded / event.total;
    };
    xhr.onloadend = function() {
        if (xhr.status == 200) {
          console.log("Успех");
          } else {
             console.log("Ошибка " + this.status);
        }
    };
   xhr.send(formData);
});

