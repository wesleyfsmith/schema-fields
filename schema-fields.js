
import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
  'simpl-schema': '0.x.x'
}, 'wesleyfsmith:schema-fields');

export const getFields = (schema, isObject) => {
  schema = schema._schema;

  //TODO:

  let obj = {};
  let arr = [];

  _.each(schema, function(value, key) {

    //skip if key is part of sub Array
    //TODO: check if parent has specific rules for children on sub schema
    if (key.includes('$') || key.includes('.') ) {
      return;
    }

    if (isObject) {
      obj[key] = 1;
    } else {
      arr.push(key);
    }
  });

  if (isObject) {
    return obj;
  } else {
    return arr;
  }
}

Meteor.Collection.prototype.getFields = function() {
  return getFields(this.simpleSchema(), false);
}

Meteor.Collection.prototype.getFieldsAsObject = function() {
  return getFields(this.simpleSchema(), true);
}

SimpleSchema.prototype.getFields = function() {
  return getFields(this, false);
}

SimpleSchema.prototype.getFieldsAsObject = function() {
  return getFields(this, true);
}
