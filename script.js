let likeButton = document.querySelector('.V_button1'); 
let likeCount = document.querySelector('.likeCount');
let count = 0; 
likeButton.addEventListener('click', function() {
      count++;
      likeCount.textContent = count.toString();
     });



     let likeButton2 = document.querySelector('.V_button2'); 
     let likeCount2 = document.querySelector('.likeCount2');
     let count2 = 0; 
     likeButton2.addEventListener('click', function() {
           count++;
           likeCount2.textContent = count.toString();
          });

          let likeButton3 = document.querySelector('.V_button3'); 
          let likeCount3 = document.querySelector('.likeCount3');
          let count3 = 0; 
          likeButton3.addEventListener('click', function() {
                count++;
                likeCount3.textContent = count.toString();
               });
     




// const likeButton = document.getElementById('likeButton');
// const likeCount = document.getElementById('likeCount');
// let count = 0;
// likeButton.addEventListener('click', function() {
//   count++;
//   likeCount.textContent = count.toString();
// });