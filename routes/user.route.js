const express = require('express');
const router = express.Router();

//require the controllers WHICH WE DID NOT CREATE YET!
const user_controller = require('../controllers/user.controller');


//a simple test url to check that all of our files are communicating correctly

// router.get('/userData',user_controller.user_data);
router.get('/test', user_controller.test);

router.get('/allUser',user_controller.user_all);

router.post('/create',user_controller.user_create);

router.get('/:id',user_controller.user_details);

router.put('/:id/update',user_controller.user_update);

router.post('/login', user_controller.loginUser);

router.delete('/:id/delete',user_controller.user_delete);

module.exports = router;



