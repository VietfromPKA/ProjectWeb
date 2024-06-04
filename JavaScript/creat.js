const colors = ['blue', 'orange', 'yellow'];
let colorIndex = 0;

document.getElementById('addOptionBtn').addEventListener('click', function() {
    const newOptionDiv = document.createElement('div');
    newOptionDiv.classList.add('option', colors[colorIndex]);
    colorIndex = (colorIndex + 1) % colors.length;
    const newTextInput = document.createElement('input');
    newTextInput.type = 'text';
    newTextInput.placeholder = 'Nhập tùy chọn trả lời ở đây';
    const newCheckboxInput = document.createElement('input');
    newCheckboxInput.type = 'checkbox';


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        newOptionDiv.remove();
    });

    
    newOptionDiv.appendChild(newTextInput);
    newOptionDiv.appendChild(newCheckboxInput);
    newOptionDiv.appendChild(deleteButton);
    document.getElementById('optionsContainer').appendChild(newOptionDiv);
});