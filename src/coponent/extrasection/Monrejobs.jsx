import { BiEditAlt } from 'react-icons/bi';
import { TbEdit } from 'react-icons/tb';
import { GrMicrophone } from 'react-icons/gr';
import { TiDocumentText } from 'react-icons/ti';
import { FiVideo } from 'react-icons/fi';
const Monrejobs = () => {
    return (
        <div className="mt-10 mb-10  font-semibold">
            <h1 className="text-5xl mb-10">Explore job by<span className='text-primary-color'>Categories</span></h1>
            <div className="grid md:grid-cols-2 gap-5 lg:grid-cols-3">
                <div class="flex flex-col bg-white  shadow-sm rounded-xl   dark:shadow-slate-700/[.7]">
                    <div class=" rounded-t-xl py-3 px-4 md:py-4 md:px-5 ">
                        
                    <GrMicrophone className='bg-[#FFB444] text-5xl w-20 h-20 rounded-full p-2'></GrMicrophone>
                    </div>
                    <div class="p-4 md:p-5 text-gray-800">
                        <h3 class="text-2xl font-semibold text-gray-800  ">
                        Digital Marketing
                        </h3>
                        <p class="mt-2 text-lg text-gray-900 ">
                        82 Jobs
                        </p>
                       
                    </div>
                </div>
                <div class="flex flex-col bg-white  shadow-sm rounded-xl   dark:shadow-slate-700/[.7]">
                    <div class=" rounded-t-xl py-3 px-4 md:py-4 md:px-5 ">
                        <TbEdit className='bg-[#5B95F5] text-5xl w-20 h-20 rounded-full p-2'></TbEdit>
                    </div>
                    <div class="p-4 md:p-5 text-gray-800">
                        <h3 class="text-2xl font-semibold text-gray-800  ">
                        UI/UX Design
                        </h3>
                        <p class="mt-2 text-lg text-gray-900 ">
                        354 Jobs
                        </p>
                       
                    </div>
                </div>
                <div class="flex flex-col bg-white  shadow-sm rounded-xl   dark:shadow-slate-700/[.7]">
                    <div class="py-3 px-4 md:py-4 md:px-5 ">
                        <BiEditAlt  className='bg-[#25D9F8] text-5xl w-20 h-20 rounded-full p-2'></BiEditAlt>
                    </div>
                    <div class="p-4 md:p-5 text-gray-800">
                        <h3 class="text-2xl font-semibold text-gray-800  ">
                        Content Writing
                        </h3>
                        <p class="mt-2 text-lg text-gray-900 ">
                        105 jobs
                        </p>
                       
                    </div>
                </div>
                <div class="flex flex-col bg-white  shadow-sm rounded-xl   dark:shadow-slate-700/[.7]">
                    <div class=" rounded-t-xl py-3 px-4 md:py-4 md:px-5 ">
                        <TiDocumentText className='bg-[#415EF6] text-5xl w-20 h-20 rounded-full p-2'></TiDocumentText>
                    </div>
                    <div class="p-4 md:p-5 text-gray-800">
                        <h3 class="text-2xl font-semibold text-gray-800  ">
                        HR Managment
                        </h3>
                        <p class="mt-2 text-lg text-gray-900 ">
                        82 Jobs
                        </p>
                       
                    </div>
                </div>
                <div class="flex flex-col bg-white  shadow-sm rounded-xl   dark:shadow-slate-700/[.7]">
                    <div class=" rounded-t-xl py-3 px-4 md:py-4 md:px-5 ">
                       <FiVideo className='bg-[#965CF5] text-5xl w-20 h-20 rounded-full p-2'></FiVideo>
                    </div>
                    <div class="p-4 md:p-5 text-gray-800">
                        <h3 class="text-2xl font-semibold text-gray-800  ">
                        Digital Marketing
                        </h3>
                        <p class="mt-2 text-lg text-gray-900 ">
                        82 Jobs
                        </p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Monrejobs;