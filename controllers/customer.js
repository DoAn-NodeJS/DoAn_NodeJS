import express from "express";
import { homeService } from "../service/homeService";
import { listproductService } from "../service/listProductService";
import { searchService } from "../service/searchService";
import { detailsService } from "../service/detailsService";
import { signUpGetService, signUpPostService } from "../service/signUpService";
import { verifyService } from "../service/verifyService";
import { loginGetService, loginPostService } from "../service/loginService";
import { logOutService } from "../service/logOutService";
import {
  myProfileGetService,
  myProfilePostService,
} from "../service/myProfileService";
import { myOrderService } from "../service/myOrderService";
import { myCartService, addTowCartService, removeTowCartService, addSingleToCart } from "../service/cartService";
import { checkoutService } from "../service/checkoutService";

const router = express.Router();
// routes
router.get(["/", "/home"], homeService);
// product
router.get("/listproduct", listproductService);
router.post("/search", searchService);
router.get("/details", detailsService);
// customer
router.get("/signup", signUpGetService);
router.post("/signup", signUpPostService);
router.get("/verify", verifyService);
router.get("/login", loginGetService);
router.post("/login", loginPostService);
router.get("/logout", logOutService);
// myprofile
router.get("/myprofile", myProfileGetService);
router.post("/myprofile", myProfilePostService);

// myorders
router.get("/myorders", myOrderService);
// mycart
router.get("/mycart", myCartService);
router.post("/add2cart", addTowCartService);
router.get("/remove2cart", removeTowCartService);
router.get("/checkout", checkoutService);
router.post("/addSingleToCart", addSingleToCart)

module.exports = router;
