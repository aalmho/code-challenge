import { companyNodes } from "../models/data";

export const getActiveNodeStructure = (req, res) => {
  res.status(200).send(companyNodes);
};

export const addNode = (req, res) => {
  res.send("node added");
};

export const getChildsOfNode = (req, res) => {
  res.send("nodes");
};

export const changeParentNode = (req, res) => {
  res.send("parent changed");
};

export default { getActiveNodeStructure, addNode, getChildsOfNode, changeParentNode };
