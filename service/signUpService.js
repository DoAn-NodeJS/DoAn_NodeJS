import EmailUtil from "../utils/EmailUtil.js";
import CustomerDAO from '../daos/mongoose/CustomerDAO.js'
import MyUtil from "../utils/MyUtil.js";

export const signUpGetService = (req, res) => {
  res.render("customer/signup");
};

export const signUpPostService = async (req, res) => {
  const username = req.body.txtUsername;
  const password = req.body.txtPassword;
  const name = req.body.txtName;
  const phone = req.body.txtPhone;
  const email = req.body.txtEmail;
  const dbCust = await CustomerDAO.selectByUsernameOrEmail(username, email);
  if (dbCust) {
    MyUtil.showAlertAndRedirect(res, "EXISTS USERNAME OR EMAIL!", "./signup");
  } else {
    const now = new Date().getTime(); // milliseconds
    const token = MyUtil.md5(now.toString());
    const newCust = {
      username: username,
      password: password,
      name: name,
      phone: phone,
      email: email,
      active: 0,
      token: token,
    };
    const newID = await CustomerDAO.insert(newCust);
    if (newID) {
      const result = await EmailUtil.send(email, newID, token);
      if (result) {
        MyUtil.showAlertAndRedirect(res, "VUI LÒNG KIỂM TRA EMAIL", "./login");
      } else {
        MyUtil.showAlertAndRedirect(res, "EMAIL ĐÃ TỒN TẠI", "./signup");
      }
    } else {
      MyUtil.showAlertAndRedirect(res, "THẤT BẠI", "./signup");
    }
  }
};
