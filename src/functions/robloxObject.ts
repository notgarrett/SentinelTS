import axios from 'axios';

export class RAPI {
  static async getProfileByUsername(name: string) {
    console.log(name);
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://api.roblox.com/users/get-by-username?username=${name}`,
        responseType: 'json',
      })
        .then(function (response) {
          if (response.data.Id) resolve(response.data);
          resolve(false);
        })
        .catch((err) => {
          return false;
        });
    });
  }

  static async getProfileById(robloxId: string) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://api.roblox.com/users/${robloxId}`,
        responseType: 'json',
      })
        .then(function (response) {
          if (response.data.Id) resolve(response.data);
          resolve(false);
        })
        .catch((err) => {
          return false;
        });
    });
  }

  static async getGroupRankId(groupId: number, robloxId: number) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'get',
        url: `https://groups.roblox.com/v2/users/${robloxId}/groups/roles`,
        responseType: 'json',
      })
        .then(function (response) {
          console.log(response);
          if (response.data.data) {
            response.data.data.forEach((g: any) => {
              console.log(g);
              if (g.group.id === groupId) resolve(g.role.rank);
            });
          }
          resolve(false);
        })
        .catch((err) => {
          return false;
        });
    });
  }
}
