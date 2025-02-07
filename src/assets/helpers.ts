export function dateToTime(date) {
  let localDate = date instanceof Date ? date : new Date(date)
  const options = { year: 'numeric', month: 'long', day: 'numeric' }
  return new Date(localDate).toLocaleDateString('es-ES', options)
}

