import PropsTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";


const Feature = ({feature}) => {
    return (
        <div className='mt-3'>
            <p className='flex items-center mr-2 gap-1'><AiFillCheckCircle></AiFillCheckCircle> {feature}</p>
            
        </div>
    );
};
Feature.propsTypes ={
    feature: PropsTypes.string.isRequired
}

export default Feature;