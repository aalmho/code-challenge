import { observer } from "mobx-react-lite";
import React, { FC, useEffect } from "react";
import CompanyStructureStore from "../stores/CompanyStructureStore";

interface CompanyStructurePageProps {
  store: CompanyStructureStore;
}

const CompanyStructurePage: FC<CompanyStructurePageProps> = ({ store }) => {
  useEffect(() => {
    store.getNodes();
  }, []);

  return <div>Company structure page</div>;
};

export default observer(CompanyStructurePage);
