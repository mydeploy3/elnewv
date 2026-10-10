const LandingCards = () => {
    return (
      <div>
        <section className=" overflow-hidden">
          <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
            <div className="grid grid-cols-3 gap-4 mx-auto">
              <a href="#_">
                <img
                  src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="bg-red-500 rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                  
                />
              </a>
              <a href="#_">
                <img
                  src=""
                  className="rounded-xl bg-blue-800 -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                  
                />
              </a>
              <a href="#_">
                <img
                  src=""
                  className="rounded-xl rotate-6 bg-green-500 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                />
              </a>
            </div>

          </div>
        </section>
      </div>
    );
  };
  
  export default LandingCards;
  