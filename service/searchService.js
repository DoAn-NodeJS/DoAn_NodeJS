import CategoryDAO from "../daos/mongoose/CategoryDAO.js";
import ProductDAO from "../daos/mongoose/ProductDAO.js";

export const searchService = async (req, res) => {
  var categories = await CategoryDAO.selectAll();
  var keyword = req.body.txtKeyword;
  var products = await ProductDAO.selectByKeyword(keyword);
  res.render("customer/listproduct", { cats: categories, prods: products });
};
