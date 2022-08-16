import express from 'express';

import { authRouter } from './auth';
import { userRouter } from './users';
import { addressRouter } from './address';

export const services = express.Router();

services.use('/auth', authRouter);
services.use('/users', userRouter);
services.use('/address', addressRouter);
