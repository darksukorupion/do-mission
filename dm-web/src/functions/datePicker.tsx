import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Control, Controller, Path } from "react-hook-form";

type Props<T> = {
  name: Path<T>;
  error?: string;
  control: Control;
};

export const DatePicker = <T,>({ name, control, error }: Props<T>) => {
  const startDate = new Date();

  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 90);

  return (
    <>
      <div>
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange, value } }) => (
            <ReactDatePicker
              className={`input`}
              placeholderText={"日付を選択(任意)"}
              selected={value}
              dateFormat="yyyy/MM/dd"
              onChange={onChange}
              minDate={startDate}
              maxDate={endDate}
            />
          )}
        />
      </div>
    </>
  );
};
