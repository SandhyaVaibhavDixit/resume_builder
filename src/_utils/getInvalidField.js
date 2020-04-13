export const getInvalidField = (dataStructure) => dataStructure.find(eachField => eachField.valid === false);
 