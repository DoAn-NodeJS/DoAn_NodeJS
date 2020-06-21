import CategoryDAO from '../daos/mongoose/CategoryDAO'
import ProductDAO from '../daos/mongoose/ProductDAO'

export const homeService = async (req, res)=>{
    const categories = await CategoryDAO.selectAll();
    const newproducts = await ProductDAO.selectTopNew(3);
    const hotproducts = await ProductDAO.selectTopHot(3);
    return res.render('customer/home', { cats: categories, newprods: newproducts, hotprods: hotproducts });
}