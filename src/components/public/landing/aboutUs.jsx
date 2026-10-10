const AboutUs = () => {
    return (
        <div className="flex flex-col items-center md:items-stretch  my-10 gap-y-14">
           <div className="title text-center text-black">
                    <p className="font-bold text-[#0163FD]">WHY CHOSE US</p>
                    <p>Benefits of online tutoring
                        services with us</p>
                </div>
            <div className="flex ">
                <div className="iconsleft relative hidden md:flex flex-1">
                    <img class="w-8 h-8 rounded-full mx-auto absolute left-4" src="https://loremflickr.com/320/320/girl" alt="" />
                    <img class="w-12 h-12 rounded-full mx-auto absolute left-[50%] top-14" src="https://loremflickr.com/320/320/girl" alt="" />
                    <img class="w-20 h-20 rounded-full mx-auto absolute bottom-0 -left-6" src="https://loremflickr.com/320/320/girl" alt="" />

                </div>
                <div className="flex justify-center flex-1">
                    <div class="p-5   rounded text-center text-gray-500 max-w-sm">
                        <img class="w-16 h-16 rounded-full mx-auto" src="https://loremflickr.com/320/320/girl" alt="" />
                        <div class="text-sm mt-5">
                            <a href="#"
                                class="font-medium leading-none  text-[#0163FD] transition duration-500 ease-in-out">Jane
                                Doe
                            </a>
                            <p>Blogger &amp; Youtuber</p>
                        </div>

                        <p class="mt-2 text-sm text-gray-900">Lorem ipsum dolor sit amet, consecte adipisicing elit. Voluptatibus quia
                            Maiores et perferendis eaque.</p>

                        <div class="flex mt-4 justify-center">
                            <a href="#" class="w-6 mx-1">

                            </a>
                            <a href="#" class="w-6 mx-1">

                            </a>
                            <a href="#" class="w-6 mx-1">

                            </a>
                            <a href="#" class="w-6 mx-1">

                            </a>
                            <a href="#" class="w-6 mx-1">

                            </a>
                        </div>

                    </div>
                </div>
                <div className="iconsright hidden md:flex flex-1 relative overflow-hidden">
                    <img class="w-8 h-8 rounded-full mx-auto absolute right-4" src="https://loremflickr.com/320/320/girl" alt="" />
                    <img class="w-12 h-12 rounded-full mx-auto absolute right-[50%] top-14" src="https://loremflickr.com/320/320/girl" alt="" />
                    <img class="w-20 h-20 rounded-full mx-auto absolute bottom-0 -right-6" src="https://loremflickr.com/320/320/girl" alt="" />

                </div>
            </div>
        </div>
    );
}

export default AboutUs;