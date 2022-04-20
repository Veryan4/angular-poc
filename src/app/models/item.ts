export class Item {
  by: string;
  id: number;
  kids: number[];
  time: Date;

  formattedTime?: string;

  constructor(values: Item) {
    Object.assign(this, values);
    this.formattedTime = timeSince(this.time);
  }
}

function timeSince(date: Date) {
  const seconds = Math.floor((new Date().valueOf() - date.valueOf() * 1000) / 1000);
  let interval = seconds / 31536000;
  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
}
