export default function generateTypes(base: string) {
  /**
   * Constants set generator
   * @param {string} name - constant base name
   * @returns {Object<string, string>}
   */
  return (name: string) => ({
    [`${name}_REQUEST`]: `${base}/${name}`,
    [`${name}_SUCCESS`]: `${base}/${name}_S`,
    [`${name}_FAIL`]: `${base}/${name}_F`
  });
}
