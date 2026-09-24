const todolist = [{
    name:'wash dishes',dueDate:'25-08-2007'}
    , 
     {name:'eat food',dueDate:'19-09-2008'}] ;
RenderTodoList();
 function RenderTodoList(){
    let todolistHTML = '';
for( let index=0;index<todolist.length;index++){
    const todoObject = todolist[index];
   // const name=todoObject.name;
   // const dueDate=todoObject.dueDate; 
    const {name,dueDate}=todoObject;
   // const {dueDate}=todoObject;   
    const html =`
    <div>${name}</div>
    <div> ${dueDate}</div>
    <button onclick="todolist.splice(${index},1);
    RenderTodoList();"
    class="delete-button">Delete</button>
     `;
     todolistHTML += html;
}



document.querySelector('.js-div').innerHTML = todolistHTML;
 }
function ToDoList(){
  const  InputElement = document.querySelector('.js-todolist');
   const result = InputElement.value;
   const dateInputElement = document.querySelector('.js-duedate-input');
   const result2 =dateInputElement.value;
    todolist.push({
        name:result,
        dueDate:result2
    });
   

    InputElement.value='';


    RenderTodoList();
}