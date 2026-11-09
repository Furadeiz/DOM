

const commentsData = [{
        name : "Глеб Фокин",
        data : `12.02.22 12:18`,
        text : `Это будет первый коментарий на этом странице`,
        likes: 3,
        isLiked : false,
    },
    {
        name : "Варвара Н.",
        data : `13.02.22 19:22`,
        text : `Мне нравится как оформлена эта страница! ❤️`,
        likes: 75,
        isLiked : true,
    }
];

const button = document.querySelector('.add-form-button');
const list = document.querySelector('.comments');
const inputName = document.querySelector('.add-form-name');
const inputComment = document.querySelector('.add-form-text');

// функция рендэра
const renderComment = () => {
    list.innerHTML = "";

// переборка масива с данными
    commentsData.forEach((comment, index) => {
        const li = document.createElement(`li`);
        li.className = `comment`;

//Тернарная проверка для проверки класса
        const likeClass = comment.isLiked ? "like-button active-like" : "like-button";

        li.innerHTML = `
        <div class="comment-header">
            <div>${comment.name}</div>
            <div>${comment.data}</div>
        </div>
        <div class="comment-body">
            <div class="comment-text">${comment.text}</div>
        </div>
        <div class="comment-footer">
            <div class="likes">
                <span class="likes-counter">${comment.likes}</span>
                <button class="${likeClass}" data-index="${index}"></button>
            </div>
        </div>
        `
        list.appendChild(li);
    });

}

list.addEventListener("click", (event) => {
    const likeButton = event.target.closest('.like-button');
    
    const index = likeButton.dataset.index;

    if (commentsData[index]) {
        if (commentsData[index].isLiked) {
            commentsData[index].isLiked = false;
            commentsData[index].likes -= 1;
        } else {
            commentsData[index].isLiked = true;
            commentsData[index].likes += 1;
        }
        renderComment();
    }
});

button.addEventListener(`click`, () => {
    const name = inputName.value.trim();
    const text = inputComment.value.trim();

    commentsData.push({
        name : name,
        data : new Date().toLocaleString().slice(0, -3),
        text : text,
        likes: 0,
        isLiked : false,
    });

    inputName.value = "";
    inputComment.value = "";

    renderComment();
});

renderComment(); 