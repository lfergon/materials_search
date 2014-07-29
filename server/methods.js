Meteor.methods({
  searchContent: function (valueToSearch) {
  	Log.error(ContentTable.find({materials_experimental: {$regex: valueToSearch, $options: "i"}}, {sort: {createdAt:-1}}).fetch());
    return ContentTable.find({materials_experimental: {$regex: valueToSearch, $options: "i"}}, {sort: {createdAt:-1}}).fetch();
  }
});
