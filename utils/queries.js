export const allFish = () => {
  const query = `*[_type == 'fish']{
    _id, bait, location, date, "imageUrl": image.asset->url
  }`
  return query
}

export const fishDetails = (fishId) => {
  const query = `*[_type == 'fish' && _id == '${fishId}']{
    _id, bait, location, date, "imageUrl": image.asset->url
  }`
  return query
}