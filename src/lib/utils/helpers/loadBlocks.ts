import type { BlockDefinition, DefBlock } from "$lib/types/BlockDefinition";
import Block from "$lib/utils/BlockGen/Blocks/Block";
import BlockRecord from "../BlockGen/Blocks/BlockRecord";
/**
 * Loads and generates all the blocks to the Blockly library so they can be used in the workspaces.
 *
 * @export
 * @return {*}  {Promise<void>}
 */
export default async function loadBlocks(): Promise<void> {
	// Get all files from blocks file
	const modules = import.meta.glob("../../blocks/**/**/*.ts");

	for (const path in modules) {
		// Initialize the exports
		const module = await modules[path]();
		// Get all the blocks from the files
		// @ts-expect-error Module is undefined and the red color pisses me off
		const blocksArray: BlockDefinition[] = module.default.blocks as BlockDefinition[];

		// First, populate the BlockRecord
		

		for (const blockDefKey of Object.keys(BlockRecord)) {
			const blockDef = BlockRecord[blockDefKey]
			const block = new Block(blockDef);
			block.generate();
		}
	}
	

}
