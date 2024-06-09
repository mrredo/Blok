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

		let toolbox = await new Toolbox();

		let toolboxJson = await toolbox.generate();
		let workspace = Blockly.inject("blocklyDiv", {
			...OPTIONS,
			toolbox: toolboxJson
		});
		toolbox.registerCallbacks(workspace)
	});
</script>

<div id="blocklyDiv" class="w-full h-dvh" />
