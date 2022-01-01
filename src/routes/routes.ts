import { getUserProfiles, createUserProfile, security } from '../controllers';

const routes = (app: any) => {
  app
    .route('/profiles/')
    .get(getUserProfiles)
    .post(security, createUserProfile);

  app.route('/verifications/').get().post();
};

export default routes;
