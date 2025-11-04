import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import Header from "presentation/components/shared/header";
import Container from "presentation/layout/container";
import "react-datetime/css/react-datetime.css";

const DashboardLayout: React.FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("Pokemon Registry")}</title>
      </Helmet>
      <div className="flex">
        <Container className="w-full">
          <Header className="w-full" />
          <Outlet />
        </Container>
      </div>
    </>
  );
};

export default DashboardLayout;
