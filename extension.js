const vscode = require("vscode");

function list() {
  return vscode.extensions.all
    .filter((e) => !e.packageJSON.isBuiltin)
    .map((e) => e.id)
    .sort((a, b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
}

async function save() {
  await vscode.workspace
    .getConfiguration()
    .update("extensionSync", list(), vscode.ConfigurationTarget.Global);
  vscode.window.showInformationMessage("Extensions saved.");
}

async function load() {
  const saved = vscode.workspace.getConfiguration().get("extensionSync") || [];
  const current = list();
  saved.forEach(
    (id) =>
      !current.includes(id) &&
      vscode.commands.executeCommand(
        "workbench.extensions.installExtension",
        id
      )
  );
  current.forEach(
    (id) =>
      !saved.includes(id) &&
      vscode.commands.executeCommand(
        "workbench.extensions.uninstallExtension",
        id
      )
  );
  vscode.window.showInformationMessage("Extensions loaded.");
}

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand("extensionSync.save", save)
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("extensionSync.load", load)
  );
}

module.exports = { activate, deactivate: () => {} };
