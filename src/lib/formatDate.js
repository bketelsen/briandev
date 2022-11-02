export function formatDate(dateString) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}
export function formatMonthYear(dateString) {
  const dt = new Date(`${dateString}T00:00:00Z`);
  var month = dt.toLocaleString('default', { month: 'long' });
  var year = dt.toLocaleString('default', { year: 'numeric' });
  
  return month + ' ' + year

}
