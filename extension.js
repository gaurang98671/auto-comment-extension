// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "auto-comment" is now active!');

	vscode.commands.registerCommand('auto-comment.comment', () => {
		// Show a message in the editor
		vscode.window.showInformationMessage('Comments added!');
		// Get the active text editor
		const editor = vscode.window.activeTextEditor;

		// Get the selected text
		const selectedText = editor.document.getText(editor.selection);

		// Edit the selected text
		const editedText = selectedText.toUpperCase();

		// Replace the selected text with the edited text
		editor.edit(editBuilder => {
		editBuilder.replace(editor.selection, editedText);
		});

		// Use the selected text in your extension
		console.log(selectedText);
	  });
	
	
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
