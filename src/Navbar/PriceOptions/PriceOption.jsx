import PriceOption from "./PriceOption/PriceOption";
// import PropsTypes from 'prop-types';

const PriceOptions = () => {
  const priceOptions = [
    {
      "id": "1",
      "name": "Basic Membership",
      "price": "$29.99",
      "features": [
        "Access to cardio and weight equipment",
        "Unlimited gym access during regular hours",
        "Locker room access",
        "Fitness assessment",
        "Access to basic group fitness classes",
        "Discounts on personal training sessions"
      ]
    },
    {
      "id": "2",
      "name": "Premium Membership",
      "price": "$49.99",
      "features": [
        "Access to all gym facilities and equipment",
        "Unlimited gym access 24/7",
        "Locker room access with towel service",
        "Personalized workout plans",
        "Unlimited access to group fitness classes",
        "Complimentary monthly personal training session",
        "Access to sauna and steam room"
      ]
    },
    {
      "id": "3",
      "name": "Family Membership",
      "price": "$79.99",
      "features": [
        "Access for up to 4 family members",
        "Access to all gym facilities and equipment",
        "Unlimited gym access 24/7",
        "Locker room access with towel service",
        "Personalized workout plans for each",
        "Unlimited access to group fitness classes",
        "Childcare services",
        "Discounts on additional personal training"
      ]
    }
  ]

  return (
    <div className="container mx-auto">
      <h2 className='text-5xl mt-4 text-center'>Best Price in the town</h2>

      <div className="grid grid-cols-3 mt-8 gap-4">
        {
          priceOptions.map(option => <PriceOption key={option} option={option}></PriceOption>)
        }
      </div>
    </div>
  );
};
// priceOptions.propsTypes ={
//   priceOptions: PropsTypes.func
// }
export default PriceOptions;