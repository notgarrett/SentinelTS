import Discord, { MessageEmbed, TextBasedChannels, User } from 'discord.js';
const url: string =
  'https://www.roblox.com/games/5079873220/AE-The-Sentinel-Verification';
const url2: string = 'https://www.roblox.com/games/5037618249/data';
const footer: string = 'Developed by ArtimusPhilosophus';
const author: string = 'The Sentinel';

export class Embeds {
  channel: TextBasedChannels | User;
  constructor(channel: TextBasedChannels | User) {
    this.channel = channel;
  }

  notification(title: string, message: string) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(author)
      .setColor(6708479)
      .setTitle(title)
      .setDescription(message)
      .setTimestamp()
      .setFooter(footer);

    this.channel.send({ embeds: [embed] });
  }

  warn(title: string, message: string) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(author)
      .setColor(4220927)
      .setTitle(title)
      .setDescription(message)
      .setTimestamp()
      .setFooter(footer);

    this.channel.send({ embeds: [embed] });
  }

  success(title: string, message: string) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(author)
      .setColor(2555702)
      .setTitle(title)
      .setDescription(message)
      .setTimestamp()
      .setFooter(footer);

    this.channel.send({ embeds: [embed] });
  }

  failure(title: string, message: string) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(author)
      .setColor(16722998)
      .setTitle(title)
      .setDescription(message)
      .setTimestamp()
      .setFooter(footer);

    this.channel.send({ embeds: [embed] });
  }

  verification(key: unknown) {
    let embed = new Discord.MessageEmbed()
      .setAuthor(author)
      .setColor(6708479)
      .setURL(url)
      .setTitle(url)
      .setDescription(`Type ${key} in chat in the game listed above to verify!`)
      .setTimestamp()
      .setFooter(footer);
    this.channel.send({ embeds: [embed] });
  }
}
