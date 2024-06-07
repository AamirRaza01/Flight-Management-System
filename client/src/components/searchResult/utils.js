export const calculateDuration = (startTime, endTime) => {
    const start = new Date(`1970-01-01T${convertTo24HourFormat(startTime)}:00`);
    const end = new Date(`1970-01-01T${convertTo24HourFormat(endTime)}:00`);
  
    const diff = end - start;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  
    return `${hours}h ${minutes}m`;
  };
  
  const convertTo24HourFormat = (time) => {
    const [hours, minutes] = time.split(':');
    const [mins, period] = minutes.split(' ');
    const hrs = period.toLowerCase() === 'pm' ? (parseInt(hours, 10) % 12) + 12 : parseInt(hours, 10) % 12;
    return `${hrs.toString().padStart(2, '0')}:${mins}`;
  };
  