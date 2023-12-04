document.addEventListener('DOMContentLoaded', ()=>{

  const cards = document.querySelectorAll('.news-card-heading')
  const listView = document.querySelectorAll('.news-list-view')
  const articleView = document.querySelectorAll('.news-article')

  cards.forEach(card => {
    card.addEventListener('click', ()=>{
      listView.forEach(list => {
        list.style.display = 'none'
      });
      articleView.forEach(article => {
        article.style.display = 'block'
      });
    })
  });
    

})