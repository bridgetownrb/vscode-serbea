const vscode = require('vscode');

function activate(context) {
	console.log('Congratulations, w00t!');

	let disposable = vscode.commands.registerCommand('serbeaExtension.convertErbToSerbea', () => {
		// Get the active text editor
		console.log("running the extension!")
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			const erbSource = document.getText(selection);
			console.log("Here's the ERB", erbSource)
			const serbeaSource = erbSource.replace(/<%/g, "{%").replace(/%>/g, "%}");
			console.log("Here's the source", serbeaSource)
			editor.edit(editBuilder => {
				editBuilder.replace(selection, serbeaSource);
			});
		}
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}