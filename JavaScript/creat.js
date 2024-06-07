// creat.js
document.addEventListener('DOMContentLoaded', () => {
    const addQuestionBtn = document.getElementById('addQuestionBtn');
    const questionsContainer = document.getElementById('questionsContainer');

    addQuestionBtn.addEventListener('click', () => {
        const newQuestionContainer = document.createElement('div');
        newQuestionContainer.classList.add('container');

        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');

        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Nhập câu hỏi vào đây';
        questionBox.appendChild(textarea);

        const newOptionsContainer = document.createElement('div');
        newOptionsContainer.classList.add('options');

        for (let i = 0; i < 4; i++) {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option', 'maubox');

            const inputText = document.createElement('input');
            inputText.type = 'text';
            inputText.placeholder = 'Nhập tùy chọn trả lời ở đây';

            const inputCheckbox = document.createElement('input');
            inputCheckbox.type = 'checkbox';

            optionDiv.appendChild(inputText);
            optionDiv.appendChild(inputCheckbox);

            newOptionsContainer.appendChild(optionDiv);
        }

        newQuestionContainer.appendChild(questionBox);
        newQuestionContainer.appendChild(newOptionsContainer);

        questionsContainer.appendChild(newQuestionContainer);
    });
});
