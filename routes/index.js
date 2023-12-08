var express = require("express");
const {
  Register,
  Login,

} = require("../controllers/users.controllers");
var router = express.Router();



/* GET home page. */
router.post("/register", Register);
router.post("/login", Login);



//put 
/*
router.get('/test', passport.authenticate('jwt', { session: false }),
inRole(ROLES.USER),
Test)
router.get('/admin', passport.authenticate('jwt', { session: false }),
inRole(ROLES.ADMIN),
Admin)
*/
module.exports = router;
