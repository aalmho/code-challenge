export type CompanyStructureNode = {
    nodeId: string,
    nodeName: string,
    parentNode: number | false,
    heightOfNode: number,
    managerDepartment?: string,
    developerTechnology?: string
};