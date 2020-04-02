
var currentTab = 0;
var percentage = 0;


$(document).ready(function(){
    $('.tabs').tabs();
    $('.modal').modal();   
   });


   var showTab = (n)=>{
  
      var tab = $(".wizard-tab");
     tab.eq(n).addClass("active");
  
     (n == 0) ?  $("#prevBtn").hide() :  $("#prevBtn").show();

    if (n == (tab.length - 1)) {
      $("#nextBtn").hide();
      $("#submit-button").show();
      showSummery();  
    } else {
      $("#nextBtn").show();
      $("#submit-button").hide();
      
    }
    
  }

  var  nextPrev = (n) => {
    var x = $(".wizard-tab");
    x.eq(currentTab).removeClass('active');
    currentTab = currentTab + n;
    showTab(currentTab);
  }

  var emptyCard = (card)=>{
    if(card.find('.collection').length > 0){
      card.find('.collection').empty();
    }
  }

  
var fillCard = (card,items)=>{
    if(items.length>0){
      card.find('p').hide();
      card.find('.collection').show();
       items.each(function(index,element){
                 card.find('.collection').append("<li class='collection-item'><a class='value'>"+items.eq(index).text()+"</a>%</li>")
                }
      )
    }else{
      card.find('p').show();
      card.find('.collection').hide();
    }
 }

 var storeList = (list)=> {
  var list_item;
  var list_arr= [];
  list.each(function(index,elelemt){

      list_item =  list.eq(index).text();
      list_arr.push( list_item );
    
    }
    
  )
    return list_arr;

}
  showTab(this.currentTab);

  //$("#prevBtn").on("click",-1,nextPrev);
 // $("#nextBtn").on("click",1,nextPrev);

 var showSummery = ()=> {
  $courseName = $('#course-name').val();
  $quizes = $('.quiz-collection').find('.value');
  $assignments = $('.assignment-collection').find('.value');
  $tutorials = $('.tutorial-collection').find('.value');
  $quizCard = $('.quiz-card');
  $assignmentCard = $('.assignment-card');
  $tutorialCard = $('.tutorial-card');

    $('#course-name-label').html($courseName);

    emptyCard($quizCard);
    emptyCard($assignmentCard);
    emptyCard($tutorialCard);

    fillCard($quizCard,$quizes);
    fillCard($assignmentCard,$assignments);
    fillCard($tutorialCard,$tutorials);
    
  }


  $('#submit-button').click(function(){
    var name = $('#course-name').val();
    $quizList = $(".quiz-card").find("a");
    $assignmentList = $(".assignment-card").find("a");
    $tutorials = $(".tutorial-card").find("a");
    
    var quizes = storeList($quizList);
    var assignments = storeList($assignmentList);
    var tutorials = storeList($tutorials);
    var course = {
            "name": name,
            "quizes": quizes,
            "assignments": assignments,
            "tutorials": tutorials
    };
    console.log(course);
     
  });


  $('.add-item').click(function(){

    var inputValue =parseInt($('.modal input').val());

    if(inputValue >= 0){
     var $collection = $('.wizard-tab').filter('.active').find('.collection');
     $collection.append($("<li class='collection-item'><span class='badge remove-item'>x</span><span class='value'>"+inputValue+"</span>%</li>"));

    percentage = percentage + inputValue;
    $('#percentage-label').html(percentage+ "%");
    if(percentage >= 100){

      $('#percentage-label').css("color","red");
    }
  

  }

  $('.remove-item').click(function(){
   
    $(this).closest('li').remove();
   
   });
  });









  


   
   






    
