const objectToArray = (value, additionalParams) => (value && Object.keys(value).map((key, index) => ({
 ...value[key],
 'id': key,
 'index': index + 1,
 ...additionalParams
}))) || [];

export default objectToArray;
