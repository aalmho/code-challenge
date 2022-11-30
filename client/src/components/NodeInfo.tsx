import React, { FC } from "react";
import { CompanyStructureNode } from "../../../server/types";

interface NodeInfoProps {
  node: CompanyStructureNode;
}

const NodeInfo: FC<NodeInfoProps> = ({ node }) => {
  return (
    <div>
      <p>Name: {node.nodeName}</p>
      <p>ParentNode: {node.parentNode}</p>
      <p>Height: {node.heightOfNode}</p>
      {node.managerDepartment && (
        <p>Manager of department: {node.managerDepartment}</p>
      )}
      {node.developerTechnology && (
        <p>Technology: {node.developerTechnology}</p>
      )}
    </div>
  );
};

export default NodeInfo;
