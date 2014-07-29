Meteor.publish("ContentTable", function () {
  return ContentTable.find();
});