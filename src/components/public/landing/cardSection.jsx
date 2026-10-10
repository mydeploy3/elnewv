import math from "../../../assets/images/Landing/Math.png"
const CardSection = () => {
    return (
        <>
            {/* <!-- Card Blog --> */}
            <div className=" flex  flex-col justify-center items-center sm:my-14">
                <div className="title text-center text-black">
                    <p className="font-bold text-[#0163FD]">WHY CHOSE US</p>
                    <p>Benefits of online tutoring
                        services with us</p>
                </div>
                <div>
                    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        {/* <!-- Grid --> */}
                        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 ">
                            {/* <!-- Card --> */}

                            <div class="bg-[#0163FD] max-w-xs border  rounded-lg shadow-lg">
                                <div className="p-8">
                                    <div className="bg-white w-fit mb-4 rounded-xl shadow-md shadow-black ">
                                        <img className=" p-2" src={math} alt="icon" />
                                    </div>
                                    <div className="sm:text-xl text-white  ">
                                        <p className="font-bold">One-on-one Teaching</p>
                                        <p className="">All of our special education experts have a degree in special education</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- End : --> */}


                            {/* <!-- Card --> */}
                            <div class="bg-[#FD0101]  max-w-xs border  rounded-lg shadow-lg">
                                <div className="p-8">
                                    <div className="bg-white w-fit mb-4 rounded-xl shadow-md shadow-black ">
                                        <img className=" p-2" src={math} alt="icon" />
                                    </div>
                                    <div className="sm:text-xl text-white  ">
                                        <p className="font-bold">One-on-one Teaching</p>
                                        <p className="">All of our special education experts have a degree in special education</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Card --> */}

                            {/* <!-- Card --> */}
                            <div class="bg-[#FD017A]   max-w-xs border  rounded-lg shadow-lg">
                                <div className="p-8">
                                    <div className="bg-white w-fit mb-4 rounded-xl shadow-md shadow-black ">
                                        <img className=" p-2" src={math} alt="icon" />
                                    </div>
                                    <div className="sm:text-xl text-white  ">
                                        <p className="font-bold">One-on-one Teaching</p>
                                        <p className="">All of our special education experts have a degree in special education</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Card --> */}

                            {/* <!-- Card --> */}
                            <div class="bg-[#FD9801]  max-w-xs border  rounded-lg shadow-lg">
                                <div className="p-8">
                                    <div className="bg-white w-fit mb-4 rounded-xl shadow-md shadow-black ">
                                        <img className=" p-2" src={math} alt="icon" />
                                    </div>
                                    <div className="sm:text-lg text-white  ">
                                        <p className="font-bold">One-on-one Teaching</p>
                                        <p className="">All of our special education experts have a degree in special education</p>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- End Card --> */}


                        </div>
                        {/* <!-- End Grid --> */}
                    </div>
                    {/* <!-- End Card Blog --> */}
                </div>
            </div>
        </>
    );
}

export default CardSection