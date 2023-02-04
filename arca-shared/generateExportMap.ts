// Generates export maps for all folders
// folder `enums` => `enums.ts`
// folder `models` => `models.ts`
// index.ts for the package

import fs from 'fs';
import path from 'path';

const FILE_EXTENSION = '.ts';
const IGNORE_FOLDERS = ['node_modules', 'data'];

const rootFilesAndFolders = fs.readdirSync(__dirname, { withFileTypes: true });
rootFilesAndFolders.sort((a, b) => a.name.localeCompare(b.name));

const indexExports = [];

for (const f of rootFilesAndFolders)
{
	if (f.isDirectory() && !IGNORE_FOLDERS.includes(f.name))
	{
		const folderName = f.name;

		const indexExportText = `export { } from './${folderName}';`;
		indexExports.push(indexExportText);

		prepareFolderExport(folderName);
	}
}

function prepareFolderExport(folderName: string)
{
	const folderContents = fs.readdirSync(path.join(__dirname, folderName), { withFileTypes: true });
	folderContents.sort((a, b) => a.name.localeCompare(b.name));
	const exports = [];

	for (const f of folderContents)
	{
		if (f.isFile() && f.name.endsWith(FILE_EXTENSION))
		{
			const fileNameWithoutExtension = path.basename(f.name, FILE_EXTENSION);
			const exportText = `export * from './${folderName}/${fileNameWithoutExtension}';`;
			exports.push(exportText);
		}
	}

	fs.writeFileSync(`${folderName}${FILE_EXTENSION}`, exports.join('\n'), { encoding: 'utf-8' });
}

fs.writeFileSync('index.ts', indexExports.join('\n'), { encoding: 'utf-8' });