import {model} from 'mongoose';
import {Banlist} from '../../interfaces';
import {banlistModel} from '../../models';
import {Request, Response} from 'express';

const BanModel = model<Banlist>('Banlist', banlistModel);

export const getBanned = (req: Request, res: Response) => {
    BanModel.findOne(req.params, (err: any, docs: any) => {
        console.log(docs)
        if (err) throw err;
        if (docs != null) return res.send(docs);
        else return res.send({status: 'failed', message: 'User does not exist.'});
    });
};
