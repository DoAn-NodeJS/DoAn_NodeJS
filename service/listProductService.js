const CategoryDAO = require("../daos/mongoose/CategoryDAO");
const ProductDAO = require("../daos/mongoose/ProductDAO");

export const listproductService = async (req, res)=> {
    const categories = await CategoryDAO.selectAll();
    const _cid = req.query.catID; // /listproduct?catID=XXX
    const products = await ProductDAO.selectByCatID(_cid);
    res.render('customer/listproduct', { cats: categories, prods: products });
  }