/** source/routes/posts.ts */
import express from 'express';
import controller from '../controllers/registration';
const router = express.Router();

router.get('/api/codes', controller.getCodes);
router.get('/api/subcodes', controller.getSubCodes);
router.post('/api/registration', controller.postRegistration);
router.get('/api/registrationPrice', controller.getProductPrices);

export = router;