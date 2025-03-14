export const formatDateTime = (isoString, locale = "en-US") => {
    const date = new Date(isoString);
  
    if (isNaN(date)) return "Invalid Date";
  
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    const timeOptions = { hour: "numeric", minute: "numeric", hour12: true };
  
    const formattedDate = date.toLocaleDateString(locale, dateOptions);
    const formattedTime = date.toLocaleTimeString(locale, timeOptions);
  
    return `${formattedDate} at ${formattedTime}`;
  };
  