import React from "react";
import "./App.css";
import CompanyStructurePage from "./pages/CompanyStructurePage";
import CompanyStructureStore from "./stores/CompanyStructureStore";

const App = () => {
  const companyStructureStore = new CompanyStructureStore();
  return (
    <div className="App">
      <CompanyStructurePage store={companyStructureStore} />
    </div>
  );
};

export default App;
