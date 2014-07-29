Meteor.methods({
  searchContent: function (valueToSearch) {
    return ContentTable.find({title: {$regex: valueToSearch, $options: "i"}}, {sort: {createdAt:-1}}).fetch();
  }
});
