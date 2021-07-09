import { Router } from 'express';

const router = Router();

import imgController from '../controllers/imgController';

router.post('image/dog/upload', imgController.upload);
router.get('images/dog/list', imgController.list);

export default router;