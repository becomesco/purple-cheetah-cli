import * as arg from 'arg';
import * as path from 'path';
import * as util from 'util';
import * as fs from 'fs';
import { Options } from './interfaces/options';
import { CreateProject } from './create-project';

function parseArgs(rawArgs: string[]): Options {
  const args = arg(
    {
      '--help': Boolean,
      '--name': String,
      '-h': '--help',
      '-n': '--name',
    },
    {
      argv: rawArgs.slice(2),
    },
  );
  return {
    help: args['--help'] || false,
    name: args['--name'] || '',
  };
}

async function printHelp() {
  console.log(
    (
      await util.promisify(fs.readFile)(path.join(__dirname, 'help.txt'))
    ).toString(),
  );
}

export async function cli(args: string[]) {
  const options = parseArgs(args);
  if (options.help === true) {
    await printHelp();
    return;
  }
  try {
    await CreateProject.create(options);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
