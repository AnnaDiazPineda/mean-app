const router = require('express').Router();
const mongojs = require ('mongojs');
//si es online poso la url de la bd. laa bd es diu mean-db
const db = mongojs('mean-db', ['tasks']);

router.get('/tasks', (req, res, next) =>{
    //esto me devuelve todas las tareas
    db.tasks.find((err, tasks) => {
       if(err) return next(err); //lo manda a un manejador de errores de expres
        res.json(tasks);// ok
    });
});

//per id
router.get('/tasks/:id', (req, res, next) => {
    //esto me devuelve todas las tareas
    db.tasks.findOne({_id: req.params.id}, (err, tasks) => {
    if (err) return next(err); //lo manda a un manejador de errores de expres
    res.json(tasks); //todo ok
});

});

//metode de guardar
router.post('/task', (req, res, next) => {
    const task = req.body; //dada a emmagatzemar, task es un objecte
    if(!task.title || !(task.isDone + '')){
        res.status(400).json({
            error: 'bad data'

        });
    }else{
        db.tasks.save(task, (err, task) => {
            if(err) return next (err);
            res.json(task);
        });
    }
});

//metode de eliminar
router.delete('/task/:id', (req, res, next) => {
    db.tasks.remove({_id: mongojs.ObjectId(req.params.id)}, (err, result) => {
        if (err) return next(err);
        res.json(result);
    });
});

//metode de actualitzar
router.put('/task/:id', (req, res, next) => {
    const task = req.body;
    const updateTask = {};

    if(task.isDone){
        updateTask.isDone = task.isDone;
    }
    if(task.title){
        updateTask.title = task.title;
    }
    if(!updateTask){
        res.status(400).json({
            error: 'bad request'
        });
    }else {
        db.tasks.update({_id: mongojs.ObjectId(req.params.id)}, (err, task) => {
            if(err) return next(err);
            res.json(task);
        });
    }
});

module.exports = router;