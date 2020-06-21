import CustomerDAO from "../daos/mongoose/CustomerDAO";
import MyUtil from "../utils/MyUtil";

const loginGetService = (req, res) => {
  res.render("customer/login");
};

const loginPostService = async(req, res) => {
    const username = req.body.txtUsername;
    const password = req.body.txtPassword;
    const customer = await CustomerDAO.selectByUsernameAndPassword(
      username,
      password
    );
    if (customer && customer.active == 1) {
      req.session.customer = customer;
      MyUtil.showAlertAndRedirect(res, "Đăng Nhập Thành Công!", "./home");
    } else {
      MyUtil.showAlertAndRedirect(res, "THẤT BẠI", "./login");
    }
};

export { loginGetService, loginPostService };
