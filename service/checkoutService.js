import OrderDAO from "../daos/mongoose/OrderDAO";
import MyUtil from "../utils/MyUtil";

export const checkoutService = async (req, res) => {
  if (req.session.customer) {
    const now = new Date().getTime(); // milliseconds
    const total = MyUtil.getTotal(req.session.mycart);
    const order = {
      cdate: now,
      total: total,
      status: "PENDING",
      customer: req.session.customer,
      items: req.session.mycart,
    };
    const result = await OrderDAO.insert(order);
    if (result) {
      delete req.session.mycart;
      MyUtil.showAlertAndRedirect(res, "Thành công!", "./home");
    } else {
      MyUtil.showAlertAndRedirect(res, "Thất bại!", "./mycart");
    }
  } else {
    res.redirect("./login");
  }
};
