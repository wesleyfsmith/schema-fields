## schema-fields

In meteor you often need to grab a list of fields from a collection. You might need to do this in your publications or in your autoforms. This package provides an easy way to graph those fields off a simple schema.

To install:

```meteor add wesleyfsmith:schema-fields```

### Getting fields off collection

If you have a collection called Books, you can now run:

```js
Books.getFields(); // returns an array of the simple schema fields ['name', 'genre']
```

You can also grab the fields in an object structure:

```js
Books.getFieldsAsObject(); // returns an array of the simple schema fields {'name': 1, 'genre': 1}
```

### Getting fields off simple schema

Sometimes, you want grab fields off a specific schema. All SimpleSchema instances have these methods now. For example, here's something you might do with autoform:


```jsx
<div>
  <Blaze template="quickForm" collection={Meteor.users} doc={Meteor.user()} type="update"
                fields={customSchema.getFields()}
                id="providerDetailsForm" />
</div>
```
