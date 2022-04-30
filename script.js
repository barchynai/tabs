const btns = document.querySelectorAll('.tab-btn');
const articles = document.querySelectorAll('.content');
const about = document.querySelector('.about');

about.addEventListener('click', function(e){
    const id = e.target.dataset.id;
    console.log(id)
  if(id){
      //remove class='active' from all buttons
      btns.forEach((btn) =>{
          btn.classList.remove('active');
      });
     e.target.classList.add('active');
     
     articles.forEach((article) =>{
         article.classList.remove('active');
     });
     const element = document.getElementById(id)
     element.classList.add('active')
  }
})