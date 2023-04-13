export const incrementItem = (current: number): number => {
  const count = current >= 20 ? current : current + 1;
  return count;
};

export const decrementItem = (current: number): number => {
  const count = current === 0 ? 0 : current - 1;
  return count;
};

export const formatDate = (date: Date | null) => {
  if (date === null) {
    return '';
  }
  const d = new Date(date);
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (parseInt(month, 10) < 10) {
    month = `0${month}`;
  }
  if (parseInt(day, 10) < 10) {
    day = `0${day}`;
  }

  return [year, month, day].join('-');
};

export const formatDayMonth = (date: Date | null) => {
  if (date === null) {
    return '';
  }

  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });
  return `${day} ${month}`;
};
