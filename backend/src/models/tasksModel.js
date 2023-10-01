const connection = require('./connection')

// pegar todas as tasks da tabela
const getAll = async () => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    return tasks[0]
}

const createTask = async (task) => {
    const { title } = task
    const dateUTC = new Date(Date.now()).toUTCString()
    const createdTask = await connection.execute('INSERT INTO tasks(title, status, created_at) VALUES (?, ?, ?)', [title, 'Pendente', dateUTC])
    return {insertId: createdTask[0].insertId}
}

const deleteTask = async (id) => {
    const removedTask = await connection.execute('DELETE FROM tasks WHERE id = ?', [id])
    return removedTask
}
const updateTask = async (id,task) => {
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?'
    const {title, status} = task
    const updatedTask = await connection.execute(query, [title, status, id])
    // const updatedTask  = await connection
    return updatedTask
}

module.exports = {
    getAll,
    createTask,
    deleteTask,
    updateTask
}