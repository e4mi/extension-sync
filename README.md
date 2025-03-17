# Extension Sync

Save installed extensions in your User Settings JSON file.

## Backup

1. Install your favorite extensions
2. Run the `Extension Sync: Save to User Settings JSON` command from the command palette
3. Backup your settings.json file
  - Windows: `%APPDATA%\Code\User\settings.json`
  - macOS: `$HOME/Library/Application\ Support/Code/User/settings.json`
  - Linux: `$HOME/.config/Code/User/settings.json`

## Restore

1. Restore your settings.json file
3. Install this extension
3. Run the `Extension Sync: Load from User Settings JSON` command from the command palette

## Settings

```json
{
  "extensionSync": [
    "catppuccin.vscode",
    "esbenp.prettier-vscode",
    // ...
  ]
}
```