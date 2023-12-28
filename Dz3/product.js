// функция перехода на страницу отзывов
const changePageEl = document.querySelector(".changePage");
const contentEl = document.querySelector(".content");


const feedbackList = productFromStorage();

// вывод списка отзывов на страницу
const contentHtml = feedbackList
  .map(
    (el) => `<article>
               <h1>${el.nameProduct}</h1>
               <ul class="feedbackList" style="display: none;">${el.feedback.map((i) => `<li>${i}</li>`).join(" ")}</ul>
               <button class="feedbackList__btn">Показать отзывы</button>
            </article>`
  )
  .join(" ");

contentEl.innerHTML = contentHtml;

const feedbackListEl = document.querySelectorAll(".feedbackList")
const feedbackListBtnEl = document.querySelectorAll(".feedbackList__btn")


function showFeedback() {
  if (feedbackListEl.style.display === "none") {
    feedbackListEl.style.display = "block";
    feedbackListBtnEl.innerHTML = "Скрыть отзывы"
  } else {
    feedbackListEl.style.display = "none";
    feedbackListBtnEl.innerHTML = "Показать отзывы"
  }
}

for (let i=0; i < feedbackListBtnEl.length; i++) {
  console.log(feedbackListBtnEl[i]);
  console.log(feedbackListEl[i]);
  feedbackListBtnEl[i].addEventListener('click', () => {
    if (feedbackListEl[i].style.display === "none") {
      feedbackListEl[i].style.display = "block";
      feedbackListBtnEl[i].innerHTML = "Скрыть отзывы"
    } else {
      feedbackListEl[i].style.display = "none";
      feedbackListBtnEl[i].innerHTML = "Показать отзывы"
    }
  });
}





function changePage() {
  window.open("addFeedback.html", "_self");
}

changePageEl.addEventListener("click", changePage);
