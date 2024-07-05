import { useForm } from "react-hook-form";
import { useEffect } from "react";

import InputField from "./InputField";

function Settings() {
  const form = useForm({
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      address: "",
      password: "",
      cpassword: "",
      npassword: "",
    },
    mode: "onTouched",
  });

  const { register, handleSubmit, reset, formState } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data) => {
    console.log("submitted", data);
  };

  const onError = (errors) => {
    console.log("Form Errors", errors);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        noValidate
        className="font-mon shadow-md p-4 pl-6 px-auto mt-5"
      >
        <h1 className="text-textcol text-xl font-semibold py-2">
          Settings
        </h1>
        <h3 className="text-textcol text-base font-medium py-2 mb-2">
          Personal Information
        </h3>
      
          <InputField
            label="Full  Name*"
            placeholder="Sarah Thompson"
            id="fullame"
            name="fullname"
            register={register}
            error={errors.firstname}
            pattern={/[A-Za-z0-9]{3,16}$/}
            required={true}
            patternMessage="Name should contain 3-16 characters and shouldn't contain any special characters"
            className="border-darkgray border-2 text-base  text-black my-2"
          />
          
          <InputField
            label="Email Address*"
            placeholder="sarahthompson@gmail.com"
            id="email"
            name="email"
            type="email"
            register={register}
            error={errors.email}
            pattern={
              /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            }
            required={true}
            patternMessage="Please enter a valid email address"
            className="border-darkgray border-2   text-black my-2"
          />
          <InputField
            label="Contact Number*"
            placeholder="+2348123456789"
            type="tel"
            id="phone"
            name="phone"
            register={register}
            error={errors.phone}
            pattern={/^\d{10}$/}
            patternMessage="Phone number must be 11 digits"
            required
             className="border-darkgray border-2   text-black my-2"
      />
        {/* </div> */}
        <div className="space-y-2 my-2">
          <h2 className="text-base">Change Password</h2>
          <InputField
            placeholder="Current password (leave blank to leave unchanged)"
            id="password"
            name="password"
            type="password"
            register={register}
            error={errors.password}
            pattern={
              /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
            }
            required={true}
            patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
           className="border-darkgray border-2   text-black my-2"
          />
          <InputField
            placeholder="New Password"
            id="npassword"
            name="npassword"
            type="password"
            register={register}
            error={errors.npassword}
            pattern={
              /^(?=.*)(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,16}$/
            }
            required={true}
            patternMessage="Password should be 7-16 characters and include at least 1 uppercase letter, 1 number and 1 special character"
            className="border-darkgray border-2   text-black my-2"
          />
          <InputField
            placeholder="Confirm Password"
            id="cpassword"
            name="cpassword"
            type="password"
            register={register}
            error={errors.cpassword}
            pattern={/values.password/}
            required={true}
            patternMessage="Password doesn't match"
            className="border-darkgray border-2   text-black my-2"
          />
        </div>
        <div className="flex flex-row gap-3 justify-end">
        <button className="text-textcol text-base hover:text-white hover:bg-btn px-4 w-[140px]  border-btn border-2 rounded-md ">
          Cancel
        </button>
        <button className="bg-btn text-white p-2 hover:bg-btnlight px-4 rounded-md  py-2">
          Save Changes
        </button>
      </div>
      </form>
    </div>
  );
}

export default Settings;
