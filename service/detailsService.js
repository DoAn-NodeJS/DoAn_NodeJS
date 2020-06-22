import ProductDAO from "../daos/mongoose/ProductDAO.js";

export const detailsService = async (req, res) => {
  var _id = req.query.id; // /details?id=XXX
  var product = await ProductDAO.selectByID(_id);
  res.render("customer/details", { prod: product });
};
