import { NextFunction, Request, Response } from 'express';

import { AddressModel } from '../../models/address.model';

export const find = (req: Request, res: Response, next: NextFunction) => {
	// If a query string ?discordId=... is given, then filter results
	const whereClause =
		req.query && req.query.discordId
			? {
					where: { discordId: req.query.discordId },
			  }
			: undefined;

	return AddressModel.findAll(whereClause)
		.then((address: AddressModel[]) => res.json(address))
		.catch(next);
};

export const create = (req: Request, res: Response, next: NextFunction) =>
	AddressModel.create(req.body)
		.then((address: AddressModel) => res.json(address))
		.catch(next);
