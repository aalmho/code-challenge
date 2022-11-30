import {Router} from 'express';
import companyStructureRoute from './company-structure';

const defaultRoute = Router();

defaultRoute.use("/api", companyStructureRoute);

export default defaultRoute;