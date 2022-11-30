import {Router} from 'express';
import companyStructureRoute from './company-structure-route';

const defaultCompanyStructureRoute = Router();

defaultCompanyStructureRoute.use("/company-structure", companyStructureRoute);

export default defaultCompanyStructureRoute;