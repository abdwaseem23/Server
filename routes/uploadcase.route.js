const express = require('express');
const router = express.Router();

//require the controllers WHICH WE DID NOT CREATE YET!
const uploadcase_controller = require('../controllers/uploadcase.controller');


//a simple test url to check that all of our files are communicating correctly

// router.get('/userData',user_controller.user_data);
router.get('/test', uploadcase_controller.test);

router.get('/allUser',uploadcase_controller.user_all);

router.post('/create',uploadcase_controller.uploadcase_create);

router.get('/:id',uploadcase_controller.user_details);

router.put('/:id/update',uploadcase_controller.user_update);

router.post('/login', uploadcase_controller.loginUser);

router.delete('/:id/delete',uploadcase_controller.user_delete);

module.exports = router;