import { getUser } from './getUser';
import { RAPI } from './robloxObject';
import aetable from './tables/AETable.json';
import academiatable from './tables/AcademiaTable.json';

export const updateNickname = async (member: any) => {
  console.log('WHAT');
  if (!member) return;

  console.log('Member exists');

  const discordId = await member.user.id;

  if (!discordId) return;

  console.log('DiscordId exists');

  const profile: any = await getUser({ DiscordId: discordId });
  console.log(profile);

  if (!profile) return await member.setNickname(`X | ${member.user.username}`);
  //

  const academiaRank: any = await RAPI.getGroupRankId(
    5002385,
    profile.RobloxId
  );
  const aeRank: any = await RAPI.getGroupRankId(5002373, profile.RobloxId); //AE

  console.log(aeRank);
  console.log(academiaRank);

  let robloxProfile: any = await RAPI.getId(profile.DiscordId);
  let robloxName: string = robloxProfile.Username;

  console.log('User is in the database');

  console.log('User has a rank in academia');

  if (!aeRank) console.log('Member is not in AE');

  console.log(aetable);

  // @ts-ignore
  /*if (aetable[`${aeRank}`]) {
    // @ts-ignore
    await member.setNickname(`${aetable[`${aeRank}`]} | ${robloxName}`);
    return;
  }
*/
  if (!academiaRank)
    return await member.setNickname(`X | ${member.user.username}`);

  // @ts-ignore
  if (academiatable[`${academiaRank}`]) {
    // @ts-ignore

    await member.setNickname(
      // @ts-ignore
      `${academiatable[`${academiaRank}`]} | ${robloxName}`
    );
  }
};
