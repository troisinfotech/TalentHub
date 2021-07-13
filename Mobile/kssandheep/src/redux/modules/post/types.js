import generateTypes from "../../../utils/typesGenerator";

function getTypes(type) {
 return generateTypes('posts')(type);
}
console.log(`\n\n\ngetTypes('GET_POSTS')`, getTypes('GET_POSTS'))
const types = {
 ...getTypes('GET_POSTS'),
 ...getTypes('GET_POST_DETAILS'),
};

export default types;
