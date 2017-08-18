var todoarray = []


$(".todoInput").keypress(function(e){
  // everytime enter is pressed, the value preceeding it gets pushed into an array
    if(e.which === 13){
      todoarray.push($(this).val());
      //clears array
      $(this).val("");
      buildTheList();
    }


});

// This function expects arrayInput and returns html string of LIs to the class UL mylist
function buildTheList() {
  var theList = "";
  $(todoarray).each(function(index){
    // theList += '<li>'+ this +  ' <a href="javascript:trashTit('+index+');">Trash</a>'+'</li>';  /bad bad bad
    theList += '<li><span class="list-item">'+ this +  '</span> <span class="trash-it" data-index="'+index+'">Trash</span></li>';
  });  
  //updates li
  $('.mylist').html(theList);
}


$('body').delegate('.trash-it','click',function(){
    // console.log($(this).data('index'));
    // debugger;
    trashTit($(this).data('index'));
});

// Handles strike through
$('body').delegate('.list-item','click',function(){
    // console.log($(this).data('index'));
    // debugger;
    if($(this).hasClass('strike-bitch')) {
        $(this).removeClass('strike-bitch');
    } else {
        $(this).addClass('strike-bitch');  
    }
    
});


//
function trashTit(index) {
  //removes item clicked-action from trashtit
  todoarray.splice(index,1);
  buildTheList();
}

