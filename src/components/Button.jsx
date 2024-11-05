/* eslint-disable react/prop-types */
const Button = ({children }) => {
  return (
    <button
      className="btn"
      style={{
        background: "rgba(254, 191, 0, 1)",
        color: "white",
        border: "none",
        textTransform: "uppercase",
      }}
    >
      {children}
    </button>
  );
};

export default Button;

