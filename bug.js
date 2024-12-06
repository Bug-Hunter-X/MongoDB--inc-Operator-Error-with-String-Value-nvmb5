```javascript
// Incorrect usage of $inc operator with a string value
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { myField: '1' } });
```