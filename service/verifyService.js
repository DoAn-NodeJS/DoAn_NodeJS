import CustomerDAO from "../daos/mongoose/CustomerDAO";
import MyUtil from "../utils/MyUtil";

export const verifyService = async (req, res) => {
  var _id = req.query.id; // /verify?id=XXX&token=XXX
  var token = req.query.token;
  var result = await CustomerDAO.active(_id, token, 1);
  if (result) {
    MyUtil.showAlertAndRedirect(res, "TÀI KHOẢN ĐÃ ĐƯỢC KÍCH HOẠT!", "./login");
  } else {
    MyUtil.showAlertAndRedirect(res, "THẤT BẠI", "./signup");
  }
};
