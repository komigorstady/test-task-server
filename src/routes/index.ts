import { Router } from 'express';
import imgController from '../controllers/imgController';

const router = Router();

router.post('image/dog/upload', imgController.upload);
router.get('images/dog/list', imgController.list);

export default router;
