export function formatDate(dateString: string): string {
    // Convert the ISO date string into a Date object
    const date: Date = new Date(dateString);
  
    // Define the options for formatting the time part (hours and minutes with AM/PM)
    const timeOptions: Intl.DateTimeFormatOptions = { 
      hour: 'numeric', 
      minute: 'numeric', 
      hour12: true 
    };
    const timeFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', timeOptions);
    const formattedTime: string = timeFormatter.format(date);
  
    // Define the options for formatting the date part (month, day, year)
    const dateOptions: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    const dateFormatter: Intl.DateTimeFormat = new Intl.DateTimeFormat('en-US', dateOptions);
    const formattedDate: string = dateFormatter.format(date);
  
    // Combine the formatted time and date
    return `${formattedTime} - ${formattedDate}`;
  }
  
