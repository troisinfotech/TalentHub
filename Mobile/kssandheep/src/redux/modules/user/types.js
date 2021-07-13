import generateTypes from '../../../utils/typesGenerator';

function getTypes(type) {
 return generateTypes('user')(type);
}

const types = {
 ...getTypes('LOGIN'),
 ...getTypes('LOGOUT'),
 ...getTypes('GET_USER_PROFILE'),
};

export default types;
