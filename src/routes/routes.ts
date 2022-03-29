import {
    getUserProfiles,
    createUserProfile,
    security,
    getVerificationProfiles,
    getVerificationProfile,
    getUserProfile,
    getBanned
} from '../controllers';

const routes = (app: any) => {
    app
        .route('/profiles/')
        .get(getUserProfiles)
        .post(security, createUserProfile);

    app.route('/profiles/:RobloxId').get(getUserProfile);

    app.route('/verifications/').get(security, getVerificationProfiles);

    app
        .route('/verifications/:VerificationKey')
        .get(security, getVerificationProfile);

    app
        .route('/bans/:RobloxId')
        .get(getBanned);
};

export default routes;
