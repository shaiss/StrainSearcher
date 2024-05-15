import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { StrainList } from "./strain/StrainList";
import { StrainCreate } from "./strain/StrainCreate";
import { StrainEdit } from "./strain/StrainEdit";
import { StrainShow } from "./strain/StrainShow";
import { SearchList } from "./search/SearchList";
import { SearchCreate } from "./search/SearchCreate";
import { SearchEdit } from "./search/SearchEdit";
import { SearchShow } from "./search/SearchShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"MedicalCannabisStrainInfo"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Strain"
          list={StrainList}
          edit={StrainEdit}
          create={StrainCreate}
          show={StrainShow}
        />
        <Resource
          name="Search"
          list={SearchList}
          edit={SearchEdit}
          create={SearchCreate}
          show={SearchShow}
        />
      </Admin>
    </div>
  );
};

export default App;
