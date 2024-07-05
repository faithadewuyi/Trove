
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import InputField from './InputField';

function Shipping() {
  const form = useForm({
    defaultValues: {
      houseno: "",
      streetname: "",
      city: "",
      state: "",
      postalcode: "",
      phonenum: "",
      addphonenum: "",
      additional: "",
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

      <h1 className=" text-xl font-medium py-2 pl-6">
        Shipping Address
      </h1>
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      noValidate
      className="font-mon shadow-md px-4 pl-6 px-auto mt-5"
    >
       <h3 className=" text-base font-semibold py-2 mb-4 ">
        Add Address
      </h3>
      {/* <div className="flex gap-[50px] mb-2"> */}
        <InputField
          label="Add Address 1"
          placeholder=""
          id="houseno"
          name="houseno"
          register={register}
          error={errors.houseno}
          pattern={/^\d{3}$/}
          required={true}
          patternMessage="Enter your house number only in numbers"
          className="border-darkgray border-2 text-base  text-black my-2 "
        />

          <InputField
          label="Add Address 2"
          placeholder=""
          id="houseno"
          name="houseno"
          register={register}
          error={errors.houseno}
          pattern={/^\d{3}$/}
          required={true}
          patternMessage="Enter your house number only in numbers"
          className="border-darkgray border-2 text-base  text-black my-2 w-[330px]"
        />
        <InputField
          label="Country"
          placeholder=""
          id="streetname"
          name="streetname"
          register={register}
          error={errors.streetname}
          pattern={/[A-Za-z0-9]{3,16}$/}
          required={true}
          patternMessage="Country name should contain 3-16 characters and shouldn't contain any special characters"
          className="border-darkgray border-2 text-base  text-black my-2 "
        />
      {/* </div> */}
      <div className="flex gap-2 mb-4 w-[710px]">
        <InputField
          label="Town/City"
          placeholder=""
          id="city"
          name="city"
          register={register}
          error={errors.city}
          required={true}
          pattern={/[A-Za-z0-9]{3,16}$/}
          patternMessage="City should contain 3-16 characters and shouldn't contain any special characters"
          className="border-darkgray border-2 text-base  text-black my-2 w-[300px]"
        />
        <InputField
          label="Province/State"
          placeholder="Lagos"
          id="state"
          name="state"
          register={register}
          error={errors.state}
          pattern={/[A-Za-z0-9]{3,16}$/}
          required={true}
          patternMessage="Enter your state"
          className="border-darkgray border-2 text-base  text-black my-2 w-[300px]"
        />
        <InputField
          label="Postal Code"
          placeholder="101255"
          id="postalcode"
          name="postalcode"
          type="number"
          register={register}
          error={errors.postalcode}
          pattern={/^\d{5}$/}
          required={true}
          patternMessage="Enter your postal code"
          className="border-darkgray border-2 text-base  text-black my-2 w-[300px]"
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

export default Shipping
