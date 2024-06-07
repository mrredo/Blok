import type { BlockDefinition, DefBlock } from "$lib/types/BlockDefinition";
import BlockRecord from "../BlockGen/Blocks/BlockRecord";
/**
 * Loads and generates all the blocks to the Blockly library so they can be used in the workspaces.
 *
 * @export
 * @return {*}  {Promise<void>}
 */
export default async function loadBlockRecord(): Promise<void> {
	// Get all files from blocks file
	const modules = import.meta.glob("../../blocks/**/**/*.ts");

	for (const path in modules) {
	// 	// Initialize the exports
		const module = await modules[path]();
	// 	// Get all the blocks from the files
	// 	// @ts-expect-error Module is undefined and the red color pisses me off
		const blocksArray: BlockDefinition[] = module.default.blocks as BlockDefinition[];

		
		for (const blockDef of blocksArray) {
			if ((blockDef as DefBlock).id) {
				const blDef = blockDef as DefBlock;
				BlockRecord[blDef.id] = blockDef;
			}
		}

	}

}
