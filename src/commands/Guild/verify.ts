import { Command } from '../../interfaces';
import {
  getUser,
  getVerification,
  generateVerification,
} from '../../functions';
import { GuildMember } from 'discord.js';
import { Embeds } from '../../embeds/embeds';

export const command: Command = {
  name: 'verify',
  aliases: ['v'],
  run: async (client, message, args) => {
    const response = new Embeds(message.channel);

    const serverMember: GuildMember | null = message.member;

    if (serverMember?.id === undefined)
      return response.failure('User not found.', `Are you sure you're real?`);

    const userResponse = new Embeds(message.author);
    const profile = await getUser({ DiscordId: serverMember.id });

    if (profile)
      return response.warn(
        'You are already verified.',
        'If you have a new Roblox ID, please use the ae!reset command.'
      );

    let verification: any = await getVerification({
      DiscordId: serverMember.id,
    });

    if (verification)
      return userResponse.verification(verification.VerificationKey);

    await generateVerification(serverMember.id).then((v: any) =>
      userResponse.verification(v.VerificationKey)
    );
  },
};
