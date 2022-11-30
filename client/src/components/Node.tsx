import React, { FC, useState } from "react";
import { CompanyStructureNode } from "../../../server/types";
import NodeInfo from "./NodeInfo";
import NodeTree from "./NodeTree";

interface NodeProps {
  node: CompanyStructureNode;
}

const Node: FC<NodeProps> = ({ node }) => {
  const [showChildren, setShowChildren] = useState(false);

  const onClick = () => {
    setShowChildren(!showChildren);
  };

  return (
    <>
      <div
        onClick={onClick}
        style={{ cursor: "pointer", marginBottom: "50px" }}
      >
        <NodeInfo node={node} />
      </div>
      <ul>
        {showChildren && node.children && <NodeTree nodes={node.children} />}
      </ul>
    </>
  );
};

export default Node;
