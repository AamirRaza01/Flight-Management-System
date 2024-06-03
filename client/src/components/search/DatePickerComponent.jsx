import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ label, value, onChange }) => {
  return (
    <div>
      <label className="block text-gray-700">{label}</label>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date) => onChange(date.toISOString().split('T')[0])}
        className="mt-1 p-2 w-full border rounded"
        dateFormat="yyyy-MM-dd"
        placeholderText="Select Date"
      />
    </div>
  );
};

export default DatePickerComponent;
