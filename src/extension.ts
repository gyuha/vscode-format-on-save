'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    let onFormat: boolean = vscode.workspace.getConfiguration('format-on-save')['on'];
    let extensions: string[] = vscode.workspace.getConfiguration('format-on-save')['extentions'];

    if (onFormat) {
        vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
            for (var i = 0; i < extensions.length; i++) {
                console.log(extensions[i]);
                var pattern: string = "." + extensions[i] + "$";
                var match = pattern.length > 0 && new RegExp(pattern).test(document.fileName);
                if (match) {
                    console.log(i);
                    vscode.commands.executeCommand('editor.action.trimTrailingWhitespace');
                    vscode.commands.executeCommand('editor.action.format')
                    vscode.window.activeTextEditor.document.save();
                    return;
                }
            }
        });
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}