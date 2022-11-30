import { CompanyStructureNode } from '../types';

export const companyNodes: CompanyStructureNode[]  = [
    {
        nodeId: '1',
        nodeName: 'Lone',
        parentNode: false,
        heightOfNode: 0,
        managerDepartment: 'all of it'
    },
    {
        nodeId: '2',
        nodeName: 'Peter',
        parentNode: 1,
        heightOfNode: 1,
        managerDepartment: 'risk'
    },
    {
        nodeId: '3',
        nodeName: 'Signe',
        parentNode: 1,
        heightOfNode: 1,
        managerDepartment: 'DEV'
    },
    {
        nodeId: '4',
        nodeName: 'Anders',
        parentNode: 3,
        heightOfNode: 2,
        developerTechnology: 'Python'
    },
    {
        nodeId: '5',
        nodeName: 'Louise',
        parentNode: 3,
        heightOfNode: 2,
        developerTechnology: 'Ruby'
    }
];