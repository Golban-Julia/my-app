import PropTypes from "prop-types";

const Title = ({ name, type }) => {
    return (
        <h1 style={{ fontWeight: type === "bold" ? "bold" : "normal" }}>
            {name}
        </h1>
   );
};


Title.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["bold", "normal"]),
};

Title.defaultProps = {
    type: "normal",
};

export default Title;
