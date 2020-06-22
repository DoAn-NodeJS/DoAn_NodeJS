import express from "express";
import { homeService } from "../service/homeService.js";
import { listproductService } from "../service/listProductService.js";
import { searchService } from "../service/searchService.js";
import { detailsService } from "../service/detailsService.js";
import { signUpGetService, signUpPostService } from "../service/signUpService.js";
import { verifyService } from "../service/verifyService.js";
import { loginGetService, loginPostService } from "../service/loginService.js";
import { logOutService } from "../service/logOutService.js";
import {
  myProfileGetService,
  myProfilePostService,
} from "../service/myProfileService.js";
import { myOrderService } from "../service/myOrderService.js";
import { myCartService, addTowCartService, removeTowCartService, addSingleToCart } from "../service/cartService.js";
import { checkoutService } from "../service/checkoutService.js";

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

export default router;
