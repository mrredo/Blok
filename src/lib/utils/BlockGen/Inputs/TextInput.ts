import BaseInput from "./BaseInput";

interface TextInputObject {
	type: "field_input";
	name: string;
	text: string;
	//TODO Change it into a project-wide setting
	spellcheck: false;
}

export default class TextInput extends BaseInput {
	private readonly _text: string;

	constructor(name: string, defaultValue: string) {
		super(name, "text_input");

		this.setMethod(this.getDefinition);
		super.setName(name);
		this._text = defaultValue;
	}

	private getDefinition(): TextInputObject {
		return {
			type: "field_input",
			name: super.name,
			text: this._text,
			spellcheck: false
		};
	}

}
