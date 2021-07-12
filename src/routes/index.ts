import { Router } from 'express';
import imgController from '../controllers/imgController';

const router = Router();

router.post('/image/dog/upload', imgController.dogUpload);
router.get('/images/dog/list', imgController.dogList);

export default router;
