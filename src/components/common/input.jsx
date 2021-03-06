
import React from "react";

const Input = ({ value, name, onChange, type, errors,classes }) => {
  return (
    <div className={classes}>
      <label htmlFor={name}>{name[0].toUpperCase() + name.slice(1)}</label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        className="form-control"
        type={type || name}
      />
      {errors && <div className="alert alert-danger">{errors}</div>}{" "}
    </div>
  );
};

export default Input;

