import { Router } from "express";
import * as API from '../controllers/apiController'

const router = Router();

router.get('/ping', API.ping);

router.get('/todo', API.toDoAll);
router.get('/todo', API.toDoAdd);
router.put('/todo/:id', API.toDoUpdate)
router.delete('/todo/:id', API.toDoDelete);

export default router