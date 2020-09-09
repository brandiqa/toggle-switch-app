import React from "react";
import { useForm } from "react-hook-form";

import ToggleSwitch from '../components/ToggleSwitch';

export default function () {
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => console.log(data);

  const handleChange = (value) => {
    setValue("newsletter", value);
  }

  React.useEffect(() => {
    register("newsletter", false);
  }, [register])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" defaultValue="test@domain.com" ref={register} />
      </div>
      <div>
        <ToggleSwitch id="newsletter" name="newsletter" onSwitch={handleChange} />
        <label htmlFor="newsletter">Send me Marketing Emails!</label>
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
  )
}