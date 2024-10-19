// add button
const addTaskBtn = document.getElementById('add-task-btn')
// tasks Container
const tasksStack = document.getElementById('tasks') 

// set the localStorage Tasks array
let tasks = JSON.parse(localStorage.getItem('tasks')) || []

// Render the old tasks from the localStorage 
const renderTasks = (tasks)=>{
    const taskInputEle = document.querySelector('#task')
    tasks.map(task => {
        
    // create the Task Elements
    const newTaskContainer = document.createElement('div')
    newTaskContainer.classList = 'task'

    const newTaskPargraph = document.createElement('p')
    newTaskPargraph.innerHTML = task.task

    const newTaskEditButton = document.createElement('button')
    newTaskEditButton.classList = 'edit-btn  btns-edit-styling'
    newTaskEditButton.innerHTML = 'Edit'

    const newTaskRemoveButton = document.createElement('button')
    newTaskRemoveButton.classList = 'remove-btn  btns-remove-styling'
    newTaskRemoveButton.innerHTML = 'Remove'

    newTaskRemoveButton.addEventListener('click' , ()=>{
        //remove the task from local storage 
        tasks = tasks.filter((ele)=> ele.id !== task.id)
        localStorage.setItem('tasks' , JSON.stringify(tasks))
        //remove the task from Html 
        newTaskContainer.remove()
    })
     // edit the text of task
    newTaskEditButton.addEventListener('click' , ()=>{
       if(taskInputEle.value==''){
        alert("you shoud telhas teze")
        return;
       }
       newTaskPargraph.innerHTML = taskInputEle.value
       tasks=tasks.map(ele=> {
        if(ele.id==task.id){
            ele.task = taskInputEle.value
        }
        return ele
       }
       
       )
       localStorage.setItem('tasks' , JSON.stringify(tasks))
 })

    // append the task Elemets in the task Conteiner 
    newTaskContainer.appendChild(newTaskPargraph)
    newTaskContainer.appendChild(newTaskEditButton)
    newTaskContainer.appendChild(newTaskRemoveButton)

    // appened the task container to the Tasks Stack
    tasksStack.appendChild(newTaskContainer)

    })
}

// Call the Render tasks Fucmtion
renderTasks(tasks)

// convert tasks array to string 
localStorage.setItem('tasks', JSON.stringify(tasks))

// create add task DOM function 
addTaskBtn.addEventListener('click' , ()=>{

    const taskInputEle = document.querySelector('#task')

    if(taskInputEle.value == '') {
        alert('you cant create todo empty Item' )
        return;
    }
    const taskID = new Date().getTime()

    // create the Task Elements
    const newTaskContainer = document.createElement('div')
    newTaskContainer.classList = 'task '

    const newTaskPargraph = document.createElement('p')
    newTaskPargraph.innerHTML = taskInputEle.value

    const newTaskEditButton = document.createElement('button')
    newTaskEditButton.classList = 'edit-btn btns-edit-styling'
    newTaskEditButton.innerHTML = 'Edit'

    const newTaskRemoveButton = document.createElement('button')
    newTaskRemoveButton.classList = 'remove-btn btns-remove-styling'
    newTaskRemoveButton.innerHTML = 'Remove'

    newTaskRemoveButton.addEventListener('click' , ()=>{
        //remove the task from local storage 
        tasks = tasks.filter((task)=> task.id !== taskID)
        localStorage.setItem('tasks' , JSON.stringify(tasks))
        //remove the task from Html 
        newTaskContainer.remove()
    }
    
  )
  // edit the text of task
  newTaskEditButton.addEventListener('click' , ()=>{
    if(taskInputEle.value==''){
        alert("you shoud telhas teze")
        return;
    }
    newTaskPargraph.innerHTML = taskInputEle.value
    tasks=tasks.map(ele=> {
     if(ele.id==taskID){
         ele.task = taskInputEle.value
     }
     return ele
    }
    
    )
    localStorage.setItem('tasks' , JSON.stringify(tasks))
})


    // append the task Elemets in the task Conteiner 
    newTaskContainer.appendChild(newTaskPargraph)
    newTaskContainer.appendChild(newTaskEditButton)
    newTaskContainer.appendChild(newTaskRemoveButton)

    // appened the task container to the Tasks Stack
    tasksStack.appendChild(newTaskContainer)

    // add task to array
    tasks.push(
        {
            id:taskID,
            task: taskInputEle.value})
    localStorage.setItem('tasks', JSON.stringify(tasks))
    console.log('tasks: ', tasks);
   //  alert('To Do Item Listed Successfully !')
})

//Bayan Task is Create the Edit Functionality Without Fucking ChatGPT