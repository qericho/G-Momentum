
const DateToday = () => {
  const today = new Date();

  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0'); 
  const year = today.getFullYear();

  const formattedDate = `${month}/${day}/${year}`;

  return (
    <div>
      <p className="text-[18px] md:text-2xl">{month}/{day}/{year}</p>
    </div>
  )
}

export default DateToday
