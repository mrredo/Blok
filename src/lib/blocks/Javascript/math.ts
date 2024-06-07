import { BlockShape, BlockType } from "$lib/enums/BlockTypes";
import type { BlockDefinition } from "$lib/types/BlockDefinition";
import type { CategoryDefinition } from "$lib/types/CategoryDefinition";
import NumberInput from "$lib/utils/BlockGen/Inputs/NumberInput";

const blocks: BlockDefinition[] = [
	{
		id: "number",
		text: "{NUM}",
		args: [new NumberInput("NUM", 0)],
		shape: BlockShape.Floating,
		output: BlockType.Number,
		inline: true,
		colour: "#5ba58c",
		tooltip: "Allows you to make a number input.",
		helpUrl:
			"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String",
		code: (args) => {
			return `${args.NUM}`;
		}
	}
];

const category: CategoryDefinition = {
	name: "Math",
	colour: "#5B67A5"
};

export default { blocks, category };
