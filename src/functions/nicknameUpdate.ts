import { getUser } from './getUser';
import { RAPI } from './robloxObject';
import academiatable from './tables/AcademiaTable.json';
import { GuildMember } from 'discord.js';

export const updateNickname = async (member: GuildMember) => {
  if (!member) return;

  const discordId = await member.user.id;

  if (!discordId) return;

  const profile: any = await getUser({ DiscordId: discordId });

  if (!profile)
    return await member
      .setNickname(`X | ${member.user.username}`)
      .catch((err: any) => {
        console.log(err);
      });
  //

  const academiaRank: any = await RAPI.getGroupRankId(
    5002385,
    profile.RobloxId
  );
  const aeRank: any = await RAPI.getGroupRankId(5002373, profile.RobloxId); //AE

  const robloxProfile: any = await RAPI.getProfileById(profile.RobloxId);

  const robloxName: string = robloxProfile.Username;

  if (!academiaRank)
    return await member
      .setNickname(`X | ${member.user.username}`)
      .catch((err) => {
        console.log(err);
      });

  // @ts-ignore
  if (academiatable[`${academiaRank}`]) {
    // @ts-ignore

    await member
      .setNickname(
        // @ts-ignore
        `${academiatable[`${academiaRank}`]} | ${robloxName}`
      )
      .catch((err) => {
        console.log(err);
      });
  }
};
