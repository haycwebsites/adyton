import { Helmet } from "react-helmet-async";
import { useHayc } from "../../hayc/config-context";

const HelmetChanger = ({ title }) => {
  const { t, config } = useHayc();
  const pageTitle = title != null ? title : t(config.mainConfig.pageTitle);
  const displayTitle = `${t(config.mainConfig.siteName)} - ${pageTitle}`;
  return (
    <Helmet>
      <title>{displayTitle}</title>
    </Helmet>
  );
};

export default HelmetChanger;
