const images = document.querySelectorAll('.boxs'); 
let intialValue = 0; 


function showImage(index) {
  images.forEach((img, i) => {
    img.style.display = i === index ? 'block' : 'none';
  });
}


showImage(intialValue);

let showInterval = setInterval(() => {
  intialValue = (intialValue + 1) % images.length;
  showImage(intialValue);
}, 3000);


document.querySelector('.nov').addEventListener('click', () => {
  clearInterval(showInterval); 
  intialValue = (intialValue + 1) % images.length;
  showImage(intialValue);
  restartSlideshow();
});


document.querySelector('.evvel').addEventListener('click', () => {
  clearInterval(showInterval); 
  intialValue = (intialValue - 1 + images.length) % images.length;
  showImage(intialValue);
  restartSlideshow(); 
});

function restartSlideshow() {
  showInterval = setInterval(() => {
    intialValue = (intialValue + 1) % images.length;
    showImage(intialValue);
  }, 3000);
}
