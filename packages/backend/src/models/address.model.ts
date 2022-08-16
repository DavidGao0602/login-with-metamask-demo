import { Model } from 'sequelize';

export class AddressModel extends Model {
	public discordId!: string; // Note that the `null assertion` `!` is required in strict mode.
	public address!: string; // Note that the `null assertion` `!` is required in strict mode.
}
