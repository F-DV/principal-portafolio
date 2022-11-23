//Abrir modal de todo list
const openModalTodoList = document.querySelector('.todo-open');
const modalTodo = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-close')

openModalTodoList.addEventListener('click', (e) =>{
    e.preventDefault();
    modalTodo.classList.add('modal-show');
    
});

closeModal.addEventListener('click',(e)=>{
    e.preventDefault();
    modalTodo.classList.remove('modal-show');
});

//Abrir modal de Sistema exámenes
const openModalExams = document.querySelector('.exams-open');
const modalExam = document.querySelector('.modal-exam');
const closeModalExam = document.querySelector('.modal-close-exam');


openModalExams.addEventListener('click', (e) =>{
    e.preventDefault();
    modalExam.classList.add('modal-exam-show');
});

closeModalExam.addEventListener('click',(e)=>{
    e.preventDefault();
    modalExam.classList.remove('modal-exam-show');
});
