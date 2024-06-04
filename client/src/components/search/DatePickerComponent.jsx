import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerComponent = ({ label, value, onChange }) => {
  const today = new Date();
  return (
    <div className='w-[25%] '>
      <label className="block text-gray-600">{label}</label>
      <DatePicker
        selected={value ? new Date(value) : null}
        onChange={(date) => onChange(date.toISOString().split('T')[0])}
        className="mt-1 p-2 w-[288px] rounded border text-gray-700 focus:outline-none focus:ring-1 focus:ring-[#605DEC] focus:border-transparent"
        dateFormat="dd-MM-yyyy"
        placeholderText="Depart"
        minDate={today}
      />
    </div>
  );
};

export default DatePickerComponent;
