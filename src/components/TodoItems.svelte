<script>
    import Icon  from 'svelte-awesome/components/Icon.svelte';
    import { refresh } from 'svelte-awesome/icons';
    import TodoItem from './TodoItem.svelte';

    let newTodoTitle ='';
    let currentFilter = 'all';
    let nextId = 4;

    let todos = [
        {
            id: 1,
            title: 'My first todo',
            completed: false
        },
        {
            id: 2,
            title: 'My second todo',
            completed: false
        },
        {
            id: 3,
            title: 'My third todo',
            completed: false
        },
    ];

    function addTodo(event) {
        if (event.key === 'Enter') {
            todos = [...todos, {
                id: nextId,
                completed: false,
                title: newTodoTitle
            }];

            nextId = nextId + 1;
            newTodoTitle = '';
        }
    }

    function checkAllTodos(event) {
        todos.forEach(todo => todo.completed = event.target.checked);
        todos = todos;
    }

    function updateFilter(newFilter) {
        currentFilter = newFilter;
    }

    function clearCompleted() {
        todos = todos.filter(todo => !todo.completed);
    }

    function handleDeleteTodo(event) {
        todos = todos.filter(todo => todo.id !== event.detail.id);
    }

    function handleToggleComplete(event) {
        const todoIndex = todos.findIndex(todo => todo.id === event.detail.id);
        const updatedTodo = { ...todos[todoIndex], completed: !todos[todoIndex].completed};
        todos = [
            ...todos.slice(0, todoIndex),
            updatedTodo,
            ...todos.slice(todoIndex + 1),
        ];
    }

    // computed
    $: todosRemaining = filteredTodos.filter(todo => !todo.completed).length;
    $: filteredTodos = currentFilter === 'all' ? todos : currentFilter === 'completed' 
        ? todos.filter(todo => todo.completed)
        : todos.filter(todo => !todo.completed)
</script>

<style>
    .container {
        max-width: 800px;
        margin: 10px auto;
    }

    .active {
        background: lightseagreen;
    }
</style>

<div class="w-full max-w-screen-xl relative mx-auto px-6 pt-12 pb-12 lg:border-b-2 lg:border-gray-200">
    <div class="xl:flex -mx-6">
        <div class="px-6 text-left md:text-center xl:text-left max-w-2xl md:max-w-3xl mx-auto">
            <h1 class="text-3xl sm:text-4xl md:text-5xl xl:text-4xl font-light leading-tight"><strong>Svelte</strong> To<span class="text-teal-500 font-normal">DO.</span></h1>
            <!-- <p class="mt-6 leading-relaxed sm:text-lg md:text-xl xl:text-lg text-gray-600">
                A basic to-do app!
            </p> -->
        </div>
    </div>
</div>
<div class="fixed z-100 bg-gray-100 inset-x-0 top-0 border-b-2 border-gray-200 lg:border-b-0 lg:static flex items-center">
    <div class="container">
    <input id="todo-input" class="transition focus:outline-0 border border-transparent focus:bg-white focus:border-gray-300 placeholder-gray-600 rounded-lg bg-gray-200 py-2 pr-4 pl-10 block w-full appearance-none leading-normal ds-input" type="text" placeholder="Insert todo item ..." bind:value={newTodoTitle} on:keydown={addTodo}>

    <div class="pt-12">
        {#each filteredTodos as todo}
            <div class="todo-item">
                <TodoItem {...todo} on:deleteTodo={handleDeleteTodo} on:toggleComplete={handleToggleComplete} />
            </div>
        {/each}
    </div>
    <Icon data={refresh} scale="3"></Icon>

    <div class="flex items-center justify-between">
        <div><label><input class="inner-container-input" type="checkbox" on:change={checkAllTodos}>Check All</label></div>
        <div>{todosRemaining} items left</div>
    </div>

    <div class="flex items-center justify-between">
        <div class="flex mt-6 justify-start md:justify-center xl:justify-start">
         <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" on:click={() => updateFilter('all')} class:active="{currentFilter === 'all'}">All</button>
         <button class="ml-4 rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-white hover:bg-gray-200 md:text-lg xl:text-base text-gray-800 font-semibold leading-tight shadow-md" on:click={() => updateFilter('active')} class:active="{currentFilter === 'active'}">Active</button>
         <button class="rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base font-semibold leading-tight shadow-md" on:click={() => updateFilter('completed')} class:active="{currentFilter === 'completed'}">Completed</button>
        </div>
      <button on:click={clearCompleted} class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
        Clear Completed
      </button>
    </div>
    </div>
</div>

