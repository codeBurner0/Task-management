const todoModel=require('../Models/todoModel')

module.exports.getTodo=async(req,res)=>{
    const todo=await todoModel.find({})
    res.send(todo)
}

module.exports.saveTodo=async(req,res)=>{
    const {text,description,image}=req.body
    todoModel.create({text,description,image}).then((data)=>{
        res.send(data);
    })   
}


module.exports.updateTodo=async(req,res)=>{
    const {_id,text,description,image}=req.body
    todoModel.findByIdAndUpdate(_id,{text,description,image}).then(()=>{
        res.send("update succesfull...")
    }).catch((err)=>{console.log(err)})
    
}

module.exports.deleteTodo=async(req,res)=>{
    const {_id}=req.body
    todoModel.findByIdAndDelete(_id).then(()=>{
        res.send("delete succesfull...")
    }).catch((err)=>{console.log(err)})
    
}
