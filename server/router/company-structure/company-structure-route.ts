import {Router} from 'express';
import { getActiveNodeStructure, getChildsOfNode } from '../../controllers/company-structure.controller';

const companyStructureRoute = Router();

companyStructureRoute.get('/', getActiveNodeStructure);
companyStructureRoute.get('/:nodeId', getChildsOfNode);

export default companyStructureRoute;