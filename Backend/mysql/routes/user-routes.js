const router = require("express").Router();

// import controllers
const { user } = require("../controllers");

// define routes
router.get("/users", user.getAllUserData);
router.delete("/users/:id", user.deleteUserDataById);
router.post("/users/", user.postNewData);
router.patch("/users/", user.patchData);

// export router
module.exports = router;
