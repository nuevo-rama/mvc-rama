//CONTROLADOR de funciones para login y register
const userController ={

    login: (req,res)=>{
        res.render("./user/login")
    },

    register:(req,res)=>{
        res.render("./user/register")
    }
}

module.exports=userController;