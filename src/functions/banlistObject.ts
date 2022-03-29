import {model} from 'mongoose';
import {Banlist} from '../interfaces';
import {banlistModel} from '../models';

const BanlistModel = model<Banlist>('Banlist', banlistModel);

export class banlist {
    static async add(robloxId: string) {
        if (await BanlistModel.findOne({RobloxId: robloxId})) return false
        BanlistModel.updateOne(
            {RobloxId: robloxId},
            {Empyria: true},
            {upsert: true}
        );
        return true;
    }

    static async remove(robloxId: string) {
        console.log(await BanlistModel.findOne({RobloxId: robloxId}))
        if (await BanlistModel.findOne({RobloxId: robloxId}) == null) return false
        await BanlistModel.updateOne(
            {RobloxId: robloxId},
            {Empyria: false},
            {upsert: true}
        );
        return true;
    }
}
