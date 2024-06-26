import AppFooter from "components/AppFooter/AppFooter";
import AppHeader from "components/Header/AppHeader";
import { Outlet, ScrollRestoration} from "react-router-dom";
import "/src/index.css";

const infoSite = (): JSX.Element => {
  return (
    <div className="App flex flex-col items-stretch min-h-screen">
      <AppHeader />
      <ScrollRestoration />
      {/* Banner */}
        <Outlet />
      <AppFooter />
    </div>
  );
};
export default infoSite;