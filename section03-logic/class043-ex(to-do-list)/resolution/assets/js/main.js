(function myScope() {
    const inputTask = document.querySelector('.input-task')
    const buttonTask = document.querySelector('.btn-add-task')
    const tasks = document.querySelector('.tasks-list')

    // FUNCTION - CREATE LI 
    function createLi() {
        const li = document.createElement('li')
        return li
    }

    // FUNCTION - CREATE TASK
    function createTask(task) {
        const li = createLi()
        li.innerText = task
        tasks.append(li)
        createDeleBtn(li)
    }

    // FUNCTION - CRETE DELETE BUTTON
    function createDeleBtn(li) {
        const deleteBtn = document.createElement('button')
        deleteBtn.setAttribute('class', 'delete')
        deleteBtn.setAttribute('title', 'Apagar Tarefa')
        deleteBtn.innerText = 'Apagar'
        li.append(deleteBtn)
        salveTasks()
    }

    // FUNCTION - CLEAR INPUT
    function clearInput() {
        inputTask.value = ''
        inputTask.focus()
    }

    // FUNCTION - FORMAT STRING OF INPUT
    function formatString(inputValue) {
        const firstCaracter = inputValue.slice(0, 1)
        const formatCaracter = firstCaracter.toUpperCase()
        inputValue = formatCaracter + inputValue.slice(1)
        return inputValue
    }

    // FUNCTION - ADD TASK
    buttonTask.addEventListener('click', addTask)
    function addTask() {
        if (!inputTask.value) return
        createTask(formatString(inputTask.value))
        clearInput()
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            addTask()
        }
    })
    
    // FUNCTION - DELETE TASK
    document.addEventListener('click', function (e) {
        const el = e.target
        if (el.classList.contains('delete')) {
            el.parentElement.remove()
            inputTask.focus()
            salveTasks()
        }
    })

    // FUNCTION - SAVE TASKS ON LOCALSTORAGE
    function salveTasks() {
        const liTask = tasks.querySelectorAll('li')
        const taskList = []

        for (v of liTask) {
            let textTask = v.innerText
            textTask = textTask.replace('Apagar', '').trim()
            taskList.push(textTask)
        }

        const tasksJSON = JSON.stringify(taskList)
        localStorage.setItem('tasks', tasksJSON)
    }

    function addSavesTasks () {
        const tasks = localStorage.getItem('tasks')
        const tasksList = JSON.parse(tasks)
        
        for (let v of tasksList) {
            createTask(v)
        }
    }
    addSavesTasks()
})()
