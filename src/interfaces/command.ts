import { Message } from 'discord.js';
import Client from '../client';

interface Run {
  // @ts-ignore
  (client: Client, message: Message, args: string[]);
}

export interface Command {
  name: string;
  description?: string;
  aliases?: string[];
  run: Run;
}
