import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import CardJobPost from '../../coponent/myPostedData/CardJobPost';

const JobCategory = ({categorys}) => {
    const [jobs, setJobs] = useState([]);
    const [category, setCategory] = useState('Digital Marketing');


    const handleCategoryTab = category => {
        setCategory(category)
    }

    useEffect(() => {
        fetch(`https://online-marketplace-server-site.vercel.app/jobPost?cate=${category}`)
        .then(res => res.json())
        .then(data => {
            setJobs(data);
        })
    },[category])

    return (
        <>
            <section>
                <div>
                    <ul className='flex justify-center items-center gap-2'>
                        {
                            categorys?.map(category =>  <li key={category?._id}><button onClick={() => handleCategoryTab(category?.category)} className='px-3 py-1 rounded-md bg-primary-color text-white focus:bg-gray-200 focus:text-primary-color focus:font-bold'>{category?.
                                category
                                }</button></li> )
                        }
                    </ul>
                </div>
                <div className="container mx-auto px-5 lg:px-0">
                    <div className='grid grid-cols-4 gap-5'>
                        {
                            jobs?.map(job => <CardJobPost key={job?._id} postData={job} /> )
                        }
                    </div>
                </div>
            </section>  
        </>
    );
};

export default JobCategory;