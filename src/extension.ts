'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    vscode.workspace.onDidSaveTextDocument((document: vscode.TextDocument) => {
        let onFormat: boolean = vscode.workspace.getConfiguration('formatOnSave')['on'];
        if (onFormat != true) {
            return;
        }

        let extensions: string[] = vscode.workspace.getConfiguration('formatOnSave')['extensions'];

        for (let i = 0; i < extensions.length; i++) {
            let pattern: string = "." + extensions[i] + "$";
            let match = pattern.length > 0 && new RegExp(pattern).test(document.fileName);
            if (match) {
                vscode.commands.executeCommand('editor.action.trimTrailingWhitespace');
                vscode.commands.executeCommand('editor.action.formatDocument')
                vscode.window.activeTextEditor.document.save();
                return;
            }
        }
  });
}

// this method is called when your extension is deactivated
export function deactivate() {
}
