export function dateTo8Digit(inputDate: string) {
  const date = new Date(inputDate);
  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return +`${year}${month}${day}`;
}

export function dateToShortFormat(inputDate: string) {
  const date = new Date(inputDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
}
