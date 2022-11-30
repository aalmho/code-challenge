import React, { FC } from "react";
import { CompanyStructureNode } from "../../../server/types";
import Node from "./Node";

interface TreeComponentProps {
  nodes: CompanyStructureNode[];
}

const NodeTree: FC<TreeComponentProps> = ({ nodes }) => {
  return (
    <>
      {nodes.map((node) => (
        <Node node={node} key={node.nodeId} />
      ))}
    </>
  );
};

export default NodeTree;
