Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');

// const buttonEl = document.querySelector('button'); //selecionar o objeto botão no DOM e armazen nessa constante
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');


// function addGoal() {
//     const enteredValeu = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValeu;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';



// }

// buttonEl.addEventListener('click', addGoal);