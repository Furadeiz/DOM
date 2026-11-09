
    const button = document.querySelector('.add-form-button');
    const list = document.querySelector('.comments');
    const inputName = document.querySelector('.add-form-name');
    const inputComment = document.querySelector('.add-form-text');
    const likeButton = document.querySelector('.like-button')

    likeButton.addEventListener("click", () => {
        console.log('click');
    });


    button.addEventListener("click", () => {

      const name = inputName.value;
      const text = inputComment.value;

      
    const newLi = document.createElement('li');
    newLi.className = 'comment';

    newLi.innerHTML = `
        <div class="comment-header">
            <div>${name}</div>
            <div>${new Date().toLocaleString()}</div>
        </div>
        <div class="comment-body">
            <div class="comment-text">
                ${text}
            </div>
        </div>
        <div class="comment-footer">
            <div class="likes">
                <span class="likes-counter">0</span>
                <button class="like-button"></button>
            </div>
        </div>
    `;
    list.appendChild(newLi);

    inputName.value = "";
    inputComment.value = "";

    });