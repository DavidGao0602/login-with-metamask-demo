import express from 'express';

import * as controller from './controller';

export const addressRouter = express.Router();

/** GET /api/address */
addressRouter.route('/').get(controller.find);

/** POST /api/address */
addressRouter.route('/').post(controller.create);

