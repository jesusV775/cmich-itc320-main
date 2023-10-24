//Load content upon the browser being loaded
window.addEventListener('load', () => {
	
    //Setup the query selectors
    const form = document.querySelector("#new_task_form");
	const input = document.querySelector("#new_task_input");
	const list_el = document.querySelector("#tasks");

	//Perform when "Add Task" is pressed
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const task = input.value;

		//Creates the new textbox in the list
        const task_el = document.createElement('div');
		task_el.classList.add('task');

		const task_content_el = document.createElement('div');
		task_content_el.classList.add('content');

		task_el.appendChild(task_content_el);

		//Inserts the user input, or the task, into the textbox, making it read-only so as to not be edited (except for when edit button is pressed)
        const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

		task_content_el.appendChild(task_input_el);

		//creates the buttons
        const task_actions_el = document.createElement('div');
		task_actions_el.classList.add('actions');
		
		const task_edit_el = document.createElement('button');
		task_edit_el.classList.add('edit');
		task_edit_el.innerText = 'Edit';

		const task_delete_el = document.createElement('button');
		task_delete_el.classList.add('delete');
		task_delete_el.innerText = 'Delete';

		task_actions_el.appendChild(task_edit_el);
		task_actions_el.appendChild(task_delete_el);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		//Clear value from input box
        input.value = '';

		
        //Perform when edit button is pressed; change the text from read-only to allow editing, then change back when save is pressed
        task_edit_el.addEventListener('click', (e) => {
			if (task_edit_el.innerText.toLowerCase() == "edit") {
				task_edit_el.innerText = "Save";
				task_input_el.removeAttribute("readonly");
				task_input_el.focus();
			} else {
				task_edit_el.innerText = "Edit";
				task_input_el.setAttribute("readonly", "readonly");
			}
		});

		//Perform when delete button is pressed; simply remove the respective task from the list
        task_delete_el.addEventListener('click', (e) => {
			list_el.removeChild(task_el);
		});
	});
});