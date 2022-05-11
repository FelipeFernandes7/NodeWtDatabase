const { Router } = require("express");
const { create, remove,update,users } = require("./controller/userController");

const router = Router();
router.get('/usuario/:id', users);
router.put('/update/:id',update);
router.post('/register',create);
router.delete('/remove/:id', remove);





module.exports = router;