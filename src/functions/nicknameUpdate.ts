import { getUser } from './getUser';
import { RAPI } from './robloxObject';
import aetable from './tables/AETable.json';
import academiatable from './tables/AcademiaTable.json';
import { GuildMember } from 'discord.js';

export const updateNickname = async (member: GuildMember) => {
  console.log('WHAT');
  if (!member) return;

  console.log('Member exists');

  const discordId = await member.user.id;

  if (!discordId) return;

  console.log('DiscordId exists');

  const profile: any = await getUser({ DiscordId: discordId });
  console.log(profile);

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

  console.log(aeRank);
  console.log(academiaRank);

  const robloxProfile: any = await RAPI.getProfileById(profile.RobloxId);
  console.log(robloxProfile);

  const robloxName: string = robloxProfile.Username;
  console.log(robloxName);

  console.log('User is in the database');

  console.log('User has a rank in academia');

  if (!aeRank) console.log('Member is not in AE');

  // @ts-ignore
  if (aetable[`${aeRank}`]) {
    // @ts-ignore
    return await member
      .setNickname(
        // @ts-ignore
        `${aetable[`${aeRank}`]} | ${robloxName}`
      )
      .catch((err) => {
        console.log(err);
      });
  }

  console.log(aetable);

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
