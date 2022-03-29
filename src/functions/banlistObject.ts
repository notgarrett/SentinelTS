import {model} from 'mongoose';
import {Banlist} from '../interfaces';
import {banlistModel} from '../models';

const BanlistModel = model<Banlist>('Banlist', banlistModel);

export class banlist {
    static async add(robloxId: string) {
        if (await BanlistModel.findOne({RobloxId: robloxId}) != null) return false // whoops
        await BanlistModel.findOneAndUpdate(
            {RobloxId: robloxId},
            {Empyria: true},
            {upsert: true}
        );
        return true;
    }

    static async remove(robloxId: string) {
        console.log(await BanlistModel.findOne({RobloxId: robloxId}))
        if (await BanlistModel.findOne({RobloxId: robloxId}) == null) return false // If user doesnt exist, return false
        await BanlistModel.findOneAndDelete(
            {RobloxId: robloxId},
        );
        return true;
    }
}
