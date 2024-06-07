import BaseInput from "./BaseInput";

export default class Image extends BaseInput {
	private readonly _src: string;
	private readonly _settings: {
		alt: string;
		width: number;
		height: number;
	};
	/**
	 * Adds an number input to the block.
	 * The user will be able to enter a number without needing a variable.
	 * @param {string} src
	 * @param {{"alt": string,"width": number,"height": number}} settings
	 * @memberof NumberInput
	 */
	constructor(src: string, settings: { alt: string; width: number; height: number }) {
		super(undefined, "image_input");

		this.setMethod(this.getDefinition);
		this._src = src;
		this._settings = settings;
	}

	private getDefinition(): {
		name: string;
		type: "field_image";
		src: string;
		alt: string;
		width: number;
		height: number;
	} {
		return {
			name: this._settings.alt,
			type: "field_image",
			src: this._src,
			...this._settings
		};
	}

	get name(): string {
		return this._settings.alt;
	}
}
