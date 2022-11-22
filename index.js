const openModal = document.querySelector('.todo-open');
const modalTodo = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close')

openModal.addEventListener('click', (e) =>{
    e.preventDefault();
    modalTodo.classList.add('modal-show');
    
});

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modalTodo.classList.remove('modal-show');
});