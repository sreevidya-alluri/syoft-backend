const Product = require("../models/product");

const createProduct = async(req,res)=>{
    const { title, description, inventoryCount } = req.body;

  try {
    const product = await Product.create({ title, description, inventoryCount });
    res.status(201).json({ message: 'Product created successfully', product });
  } catch (error) {
    res.status(400).json({ error: 'Product creation failed' });
  }
};

const getProduct= async(req,res) =>{
       try{
        const products  = await Product.find();
        res.status(200).json(products);
    }catch(error){
        res.status(500).json({error: "Server Error"});
    }
}

const updateProduct = async(req,res)=>{
    const {id} = req.params;
    const {title,description,inventoryCount} = req.body;
    try{
        const product = await Product.findByIdAndUpdate(id,{title,description,inventoryCount}, {new:true});
        res.status(200).json({message: "Product updated successfully",product})

    }catch(error){
         res.status(400).json({error: "Product Update Failed"})
        }
}

const deleteProducts = async(req,res)=>{
    const {id} = req.params;
    try{
        await Product.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted successfully' });
    }catch(error){
        res.status(400).json({ error: 'Product deletion failed' });

    }
}

module.exports = {createProduct,getProduct,updateProduct,deleteProducts}