import { Event, Command } from '../interfaces';
import { Message } from 'discord.js';

export const event: Event = {
  name: 'messageCreate',
  run: (client, message: Message) => {
    console.log('Do we even get here??');
    if (
      message.author.bot ||
      !message.guild ||
      !message.content.startsWith(client.config.prefix)
    )
      return;
    console.log('Do we even get here???');

    const args: Array<string> | undefined = message.content
      .slice(client.config.prefix.length)
      .trim()
      .split(/ +/g);

    console.log(client.commands);

    // @ts-ignore
    const cmd: string | undefined = args.shift().toLowerCase();
    if (!cmd) return;
    const command = client.commands.get(cmd) || client.aliases.get(cmd);
    if (command) (command as Command).run(client, message, args);
  },
};
