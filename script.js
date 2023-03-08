// Storing all the elements I will use in variables
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// I used querySelectorAll here because there are three buttons with the class show-modal and now i have an array with those three elements
const showModalBtns = document.querySelectorAll('.show-modal');

// Creating the function to close the modal
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

// Creating the function to open the modal
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}


// Selecting all the elements in the array to add a 'click' event listener to them to open the modal 
for (let i = 0; i < showModalBtns.length; i++)
    showModalBtns[i].addEventListener('click', openModal);

// Making it so when the user clicks the X button on top right corner of the modal the modal will close
closeModalBtn.addEventListener('click', closeModal);

// Making it so when the user clicks somewhere outside the modal the modal will close
overlay.addEventListener('click', closeModal);

// Making it so when the user clicks Esc the modal will close
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})