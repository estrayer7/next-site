export const allFish = () => {
  const query = `*[_type == 'fish']{
    bait, location, date
  }`
  return query
}