export const formatString = (string) => {
    if (!string || typeof string !== 'string') throw new TypeError('A função espera receber uma string!');

    const cleanString = string.trim().toLowerCase();

    return cleanString.charAt(0).toUpperCase() + cleanString.slice(1);
};

export function isDuplicateTask(taskList, newTaskName, taskId = null) {
    if (arguments.length < 2) throw new Error('Argumentos insufientes para a função!');
    if (!Array.isArray(taskList)) throw new TypeError('O primeiro argumento deve ser um array válido!');
    if (typeof newTaskName !== 'string') throw new TypeError('O segundo argumento deve ser uma string!');

    newTaskName = formatString(newTaskName);

    return taskList.some(task => task.name === newTaskName && task.id !== taskId);
};
