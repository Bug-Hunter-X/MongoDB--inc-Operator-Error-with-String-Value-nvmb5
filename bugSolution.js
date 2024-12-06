```javascript
// Correct usage of $inc operator with a numeric value
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { myField: 1 } });
```