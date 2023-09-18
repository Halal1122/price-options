import PropsTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({ option }) => {
    const { name, price, features} = option;
    return (
        <div className='text-center my-4 bg-red-400 p-4 rounded-xl'>
            <h2 className='my-4'>
                <span className='text-7xl font-bold my-3'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h3 className='text-4xl font-bold'>{name}</h3>
            {
                features.map((feature, inx) => <Feature key={inx} feature={feature}></Feature>)
            }
            <button className='w-full bg-red-500 mt-5 font-bold rounded-lg p-2 hover:bg-red-900 text-white'>Bay Now</button>
        </div>
    );
};
PriceOption.propsTypes = {
    option: PropsTypes.array.isRequired
}

export default PriceOption;