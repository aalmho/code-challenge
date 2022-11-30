import {Router} from 'express';
import { getActiveNodeStructure } from '../../controllers/company-structure.controller';

const companyStructureRoute = Router();

companyStructureRoute.get('/', getActiveNodeStructure);

export default companyStructureRoute;