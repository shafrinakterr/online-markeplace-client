import Marquee from "react-fast-marquee";

const CoreFeature = () => {
    return (
        <div className="mt-20 mb-10 ">
            <h1 className="md:text-5xl  text-3xl font-semibold mb-12 text-center"> Core Features</h1>
            <div className="flex flex-wrap justify-center gap-5">
                <Marquee >
                    <div className="flex  items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_01.svg" alt="" className="w-16" />
                        <h3 className="text-xl mt-5  font-bold text-gray-800 dark:text-white">
                            Boostrap 5
                        </h3>

                    </div>
                    <div className="flex  items-center  ml-5 bg-blue-400  transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_02.svg" alt="" className="w-16" />
                        <h3 className="text-xl mt-5 text-center font-bold text-gray-800 dark:text-white">
                            Well Documented
                        </h3>

                    </div>
                    <div className="flex items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_03.svg" alt="" className="w-16" />
                        <h3 className="text-xl text-center mt-5  font-bold text-gray-800 dark:text-white">
                            Cross Browser
                            Support
                        </h3>

                    </div>
                    <div className="flex items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_04.svg" alt="" className="w-16" />
                        <h3 className="text-xl mt-5  font-bold text-gray-800 dark:text-white">
                            W3C Validation
                        </h3>

                    </div>
                    <div className="flex items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_05.svg" alt="" className="w-16" />
                        <h3 className="text-xl text-center mt-5  font-bold text-gray-800 dark:text-white">
                            Fully Responsive
                        </h3>

                    </div>
                    <div className="flex items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_06.svg" alt="" className="w-16" />
                        <h3 className="text-xl text-center mt-5  font-bold text-gray-800 dark:text-white">
                            Transition Effect
                            Ready
                        </h3>

                    </div>
                    <div className="flex w-56 items-center  ml-5 bg-blue-400 nsition ease-in duration-75 hover:bg-primary-color h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_07.svg" alt="" className="w-16" />
                        <h3 className="text-xl text-center mt-5  font-bold text-gray-800 dark:text-white">
                            Clean Code
                        </h3>

                    </div>
                    <div className="flex items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_08.svg" alt="" className="w-16" />
                        <h3 className="text-xl text-center mt-5  font-bold text-gray-800 dark:text-white">
                            PHP Contact
                            Form
                        </h3>

                    </div>
                    <div className="flex items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_09.svg" alt="" className="w-16" />
                        <h3 className="text-xl text-center mt-5  font-bold text-gray-800 dark:text-white">
                            Modern & Clean
                            Design
                        </h3>

                    </div>
                    <div className="flex items-center  ml-5 bg-blue-400 transition ease-in duration-75 hover:bg-primary-color w-56 h-48 text-center flex-col  border shadow-sm rounded-[50px] p-4 md:p-5  dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img src="https://html.creativegigstf.com/jobi/img/icon_10.svg" alt="" className="w-16" />
                        <h3 className="text-xl text-center mt-5  font-bold text-gray-800 dark:text-white">
                            Figma File
                            Included
                        </h3>

                    </div>
                </Marquee>
                


            </div>
        </div>
    );
};

export default CoreFeature;