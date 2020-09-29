const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
  card.addEventListener("click", function(){
    const videoId = card.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector("iframe").src=`https://www.youtube.com/embed/${videoId}`;
  })
}

const cardsBlog = document.querySelectorAll('.card-blog');

for (let card of cardsBlog){
  card.addEventListener("click", function(){
    const blogId = card.getAttribute('id');
    modalOverlay.classList.add('active');
    modal.querySelector('iframe').src=`https://blog.rocketseat.com.br/${blogId}`;
  })
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove('active');
  modalOverlay.querySelector("iframe").src=""
})

const modal = document.querySelector('.modal');
document.querySelector('.maximize-modal').addEventListener("click", function(){
  if(modal.classList.contains('maximize')){
    modal.classList.remove('maximize');
  }else{
    modal.classList.add('maximize');
  }
  /* teste */
})