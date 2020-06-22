import CategoryDAO from "../daos/mongoose/CategoryDAO.js";
import ProductDAO from "../daos/mongoose/ProductDAO.js";

export const listproductService = async (req, res)=> {
    const categories = await CategoryDAO.selectAll();
    const _cid = req.query.catID; // /listproduct?catID=XXX
    const products = await ProductDAO.selectByCatID(_cid);
    res.render('customer/listproduct', { cats: categories, prods: products });
  }