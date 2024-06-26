import type { WebContainer } from "@webcontainer/api";

export class NodeFileSystemManager {
	container: WebContainer;
	// any type due to the dynamic nature of the file system
	// eslint-disable-next-line
	files: Record<string, any> = {};

	constructor(container: WebContainer) {
		this.container = container;
	}

	setFile(name: string, content: string, toDirectory?: string) {
		// dumb code
		void name;
		void content;
		void toDirectory;
		throw new Error("Method to be implemented!");
	}

	compileFiles() {
		this.container.mount(this.files);
	}
}
