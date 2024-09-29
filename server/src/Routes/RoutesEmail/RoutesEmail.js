import express from 'express';
import PostHandlerEmail from '../../handlers/handlersEmail/PostHandlerEmail';
import DeleteHandlerEmail from '../../handlers/handlersEmail/DeleteHandlerEmail';
import PutHandlerEmail from '../../handlers/handlersEmail/PutHandlerEmail';
import GetHandlerEmail from '../../handlers/handlersEmail/GetHandlerEmail';
const router = express.Router();

router.post('/', PostHandlerEmail);
router.delete('/:id', DeleteHandlerEmail);
router.put('/:id', PutHandlerEmail);
router.get('/', GetHandlerEmail);

export default router;
