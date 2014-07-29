UI.registerHelper('materials', function (valueToSearch) {
  if(Session.get('valueToSearch')){
    console.log();
    if(valueToSearch.indexOf(Session.get('valueToSearch'))===-1){
      return "false";
    }else{
      return "true";
    }
  }else{
    return "Search no activated";
  }
});

UI.registerHelper('precursors', function (valueToSearch) {
  if(Session.get('valueToSearch')){
    if(valueToSearch.indexOf(Session.get('valueToSearch'))===-1){
      return "false";
    }else{
      return "true";
    }
  }else{
    return "Search no activated";
  }
});