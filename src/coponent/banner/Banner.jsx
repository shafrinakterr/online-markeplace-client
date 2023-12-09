import { Typewriter } from 'react-simple-typewriter'
const Banner = () => {

    return (
        <div className='mt-10 mb-20'>
            <div className="carousel relative w-full">

                <div id="item2" className="carousel-item w-full">
                    <div className="w-full rounded-xl relative ">
                        <img src="https://i.ibb.co/tc1rfFk/1.png" className="w-full rounded-xl h-[500px] object-cover" />
                        <div className="absolute justify-center text-center rounded-xl bg-gradient-to-r flex items-center w-full h-full from-[#151515d0] to-[#151515d0] gap-4 bottom-0">
                            <div className="md:w-[45%] text-gray-300 pl-8">
                                <h1  className='text-primary-color' id="text" >

                                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '50px' }}>
                                        {/* Style will be inherited from the parent element */}
                                        <Typewriter 
                                            words={['Explore a World of Job Possibilities']}
                                            loop={5}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={90}
                                            deleteSpeed={50}
                                            delaySpeed={900}

                                        />
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Banner;