import { Router } from "express";
import * as API from '../controllers/apiController'

const router = Router();

router.get('/ping', API.ping);

export default router