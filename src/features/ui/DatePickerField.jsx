import React from "react";
import DatePicker from "react-multi-date-picker";

function DatePickerField({ label, setDate, date }) {
  return (
    <div>
      <span className="mb-2 text-secondary-700 block text-start">{label}</span>
      <DatePicker
        containerClassName="w-full"
        inputClass="textField__input"
        calendarPosition="bottom-center"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
      />
    </div>
  );
}

export default DatePickerField;
