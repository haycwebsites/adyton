import { useHayc } from "../../hayc/config-context";

const Brand = () => {
  const { img, config } = useHayc();
  const b = config.brandConfig;

  return (
    <div className="bg-khaki pt-[54px] pb-[44px]">
      <div
        className="Container grid grid-cols-2 sm:grid-cols-2  md:grid-cols-5 2xl:grid-cols-5 items-center justify-center gap-[30px]"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span />
        <span />
        <img src={img(b.brand1)} alt="" className="" />
        <img src={img(b.brand2)} alt="" className="" />
        <img src={img(b.brand3)} alt="" className="" />
      </div>
    </div>
  );
};

export default Brand;
