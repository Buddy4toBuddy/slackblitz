import React from 'react';

let Form = (props) => {
  let { label, name, onChange } = props;

  return (
    <div>
      <form>
        <label>{label}</label>
        <input type="text" name={name} onChange={onChange}></input>
        <br />
      </form>
    </div>
  );
};

export default Form;
