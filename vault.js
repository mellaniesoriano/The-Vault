'use strict';
module.exports = function() {

var vaultObj = {};

function setValue(key, value){
  vaultObj[key] = value;
  return key;
}

function getValue(key){
  if(vaultObj.hasOwnProperty(key)){
    return vaultObj[key];
  } else {
    return null;
  }
}

return {
  setValue: setValue,
  getValue: getValue
};

};