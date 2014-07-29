Router.configure({
  layoutTemplate: 'layout',
  waitOn: function () {
    return [
      Meteor.subscribe('ContentTable', function () {
        console.log('Subscribed to content collection: ' +ContentTable.find().count());
      })
    ];
  }
});

Router.map(function () {
  this.route('index', {
    path: '/',
    template: 'index',
    
    data: function () {
      if(Session.get('sortDirection')!==undefined && Session.get('activeSearch')===false) {
        var params = {sort:{}};
        params.sort[Session.get('orderByColumn')] = Session.get('sortDirection');
        return {
          content: ContentTable.find({}, params).fetch()
        };
      }else if(Session.get('activeSearch')===false){
        var paramsDefault = {sort:{}};
        paramsDefault.sort['title']=-1;
        return {
          content: ContentTable.find({}, paramsDefault).fetch()
        };
      }else if(Session.get('activeSearch')===true){
         Meteor.call('searchContent', Session.get('valueToSearch'), function (err, result) {
          if(err){
            Log.error(err);
          }
          if(result){
            Session.set('searchResult', result);
          }
        });
        return {
          content: Session.get('searchResult')
        };
      }
    }
  })
});

