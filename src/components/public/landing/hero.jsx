import kid from "../../../assets/images/Landing/kid.png"
const Hero = () => {
    return (
        <>
            <section class=" flex max-w-7xl mx-auto sm:my-10  sm:px-6 lg:px-8">

                <div
                    class=" mx-auto   max-w-7xl px-4 sm:px-6  lg:px-8  flex gap-3      lg:flex flex-col lg:flex-row">
                    <div class="sm:text-center mt-6 space-y-10 lg:text-left">
                        <h1 class="text-4xl tracking-tight  font-extrabold trac text-black sm:text-5xl md:text-6xl">
                            <span class="block xl:inline ">Data to enrich</span>
                            <span class="block text-[#0163FD]  my-4"> your online <br/></span>
                            <span class="block text-[#0163FD] xl:inline">business</span>
                        </h1>
                        <p
                            class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat aliqua.
                        </p>
                        {/* <!-- Button Section --> */}
                        <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <div class="rounded-md shadow">
                                <a href="#"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black hover:bg-gray-600 md:py-4 md:text-lg md:px-10">
                                    Get started
                                </a>
                            </div>
                            <div class="mt-3 sm:mt-0 sm:ml-3">
                                <a href="#"
                                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                                    Live demo
                                </a>
                            </div>
                        </div>
                        {/* <!-- End of Bu:tton Section --> */}
                    </div>

                    {/* <!--   Image Section     --> */}
                    <div class="lg:inset-y-0 w-2/2 md:w-2/3 self-center lg:right-0   my-4">
                        <img class=" w-full h-full    lg:w-[550px] xl:w-[900px] lg:h-full" src={kid} alt="kid image" />
                    </div>
                    {/* <!--   End of Image Section     --> */}
                </div>

            </section>
        </>
    );
}

export default Hero;