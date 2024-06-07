import { BlockType } from "$lib/enums/BlockTypes";

export default class BaseInput {
	//! Replace unknown by an enum with all the types of inputs!
	private _method: () => unknown;
	private _fieldText: string;
	private _name: string;
	private _type: string[];
	private _inputType: string;
	constructor(name?: string, inputType?: string, type?:  BlockType | BlockType[] | string | string[]) {
		this._name = name ?? "";
		this._fieldText = "";
		this._method = () => {};
		this._type = [type ?? [BlockType.Any]].flat() ?? [BlockType.Any];
		this._inputType = inputType ?? "undefined";
	}

	protected setMethod(generationMethod: () => unknown) {
		this._method = generationMethod;
	}
	/*
	this function currently is meant for Mutator use
	*/
	public setField(text: string): BaseInput	 {
		this._fieldText = text;
		return this;
	}
	/*
this function currently is meant for Mutator use
*/
	public get name() {
		return this._name;
	}
	public get type() {
		return this._type;
	}
	public setName(newName: string) {
		this._name = newName;
	}
	public getField() {
		return this._fieldText;
	}
	public generate(): unknown {
		return this._method();
	}
	public get inputType() {
		return this._inputType
	}
}
