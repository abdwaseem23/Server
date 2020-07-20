const express = require('express');
const router = express.Router();

//require the controllers WHICH WE DID NOT CREATE YET!
const makedonation_controller = require('../controllers/makedonation.controller');

// router.get('/userData',user_controller.user_data);
router.get('/test', makedonation_controller.test);

router.get('/allUser',makedonation_controller.user_all);

router.post('/create',makedonation_controller.uploadcase_create);

router.get('/:id',makedonation_controller.user_details);

router.put('/:id/update',makedonation_controller.user_update);

router.post('/login', makedonation_controller.loginUser);

router.delete('/:id/delete',makedonation_controller.user_delete);

module.exports = router;

