import MyUtil from "../utils/MyUtil";
import ProductDAO from "../daos/mongoose/ProductDAO";
export const myCartService = async (req, res) => {
  if (req.session.mycart && req.session.mycart.length > 0) {
    const total = MyUtil.getTotal(req.session.mycart);
    res.render("customer/mycart", { total: total });
  } else {
    res.redirect("./home");
  }
};
export const addTowCartService = async (req, res) => {
  const _id = req.body.txtID;
  const quantity = parseInt(req.body.txtQuantity);
  const product = await ProductDAO.selectByID(_id);
  // create empty cart if not exists in the session, otherwise get out mycart from the session
  // const mycart = [];
  if (req.session.mycart) {
    const mycart = req.session.mycart;
    const index = mycart.findIndex((x) => x.product._id == _id); // check if the _id exists in mycart
    if (index == -1) {
      // not found, push newItem
      const newItem = { product: product, quantity: quantity };
      mycart.push(newItem);
    } else {
      // increasing the quantity
      mycart[index].quantity += quantity;
    }
    req.session.mycart = mycart;
  } else {
    const newItem = { product: product, quantity: quantity };
    req.session.mycart = [newItem];
  }
  // console.log("addTowCartService -> req.session.mycart", req.session.mycart) // debug session cart
  res.redirect("./home");
};
export const addSingleToCart = async (req, res) => {
  const _id = req.body.txtID;
  const quantity = 1;
  const product = await ProductDAO.selectByID(_id);
  // create empty cart if not exists in the session, otherwise get out mycart from the session
  // const mycart = [];
  if (req.session.mycart) {
    const mycart = req.session.mycart;
    const index = mycart.findIndex((x) => x.product._id == _id); // check if the _id exists in mycart
    if (index == -1) {
      // not found, push newItem
      const newItem = { product: product, quantity: quantity };
      mycart.push(newItem);
    } else {
      // increasing the quantity
      mycart[index].quantity += quantity;
    }
    req.session.mycart = mycart;
  } else {
    const newItem = { product: product, quantity: quantity };
    req.session.mycart = [newItem];
  }
  // console.log("addTowCartService -> req.session.mycart", req.session.mycart) // debug session cart
  res.redirect("./home");
};
export const removeTowCartService = async (req, res) => {
  if (req.session.mycart) {
    const mycart = req.session.mycart;
    const _id = req.query.id; // /remove2cart?id=XXX
    const index = mycart.findIndex((x) => x.product._id == _id);
    if (index != -1) {
      // found, remove item
      mycart.splice(index, 1);
      req.session.mycart = mycart;
    }
  }
  res.redirect("./mycart");
};
