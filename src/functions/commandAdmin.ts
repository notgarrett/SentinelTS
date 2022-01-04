const roleName = 'Guardian';

export const checkBotAdmin = (msg: any) => {
  return !!msg.member.roles.cache.find((r: any) => r.name === roleName);
};
