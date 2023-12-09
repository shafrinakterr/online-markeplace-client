import { useLoaderData } from "react-router-dom";
import Banner from "../coponent/banner/Banner";
import CoreFeature from "../coponent/extrasection/CoreFeature";
import Monrejobs from "../coponent/extrasection/Monrejobs";
import JobCategory from "../jobComponentPage/jobCategory/JobCategory";

const Home = () => {
    const categorys = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <JobCategory categorys={categorys}></JobCategory>
            <Monrejobs></Monrejobs>
            <CoreFeature></CoreFeature>
        </div>
    );
};

export default Home;