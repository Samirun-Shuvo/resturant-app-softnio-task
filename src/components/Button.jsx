/* eslint-disable react/prop-types */
const Button = ({ children }) => {
  return (
    <div
      className="btn ms-lg-3"
      style={{
        background: "rgba(254, 191, 0, 1)",
        color: "black",
        border: "none", // Optional: Remove default border
      }}
    >
      {children}
    </div>
  );
};

export default Button;
