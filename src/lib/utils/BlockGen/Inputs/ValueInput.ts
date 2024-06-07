import { BlockType } from "$lib/enums/BlockTypes";
import BaseInput from "./BaseInput";
import argFilter from "../../helpers/argFilter";

interface ValueInputJSON {
	name: string;
	type: "input_value";
	check?: BlockType | BlockType[];
}
/**
 * Creates a new value input
 * Blockly documentation: https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks#block_inputs
 * @export
 * @class ValueInput
 * @extends {BaseInput}
 */
export default class ValueInput extends BaseInput {
	private _shadowBlockType: string
	constructor(name: string, type: BlockType | BlockType[] | string | string[], opt_shadowBlockType?: string) {
		super(name, "value_input", type);

		this.setMethod(this.getDefinition);
		super.setName(name);
		this._shadowBlockType = opt_shadowBlockType ?? ""
	}

	/**
	 * Returns an object ready to be stringified for direct blockly usage
	 *
	 * @return {*}  {ValueInputJSON}
	 * @memberof ValueInput
	 */
	getDefinition(): ValueInputJSON {
		const result: ValueInputJSON = {
			type: "input_value",
			name: super.name
		};

		const filtered = argFilter(super.type as BlockType[]);
		// We return without the "check" if we have no types :)
		if (filtered.length === 0) return result;

		result.check = [...filtered];
		return result;
	}
	public get shadowBlockType() {
		return this._shadowBlockType
	}
}
