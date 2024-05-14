import React from "react";

const GenderRadioBtn = () => {
  return (
    <div className="flex mt-2">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer `}>
          <span className="label-text  text-white">Male</span>
          <input
            type="radio"
            className="radio border-slate-900  checked:bg-blue-500 "
            name="radio-1"
          ></input>
        </label>
      </div>
      <div className="form-control ml-4">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text  text-white">Female</span>
          <input
            type="radio"
            className="radio checked:bg-red-500  border-slate-900"
            name="radio-1"
          ></input>
        </label>
      </div>
    </div>
  );
};

export default GenderRadioBtn;
