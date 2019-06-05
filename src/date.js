const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'];

export function formatDate(date) {
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
}

export function formatHumanDate(date) {
  return `${months[date.getUTCMonth()]} ${date.getUTCDate()}`;
}

export function formatTime(date) {
  const hours = date.getUTCHours() + 1;
  const minutes = date.getUTCDate();
  return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;
}

export function formatDateTime(date) {
  return `${formatDate(date)} ${formatTime(date)}`;
}