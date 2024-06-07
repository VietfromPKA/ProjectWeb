document.addEventListener('DOMContentLoaded', () => {
    const addQuestionBtn = document.getElementById('addQuestionBtn');
    const questionsContainer = document.getElementById('questionsContainer');

    addQuestionBtn.addEventListener('click', () => {
        const newQuestionContainer = document.createElement('div');
        newQuestionContainer.classList.add('container');

        const questionBox = document.createElement('div');
        questionBox.classList.add('question-box');

        const textarea = document.createElement('textarea');
        textarea.placeholder = 'Question';
        questionBox.appendChild(textarea);

        const newOptionsContainer = document.createElement('div');
        newOptionsContainer.classList.add('options');

        const colors = ['blue', 'orange','blue','orange'];
        
        for (let i = 0; i < 4; i++) {
            const optionDiv = document.createElement('div');
            optionDiv.classList.add('option', 'maubox', colors[i]);

            const inputText = document.createElement('input');
            inputText.type = 'text';
            inputText.placeholder = 'Answer';

            const inputCheckbox = document.createElement('input');
            inputCheckbox.type = 'checkbox';

            const deleteOptionBtn = document.createElement('button');
            deleteOptionBtn.classList.add('deleteOptionBtn');
            deleteOptionBtn.textContent = 'x';
            deleteOptionBtn.addEventListener('click', () => {
                newOptionsContainer.removeChild(optionDiv);
            });

            optionDiv.appendChild(inputText);
            optionDiv.appendChild(inputCheckbox);
            optionDiv.appendChild(deleteOptionBtn);

            newOptionsContainer.appendChild(optionDiv);
        }

        const deleteQuestionBtn = document.createElement('button');
        deleteQuestionBtn.classList.add('deleteQuestionBtn');
        deleteQuestionBtn.textContent = 'x';
        deleteQuestionBtn.addEventListener('click', () => {
            questionsContainer.removeChild(newQuestionContainer);
        });

        newQuestionContainer.appendChild(questionBox);
        newQuestionContainer.appendChild(newOptionsContainer);
        newQuestionContainer.appendChild(deleteQuestionBtn);

        questionsContainer.appendChild(newQuestionContainer);
    });
});
