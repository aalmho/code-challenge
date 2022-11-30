import { companyNodes } from "../models/data";

export const getActiveNodeStructure = (req, res) => {
  res.status(200).send(companyNodes);
};

export const addNode = (req, res) => {
  // TODO
};

export const getChildsOfNode = (req, res) => {
  const nodeId = req.params.nodeId;
  const childNodes = companyNodes.filter((node) => node.parentNode == nodeId);
  res.status(200).send(childNodes);
};

export const changeParentNode = (req, res) => {
  // TODO
};

export default { getActiveNodeStructure, addNode, getChildsOfNode, changeParentNode };
