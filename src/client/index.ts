import { Client, Collection } from 'discord.js';
import { connect } from 'mongoose';
import path from 'path';
import { readdirSync } from 'fs';
import { Command, Event, Config } from '../interfaces';
import Configuration from '../config.json';

class ExtendedClient extends Client {
  public commands: Collection<string, Command> = new Collection();
  public events: Collection<string, Event> = new Collection();
  public config: Config = Configuration;
  public aliases: Collection<string, Command> = new Collection();

  public async init() {
    await this.login(this.config.token);
    connect(this.config.mongoURI, {
      // @ts-ignore
      useNewUrlParser: true,
    });
    const commandPath = path.join(__dirname, '..', 'commands');
    readdirSync(commandPath).forEach((dir) => {
      const commands = readdirSync(`${commandPath}/${dir}`).filter((file) =>
        file.endsWith('.ts')
      );
      for (const file of commands) {
        const { command } = require(`${commandPath}/${dir}/${file}`);
        this.commands.set(command.name, command);

        if (command?.aliases.length !== 0) {
          command.aliases.forEach((alias: string) => {
            this.aliases.set(alias, command);
          });
        }
      }
    });

    const eventPath = path.join(__dirname, '..', 'events');
    for (const file of readdirSync(eventPath)) {
      const { event } = await import(`${eventPath}/${file}`);
      this.events.set(event.name, event);
      console.log(event);
      this.on(event.name, event.run.bind(null, this));
    }
  }
}

export default ExtendedClient;
