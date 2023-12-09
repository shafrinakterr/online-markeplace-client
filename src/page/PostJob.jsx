import { useLoaderData } from "react-router-dom";

import CardJobPost from "../coponent/myPostedData/CardJobPost";

const PostJob = () => {
    const myJobPostData= useLoaderData()
    
    return (
        <div className="grid p-3 lg:p-0 mt-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto">
            {
                myJobPostData.map(postData=>
                <CardJobPost key={postData._id} postData={postData}>

                </CardJobPost>
                )
            }
        </div>
    );
};

export default PostJob;