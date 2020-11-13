const vscode = require('vscode');

function activate(context) {
	const erbToSerbea = vscode.commands.registerCommand('serbeaExtension.convertErbToSerbea', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			const erbSource = document.getText(selection);
			const serbeaSource = erbSource.replace(/<%/g, "{%").replace(/%>/g, "%}");
			editor.edit(editBuilder => {
				editBuilder.replace(selection, serbeaSource);
			});
		}
	});

	const expressionToPipeline = vscode.commands.registerCommand('serbeaExtension.convertExpressionToPipeline', () => {
		const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			const serbeaSource = document.getText(selection);
			const convertedSource = serbeaSource.replace(/{%=/g, "{{").replace(/%}/g, "}}");
			editor.edit(editBuilder => {
				editBuilder.replace(selection, convertedSource);
			});
		}
	});

	context.subscriptions.push(erbToSerbea);
	context.subscriptions.push(expressionToPipeline);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}