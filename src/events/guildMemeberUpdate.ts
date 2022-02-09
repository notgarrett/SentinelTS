import { Event } from '../interfaces';
import { removeRoles, addRoles } from '../functions/manageRoles';
import { updateNickname } from '../functions/nicknameUpdate';

export const event: Event = {
  name: 'guildMemberUpdate',
  run: (client, oldMember, newMember) => {
    if (newMember.user.bot) return;

    if (!newMember) return; //return delete function.

    let removedRoles = oldMember.roles.cache.filter(
      (role: any) => !newMember.roles.cache.has(role.id)
    );

    if (removedRoles.size > 0) {
      removedRoles = removedRoles.map((r: any) => r.id);
      removeRoles(removedRoles, newMember);
      updateNickname(newMember);
      return;
    }

    // If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
    let addedRoles = newMember.roles.cache.filter(
      (role: any) => !oldMember.roles.cache.has(role.id)
    );

    if (addedRoles.size > 0) {
      addedRoles = addedRoles.map((r: any) => r.id);
      addRoles(addedRoles, newMember);
      updateNickname(newMember);
      return;
    }
  },
};
