const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require('sequelize')
const TaskModel = require('./models/task')

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'my-database.db'
})

const tasks = TaskModel(sequelize, DataTypes)

app.set('view engine', 'ejs')

app.get('/tarefas', async (req, res) => {
   // const allTasks = await tasks.findAll()

   const allTasks = await sequelize.query('SELECT * FROM Tasks')

    res.json({ allTasks })
})

app.get('/tarefa/:id', async (req, res) => {
    const taskId = req.params.id 
    const task = await tasks.findByPk(taskId)

    res.render('tarefa', { id: task.id, name: task.name })
})

app.listen(8080, () => {
    console.log('Iniciando o servidor express')
})
