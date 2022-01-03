import {
  getUserProfiles,
  createUserProfile,
  security,
  getVerificationProfiles,
  getVerificationProfile,
} from '../controllers';

const routes = (app: any) => {
  app
    .route('/profiles/')
    .get(getUserProfiles)
    .post(security, createUserProfile);

  app.route('/verifications/').get(security, getVerificationProfiles);

  app
    .route('/verifications/:VerificationKey')
    .get(security, getVerificationProfile);
};

export default routes;
