interface GetMatchingPart {
  (query: string, name: string): string;
}

export const getMatchingPart: GetMatchingPart = (query, name) => {
  const lowerCasedName = name.toLowerCase();
  const lowerCasedQuery = query.toLowerCase();
  const index = lowerCasedName.indexOf(lowerCasedQuery);

  const firstPart = name.slice(0, index);
  const highLightedPart = name.slice(index, index + query.length);
  const lastPart = name.slice(index + query.length);

  return `${firstPart}<span class='highlighted'>${highLightedPart}</span>${lastPart}`
};
