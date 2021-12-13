import React, { useState } from 'react';
import Form from './Form';
import './style.css';

export default function App(props) {
  // console.log('props',props)
  let [form, setForm] = useState({
    firstname: '',
    lastname: '',
    country: '',
  });
  const [error, setError] = useState(false);
  let inputEvent = (event) => {
    let { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  console.log('form', form);
  return (
    <div>
      <form>
        <Form label="Firstname" name="firstname" onChange={inputEvent} />
        <Form label="Lastname" name="lastname" onChange={inputEvent} />
        <Form label="Country" name="country" onChange={inputEvent} />
        {form.firstname && form.firstname === form.lastname ? (
          ''
        ) : (
          <button>Submit</button>
        )}
      </form>
    </div>
  );
}
