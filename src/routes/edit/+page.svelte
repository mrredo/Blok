<script lang="ts">
	import "blockly/blocks";
	import Blockly from "blockly/core";
	import { onMount } from "svelte";
	import { OPTIONS } from "$lib/constants/workspace";
	import loadBlockRecord from "$lib/utils/helpers/loadBlockRecord";
	import loadBlocks from "$lib/utils/helpers/loadBlocks";
	import Toolbox from "$lib/utils/ToolboxGen/Toolbox";

	onMount(async () => {
		await loadBlockRecord()
		await loadBlocks()

		console.log(1)
		let toolbox = await new Toolbox();
		console.log(2)

		let toolboxJson = await toolbox.generate();
		console.log(3)
		let workspace = Blockly.inject("blocklyDiv", {
			...OPTIONS,
			toolbox: toolboxJson
		});
		console.log(4)
		toolbox.registerCallbacks(workspace)
		console.log(5)
	});
</script>

<div id="blocklyDiv" class="w-full h-dvh" />
