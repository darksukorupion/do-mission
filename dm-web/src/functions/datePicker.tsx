import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller, Path } from "react-hook-form";

type Props<T> = {
  label: string;
  name: Path<T>;
  error?: string;
  control: Control;
  timeIntervals?: number;
};

export const DatePicker = ({ label, name, control, error }) => {
  const startDate = new Date();

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 90);

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              selected={value}
              dateFormat="yyyy-MM-dd"
              onChange={onChange}
              minDate={startDate}
              maxDate={endDate}
              // showTimeSelect
              // timeIntervals={timeIntervals}
            />
          )}
        />
      </div>
      <span>{error}</span>
    </>
  );
};
