import { companyNodes } from "../models/data";

export const getActiveNodeStructure = (req, res) => {
  res.status(200).send(companyNodes);
};

export const addNode = (req, res) => {
  res.send("node added");
};

export const getChildsOfNode = (req, res) => {
  const nodeId = req.params.nodeId;
  const childNodes = companyNodes.filter((node) => node.parentNode == nodeId);
  res.send(childNodes);
};

export const changeParentNode = (req, res) => {
  res.send("parent changed");
};

export default { getActiveNodeStructure, addNode, getChildsOfNode, changeParentNode };
