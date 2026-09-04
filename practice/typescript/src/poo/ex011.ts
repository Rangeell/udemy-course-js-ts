/*
Exercise 011 — Task Management System
Difficulty: 🟠 Medium

📝 Enunciado
    Você deve implementar um sistema de gerenciamento de tarefas composto por três classes integradas (User, Task e TaskManager). 
    
    O objetivo principal é praticar o encapsulamento rigoroso, validações de estado, composição e uso de tipos refinados em TypeScript sem recorrer a recursos como interface ou any.

🎯 Objetivo
    - Modelar o fluxo completo de tarefas:
    - Criar usuários com IDs autoincrementaveis.
    - Criar tarefas associadas a um usuário, garantindo uma máquina de estados segura para a transição de status (pending -> in-progress -> completed).
    - Gerenciar o acervo de tarefas centralizado através da classe TaskManager.

📌 Contrato do Problema
    Tipagem: O status da tarefa deve ser obrigatoriamente tipado via Type Alias:
        type TaskStatus = "pending" | "in-progress" | "completed";

    Identificadores: Os IDs de User e Task devem ser numéricos, sequenciais e gerados automaticamente por controle static interno de cada classe.

    Validação de Nomes e Títulos: Nomes de usuários e títulos de tarefas exigem no mínimo 3 caracteres.

    Regras de Transição de Status (Task):
        Toda tarefa inicia como "pending".
        Transições permitidas: 
            "pending" -> "in-progress"
            "pending" -> "completed",
            "in-progress" -> "completed".
            Finalização irreversível: Uma tarefa no status "completed" não pode ser alterada para nenhum outro status.

Operações do Gerenciador (TaskManager):
    Adicionar: Não permite duplicatas (mesmo ID).
    Remover: Lança Error se a tarefa não estiver cadastrada.
    Buscar por ID: Retorna a Task correspondente ou null se não encontrada.
    Filtrar por Usuário: Retorna todas as tarefas pertencentes ao User.
    Contar por Status: Retorna o total consolidado de tarefas para cada status.

📋 Regras Técnicas & Restrições
    Encapsulamento: Propriedades internas (status, listas de tarefas, geradores de ID) devem ser privadas. O status da tarefa só pode ser alterado através de um método dedicado de transição.

    Proibições: É estritamente proibido o uso de any, interface, instanceof, herança (extends) e classes abstratas (abstract).

    Tratamento de Erros: Qualquer violação de validação ou transição inválida deve disparar exceção com throw new Error(...) sem deixar o objeto em estado inconsistente.

    Imutabilidade de Coleção: O código externo não deve ser capaz de modificar o array interno do TaskManager diretamente.
*/

type TaskStatus = 'pending' | 'in-progress' | 'completed'

export class User {
    private static idCount: number = 1;
    readonly id: number;

    constructor(
        private readonly name: string,
    ) {
        if (name.length < 3) throw new RangeError('Nome de usuário deve ter 3 caracteres ou mais.');

        this.id = User.idCount++;
    }
}

export class Task {
    private static idCount: number = 1;
    private readonly _id: number;
    private _status: TaskStatus = 'pending';

    constructor(
        private readonly title: string,
        private readonly _user: User,
    ) {
        if (title.length < 3) throw new RangeError('Título da tarefa deve ter 3 caracteres ou mais.');

        this._id = Task.idCount++;
    }

    // GETTERS
    get status(): TaskStatus { return this._status; }
    get id(): number { return this._id; }
    get user(): User { return this._user; }

    changeStatus(status: TaskStatus): void {
        if (this._status === 'completed') throw new Error('Essa tarefa já foi completada.');
        if (this._status === 'in-progress' && status === 'pending') {
            throw new Error('Transição inválida. Essa tarefa já está em progresso.');
        }

        this._status = status;
    }
}

export class TaskManager {
    private tasks: Task[] = [];

    add(task: Task): void {
        if (this.tasks.some(currentTask => currentTask.id === task.id)) {
            throw new Error('Tarefa já existe.');
        }

        this.tasks.push(task);
    }

    findById(id: number): Task | null {
        const foundTask = this.tasks.find(currentTask => currentTask.id === id);
        if (!foundTask) return null;
        return foundTask;
    }

    findByUser(user: User): Task[] {
        return this.tasks.filter(currentTask => currentTask.user === user);
    }

    remove(task: Task): void {
        const taskExists = this.tasks.some(currentTask => currentTask.id === task.id);

        if (!taskExists) throw new Error('Essa tarefa não existe no banco de dados.');

        this.tasks = this.tasks.filter(currentTask => currentTask.id !== task.id);
    }

    countByStatus(status: TaskStatus): number {
        const requestTasks = this.tasks.filter(currentTask => currentTask.status === status);

        return requestTasks.length;
    }
}

//* EXAMPLES

const user = new User('Rangel');
const task = new Task('Estudar TypeScript', user);
const manager = new TaskManager();

manager.add(task);
task.changeStatus('in-progress');
console.log(task.status); // "in-progress"

task.changeStatus('completed');
console.log(task.status); // "completed" 

// Busca por ID:
const foundTask = manager.findById(task.id);
console.log(foundTask); // Deve retornar a própria Task

// Task inexistente:
const notFound = manager.findById(999);
console.log(notFound); // null

// Tarefas de um usuário:
const user2 = new User('Breno');
const task2 = new Task('Estudar React', user2);
const task3 = new Task('Praticar JavaScript', user);
manager.add(task2);
manager.add(task3);
console.log(manager.findByUser(user)); // Deve retornar as Tasks pertencentes ao user

// Contagem por status:
console.log(manager.countByStatus('completed')); // 1
console.log(manager.countByStatus('pending')); // 1
console.log(manager.countByStatus('in-progress')); // 1

// Transições inválidas:
task.changeStatus('pending'); // Deve lançar Error, pois a Task já está completed

// Duplicação:
manager.add(task); // Deve lançar Error, pois a Task já está registrada

// Remoção:
manager.remove(task);
console.log(manager.findById(task.id)); // null