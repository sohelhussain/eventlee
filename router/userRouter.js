const express = require('express');
const router = express.Router();
const { userController, userSignup, userSignin, userSignout, usersendmail, userforgetlink, userresetpassword} = require('../controller/userController');
const { isAuthenticated } = require('../middleware/auth');



router.get('/', userController);
// router.post()

router.post("/user/signup", userSignup);
router.post("/user/signin", userSignin);
router.get("/user/signout", isAuthenticated, userSignout);
router.post("/user/send-mail", usersendmail);
router.post("/user/forgot-password-link/:userId", userforgetlink);
router.post("/user/reset-password/:userId", isAuthenticated, userresetpassword);


module.exports = router;
