import apple from "../../../assets/apple.png";
const Aboutconventions = () => {
  return (
    <div>
      <section>
        <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-3xl">
          <div className="flex w-full flex-cols-1 gap-5 mx-auto lg:flex-cols-3 ">
            <div className="p-4">
              <img className="object-cover object-center w-80 mb-8 rounded-lg" src={apple} alt="blog" />
            </div>
            <div className="p-4">
              <img className="object-cover object-center w-80 mb-8 rounded-lg" src={apple} alt="blog" />
            </div>
            <div className="p-4">
              <img className="object-cover object-center w-80 mb-8 rounded-lg" src={apple} alt="blog" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Aboutconventions;
