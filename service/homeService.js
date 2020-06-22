import CategoryDAO from '../daos/mongoose/CategoryDAO.js'
import ProductDAO from '../daos/mongoose/ProductDAO.js'

export const homeService = async (req, res)=>{
    const categories = await CategoryDAO.selectAll();
    const newproducts = await ProductDAO.selectAll();
    const hotproducts = await ProductDAO.selectTopHot(3);
    return res.render('customer/home', { cats: categories, newprods: newproducts, hotprods: hotproducts });
}