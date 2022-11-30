import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import CompanyStructureStore from "../stores/CompanyStructureStore";
import NodeTree from "../components/NodeTree";

interface CompanyStructurePageProps {
  store: CompanyStructureStore;
}

const CompanyStructurePage: FC<CompanyStructurePageProps> = ({ store }) => {
  useEffect(() => {
    store.getNodes();
  }, []);

  return (
    <>
      <h2>Active tree</h2>
      <NodeTree nodes={store.nodes} />
    </>
  );
};

export default observer(CompanyStructurePage);
