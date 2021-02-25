//CONTROLADOR PARA ...funciones que se van a encargar de manejar a los productos
const productosController = {

    index: (req,res)=>{
        res.render("./products/listadoProductos")
    },

    product: (req,res)=>{
        res.render("./products/product")
    },
    
    shoppingCart: (req,res)=>{
        res.render("./products/ShoppingCart")
    },

    productFormNew: (req,res)=>{
        res.render("./products/productFormNew")
    },

    productFormEdit: (req,res)=>{
        res.render("./products/productFormEdit")
    },
}

module.exports=productosController; //se exportará hacia routes