import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <div>
            <li className="lg:ml-10">{route.name}</li>
        </div>
    );
};
Link.propTypes ={
    Link: PropTypes.array.isRequired,
    route: PropTypes.array
}
export default Link;