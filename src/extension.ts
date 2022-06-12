// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "kartoon" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    'kartoon.kartoon',
    async () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      const selection = await vscode.window.showQuickPick([
        'React-javascript',
        'React-typescript',
      ]);
      let folderPath: String | undefined =
        vscode.workspace.workspaceFolders?.map(folder => folder.uri.path)[0];
      let terminal = vscode.window.createTerminal({
        name: 'kartoon',
        hideFromUser: false,
        shellPath: 'bash',
      });
      if (folderPath) {
        if (selection === 'React-javascript') {
          terminal.sendText(`npx create-react-app .`);
        } else if (selection === 'React-typescript') {
          terminal.sendText(`npx create-react-app . --template typescript`);
        }
        terminal.show();
      } else
        vscode.window.showInformationMessage(
          'Fadlan folder cusub ku fur vscode'
        );
    }
  );

  context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
