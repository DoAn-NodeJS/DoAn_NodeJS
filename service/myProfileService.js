import CustomerDAO from "../daos/mongoose/CustomerDAO";
import MyUtil from "../utils/MyUtil";

const myProfileGetService = (req,res)=>{
    res.render("customer/myprofile");
}

const myProfilePostService = async(req,res)=>{
    const curCust = req.session.customer;
    if (curCust) {
      const username = req.body.txtUsername;
      const password = req.body.txtPassword;
      const name = req.body.txtName;
      const phone = req.body.txtPhone;
      const email = req.body.txtEmail;
      const newCust = {
        _id: curCust._id,
        username: username,
        password: password,
        name: name,
        phone: phone,
        email: email,
        active: curCust.active,
        token: curCust.token,
      };
      const result = await CustomerDAO.update(newCust);
      if (result) {
        req.session.customer = newCust;
        MyUtil.showAlertAndRedirect(res, "Thành công!", "./home");
      }
    }
    MyUtil.showAlertAndRedirect(res, "oop, đã xảy ra lỗi!", "./myprofile");
}

export {
    myProfileGetService,
    myProfilePostService
}