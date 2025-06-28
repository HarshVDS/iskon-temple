// // routes/discipleRoutes.js
// import express from 'express';
// import { submitDiscipleForm } from '../controllers/discipleController.js';

// const router = express.Router();

// router.post('/register', submitDiscipleForm);

// export default router;
import express from 'express';
import { submitDiscipleForm } from '../controllers/discipleController.js';

const discipleRouter = express.Router();

discipleRouter.post('/register', submitDiscipleForm);

export default discipleRouter;