import OrderDAO from '../daos/mongoose/OrderDAO.js';
export const myOrderService = async(req,res)=>{
    const cust = req.session.customer;
  if (cust) {
    const orders = await OrderDAO.selectByCustID(cust._id);
    const _id = req.query.id; // /myorders?id=XXX
    if (_id) {
      const order = await OrderDAO.selectByID(_id);
    }
    res.render("customer/myorders", { orders: orders, order: order });
  } else {
    res.redirect("./home");
  }
}