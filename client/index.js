Template.index.nameRegex = function () {
  var title = this.title.replace(/ /g, '_');
  return title;
};

Template.index.events({
  'click .sortColumn': function (event) {
    // DGB 22.08 The name of the div that raises the click MUST be the field that we want to sort in the mongo
    Session.set('orderByColumn', event.currentTarget.attributes.name.value);
    if(Session.get('sortDirection')===undefined){
      Session.set('sortDirection', 1);
    }else {
      Session.set('sortDirection', (Session.get('sortDirection')===1) ? -1:1);
    }
  },
  'click .glyphicon-search, keyup #search' : function (event){
    if($('#search').val().length>=2){
      Session.set('valueToSearch', $('#search').val());
      Session.set('activeSearch', true);
    }
    if($('#search').val().length<2){
      Session.set('activeSearch', false);
    }
  }
});

//Default value for this session
Session.set('activeSearch', false);

Template.index.searching = function () {
  if(Session.get('activeSearch')===false){
    return true;
  }
};

Template.index.rendered = function () {
  
};