



jQuery(document).ready(function($) {
	
google.charts.load('current', {packages: ['corechart', 'bar']});

test pankaj line 

function deselect(e) {
  $('.pop').slideFadeToggle(function() {
    e.removeClass('selected');
  });    
}

$(function() {
  $('#contact').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop').slideFadeToggle();
    }
    return false;
  });

  $('.close').on('click', function() {
    deselect($('#contact'));
    return false;
  });
});

$.fn.slideFadeToggle = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};


  // dodo >>
  
  function deselect1(e) {
  $('.pop1').slideFadeToggle1(function() {
    e.removeClass('selected');
  });    
}

$(function() {
  $('#contact1').on('click', function() {
    if($(this).hasClass('selected')) {
      deselect1($(this));               
    } else {
      $(this).addClass('selected');
      $('.pop1').slideFadeToggle();
    }
    return false;
  });

  $('.close1').on('click', function() {
    deselect1($('#contact1'));
    return false;
  });
});

$.fn.slideFadeToggle1 = function(easing, callback) {
  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
};

  
  //  dodo <<

// pks-closing window-startes


   l1 = $('#block-block-2').width();
   $("#edit-search-api-views-fulltext").width(l1);
   
   $("#edit-submit-search").attr('value', 'Search');
   
intro = $.cookie('intro') ;
intro_name = '';
intro_name_id = '';
if (typeof intro === 'undefined'){
            intro  = '';
         } else {
			var intro_arr = intro.split(',');
            intro_name = intro_arr[0];
			intro_name_id = intro_arr[1];
          }	

   dynm_url = "http://examrobot.com/user/"+intro_name_id+"/achievements";

$('#urlanchor').attr('href', dynm_url);		  
user_correction_mssg = "Correction suggested by : " + intro_name;

$('#correction_user').text(user_correction_mssg);
		  
		  
		  
		  


$("#correction_message_submit").click(function(){
	
	    var String = '';
	
	    if ($('.content .node-question').text().indexOf("document.question_") != -1)
        {
             
			 str = $('.content .node-question').text();
			 String=str.substring(str.indexOf("document.question_")+18,str.indexOf(".response"));
			
             }
       
		var correction_selected = $( "#correction_select option:selected" ).text();
		var correction_explanation =  $('textarea#correction_body').val();
		
		var corr_url = $(location).attr('href');
		corr_url =  String;
		var  show =  corr_url + ";" + correction_selected + ";" + correction_explanation;
		
		job = "correction";	  
        jQuery.ajax( {
			        
					type: "POST",
					url: "http://examrobot.com/post_response/post", 
					data: { "cl_data":show , "job":job },
					success: function(data){
					
					
                                                                          
					}
					
					
					
				   });
			
	 deselect($('#contact'));
	 
	 $("#cor_thnk").css({display: "block"});
	 $('#cor_thnk').delay(4000).fadeOut();
     return false;	
		
    }); 
	

	
$("#correction_message_submit1").click(function(){
	
	    var String = '';
	
	    if ($('.content .node-question').text().indexOf("document.question_") != -1)
        {
             
			 str = $('.content .node-question').text();
			 String=str.substring(str.indexOf("document.question_")+18,str.indexOf(".response"));
			
             }
       
		
		var correction_explanation1 =  $('textarea#correction_body1').val();
		if(correction_explanation1 === ''){
			alert("You must give your intial comment to intiate this question in forum for discussion");
			 $('#correction_body1').css('border-color', 'red');
		}else{
		
		var corr_url1 = String;
		var  show1 =  corr_url1 + ";" +  correction_explanation1;
		
		job = "forum";	  
        jQuery.ajax( {
			        
					type: "POST",
					url: "http://examrobot.com/post_response/post", 
					data: { "cl_data":show1 , "job":job },
					success: function(data){
					
					
                                                                          
					}
					
					
					
				   });
			
	 deselect1($('#contact1'));
	 
	 
	 
	 $("#cor_thnk1").css({display: "block"});
	 $('#cor_thnk1').delay(4000).fadeOut();
		return false;	}
		
    }); 
		  
		  
		  
window._link_was_clicked = false;

	
$(window).bind('beforeunload', function(event){
  if (window._link_was_clicked) {
    return; // abort beforeunload
  }
     flushbeforeexit();
	return null;
});


jQuery(document).on('click', 'a', function(event) {
  window._link_was_clicked = true;
});

jQuery('#views-exposed-form-search-page').click(function(event) {  
       window._link_was_clicked = true;
    });
	
jQuery('.facetapi-checkbox').click(function(event) {  
       window._link_was_clicked = true;
    });	
	
	

// pks-closing window-ends

	
	//pks chart >>

//google.charts.load('current', {packages: ['corechart', 'bar']});
//google.charts.setOnLoadCallback(numbers);
function numbers(){
                        //var work_field = document.forms['work_form']['work_n_field'].value;
                        //var work_div = document.getElementById('number-work');
                        //numberschart = work_div.innerHTML = work_field;
						$("#chart_msg").remove();
					     stats = $(".field-name-field-stats").text();	
                         					 
						
		                 var statsvalues = stats.split(',');
                         correct  = statsvalues[1];
						 incorrect = statsvalues[2];
						 opta = statsvalues[3];
						 optb = statsvalues[4];
						 optc = statsvalues[5];
						 optd = statsvalues[6];
                        drawPieChart();
                        drawStacked();
						//drawPieChart();
                        return false;
                };

function drawStacked() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Year');
      data.addColumn('number', 'Score');
      
     
    data.addRows([
      ['Option A',parseInt(opta)],
      ['Option B',parseInt(optb)],
      ['Option C',parseInt(optc)],
      ['Option D',parseInt(optd)]
     
    ]);


      var options = {
        title: 'How users selected various options',
		width: 300,
        height: 300,
        isStacked: true,
        hAxis: {
          title: 'Options',

        },
		animation: {
            startup: true,
            duration: 1000
        },
        vAxis: {
          title: 'Number of users'
        }
      };

     
	  var chart = new google.visualization.ColumnChart(document.getElementById('col_chart'));
      chart.draw(data, options);
    }

	function drawPieChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Correct',  parseInt(correct)],
          ['Incorrect',  parseInt(incorrect)]
        ]);

        var options = {
          title: 'Users response',
		  width: 300,
        height: 300,
		  animation: {duration: 2000, easing: 'out',}
        };

        var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));

        chart.draw(data, options);
      }
	
	//pks chart <<
	
     prev_node_id = '';
	 var arr = new Array();
	
	//pks1 >> before click function we should populate the score value on page 
	
		if (typeof $.cookie('clientscore') === 'undefined'){
            current_score = 0;
         } else {
            current_score = $.cookie('clientscore') 
          }	
	     $('#dash_score').text("Score: "+current_score);
		 displaytext(current_score);
		 display_text_main = intro_name +" ,"+ display_text;
		 $('#dash_status').text(display_text_main);
		 $('#dash_progress_label').text(progress_label);
		 
 
        perc = "60" + "%";
		percnt = Math.round(percnt);
        perc = percnt + "%";
		
        $("#myBar").width(perc);
		//document.getElementById("label").innerHTML = perc ;
		
		$("#label").html(perc);
		
		
		// current-affairs >>
		
		 if (typeof $.cookie('affairs') === 'undefined'){
               ca = ",";
		
            } else {
                ca = $.cookie('affairs');
		
     }
      
       if (ca.indexOf('15000') > -1) {
            $.removeCookie('affairs', { path: '/' });
       } 
	  var  ca_array = ca.split(',');
	  var  ca_array_lg = (ca_array.length -1 )/2 -1;
	 // var num_matches = ca.match(/C/gi).length;
	    num_matches = ca.split("C").length - 1;
	  ca_acc = Math.round((Number(num_matches) / ca_array_lg)*100);
	  
	  
	 
	  
	  
	  $('#ca_status').text(ca_array_lg);
	 // $('#ca_test').text(ca);
	   $('#ca_accrcy').text(ca_acc);
	  $('#ca_correct_count').text(num_matches);
	  if(ca_acc > 40){	  
	         $('#ca_accrcy').css('color', 'black');
		  } 
	  if(ca_acc > 30 && ca_acc < 40 ){	  
	         $('#ca_accrcy').css('color', 'black');
		  } 
	   if(ca_acc < 30){	  
	         $('#ca_accrcy').css('color', 'black');
		  } 
		
		// current-affairs  <<
     //put the logic of blur here  >> 
	  if (typeof $.cookie('permission') === 'undefined'){
            permission = '';
         } else {
            permission = $.cookie('permission') 
          }	
		  
		  if(permission == 'no'){
			$(".view-similar-question").addClass("view-similar-question-blur"); 
            $(".hthis").hide();			
		  } else {
			   $('.view-similar-question > .view-header').hide();
		  }
      	  
	 
	 //put the logic of blur here <<


	// pks1 <<
	
	
    $('.tblpks input[id^=r]').click(function(){
		
        
		
			scr = $.cookie('clientscore') ;
	//alert(scr);
	
	
	id = jQuery(this).attr("id");
    tmpArr = id.split("_");
    node_id = tmpArr[1];
    option_number = tmpArr[0].charAt(1);
	selector = "#tb_"+node_id;
    response = jQuery(selector).val();
	response_1 =  response.charAt(0);
	//pks ->  show chart if stats here , when user submits the reposne, this has to be shown .>>
	
	wsdiv = "#"+"node-"+node_id;
	formname = "question_" + node_id;	
	
	

	
	if( ($('.field-name-field-stats').length) && (!($(this).parents("#sidebar-second").length == 1)) ){
		
	
	$("form[name=\"question_"+node_id+"\""+"]").append('<div id="question_append_div1"><div id="score_msg"><span></span></div><div id="chart_msg"><span class="pksthrobber">Analyzing your response against other users ....</span></div><div id="chart_div"><div id="pie_chart"></div><div id="col_chart"></div></div></div>');
   
	setTimeout(numbers, 1500);
	} else {
		$("#score_msg").remove();
		$("form[name=\"question_"+node_id+"\""+"]").append('<div id="question_append_div1"><div id="score_msg"><span></span></div></div>');
		
	}
	
	// pks -> chart <<
	
 //if(prev_node_id !== node_id){
 if (arr.indexOf(node_id) === -1){
	op = node_id + "," + option_number + "," + response_1 + ";"
	
	//alert(op);
	
	if (typeof $.cookie('response') === 'undefined'){
        op = op
		
     } else {
        op = $.cookie('response') + op
		
     }
	//$.removeCookie('response');
	//$.cookie('response', op);	
	$.cookie('response', op, { expires: 7, path: '/' });
	//prev_node_id = node_id;
	arr.push(node_id);
	
	// pks current affairs >>
	
	
	
	  
	  if (node_id > 15639 && node_id < 15710){
		  
		 docurrentaffairs(node_id, response_1);  		  
	  }
	  
 
	
	// pks current affairs <<

	matchesCount = op.split(";").length - 1;
	
	if (matchesCount>5){

	    job = "cookie";	  
        jQuery.ajax( {
			        
					type: "POST",
					url: "http://examrobot.com/post_response/post", 
					data: { "cl_data":op , "job":job },
					success: function(data){
					$.removeCookie('response', { path: '/' });
					
                                                                          
					}
					
				   });
			
        	
								
	}
	
	//score routine startes here >>
	
	
	score  = $.cookie('clientscore') ;
	if (typeof score === 'undefined'){
        score = 0;
	     } else {
        score = score;
     }
	if (response_1 === 'C'){
		
		x  = parseInt(score) ; 
		x1 = x - 20;
		y = x + 5;
	 
	    //$('#dash_score')
		$('#score_msg')
         .prop('number', x1)
         .animateNumber(
          {
           number: y
          },
         3000
         ); 
		 
		score = parseInt(score) + 5;
		//alert(score);
		$.cookie('clientscore', score, { expires: 7, path: '/' });
	}
	
	// sync score for every 5 correct question . later will be changed to approx 25
     remainder = score % 25 ;
	
	if (remainder === 0 ||
	score === 10 ||
    score === 20 ||
    score === 30 ||
    score === 40 ||
    score === 50||
	score === 100 ||
	score === 200 ||
	score === 375 ||
	score === 750 ||
	score === 1250 ||
	score === 2000 ||
	score === 3000 ||
	score === 5000 ||
	score === 7500 ||
	score === 10000 ||
	score === 12500 ||
	score === 15000 ||
	score === 20000 ||
    score === 25000) {

	op = score;
	job = "score";
	jQuery.ajax( {
				type: "POST",
				url: "http://examrobot.com/post_response/post", 
				data: { "cl_data":op , "job":job },
				success: function(data){
						
                                                                          
										}
				});

    } 						
								
    //score routine ends  here  <<
	
  
 }	
  }); 
  
  //pks2 >> write all functions here >>
  function displaytext(current_score){
	  display_text = "";
	  progress_label = "";
	  percnt = 0;
	  
	  current_score = parseInt(current_score);
	  switch (true) {
	  
	  	case ((current_score < 5)):
       
      	estimate = (10 - current_score)/5;
		display_text = " Let's get started, You are  " + estimate + " correct responses away from reaching the 1st Milestone.";
		display_text = "You are now " + estimate + " correct responses away from reaching the 1st Milestone.";	
		progress_label = "Progress in stage 0-1."
         percnt =  (current_score - 0)/(10-0)*100;

        break;
		
	  case ((0 < current_score) && (current_score <10)):
       
      	estimate = (10 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 1st Milestone.";	
		progress_label = "Progress in stage 0-1."
         percnt =  (current_score - 0)/(10-0)*100;

        break;
	case ((current_score == 10)):      		
		display_text = "Congratulations on reaching the 1st Milestone!. You are now  8 correct responses away from reaching the 2nd Milestone.";
		percnt =  (current_score - 0)/(10-0)*100;
        break;

    case ((10 < current_score) && (current_score < 50)):
      	estimate = (50 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 2nd Milestone.";	
		percnt =  (current_score - 10)/(50-10)*100;
		progress_label = "Progress in stage 1-2." ;
        break;
	case ((current_score == 50)):
      	display_text = "Congratulations on reaching the 2nd Milestone!. You are now 10 correct responses away from reaching the 3rd Milestone.";	
         percnt =  (current_score - 10)/(50-10)*100;	
        break;
		
    case ((50 < current_score) && (current_score < 100)):
      	estimate = (100 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 3rd Milestone.";
        percnt =  (current_score - 50)/(100-50)*100;	
        progress_label = "Progress in stage 2-3."	;	
        break;
	case ((current_score == 100)):
      	display_text = "Congratulations on reaching the 3rd Milestone!. You are now  20 correct responses away from reaching the 4th Milestone.";	
        percnt =  (current_score - 50)/(100-50)*100	;		
        break;		
		
    case ((100 < current_score) && (current_score < 200)):
      	estimate = (200 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 4th Milestone.";	
        percnt =  (current_score - 100)/(200-100)*100	;
        progress_label = "Progress in stage 3-4.";	
        break;
	case ((current_score == 200)):
      	display_text =  "Congratulations on reaching the 4th Milestone!. You are now  35 correct responses away from reaching the 5th Milestone.";	
        percnt =  (current_score - 100)/(200-100)*100;		
        break;		
		
    case ((200 < current_score) && (current_score < 375)):
      	estimate = (375 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 5th Milestone.";
        percnt =  (current_score - 200)/(375-200)*100;	
        progress_label = "Progress in stage 4-5.";		
        break;
	case ((current_score == 375)):
      	display_text =  "Congratulations on reaching the 5th Milestone!. You are now 75 correct responses away from reaching the 6th Milestone.";	
        percnt =  (current_score - 200)/(375-200)*100	;	
        break;		
		
    case ((375 < current_score) && (current_score < 750)):
      	estimate = (750 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 6th Milestone.";
        percnt =  (current_score - 375)/(750-375)*100;	
        progress_label = "Progress in stage 5-6.";		
        break;
	case ((current_score == 750)):
      	display_text = "Congratulations on reaching the 6th Milestone!. You are now 100 correct responses away from reaching the 7th Milestone.";
        percnt =  (current_score - 375)/(750-375)*100;		
        break;		
		
    case ((750 < current_score) && (current_score < 1250)):
	    
      	estimate = (1250 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 7th Milestone.";	
		percnt =  (current_score - 750)/(1250-750)*100;
		progress_label = "Progress in stage 6-7.";	
        break;
	case ((current_score == 1250)):
      	display_text = "Congratulations on reaching the 7th Milestone!. You are now 150 correct responses away from reaching the 8th Milestone.";	
        percnt =  (current_score - 750)/(1250-750)*100;		
        break;		
		
    case ((1250 < current_score) && (current_score < 2000)):
      	estimate = (2000 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 8th Milestone.";	
        percnt =  (current_score - 1250)/(2000-1250)*100;
        progress_label = "Progress in stage 7-8.";			
        break;
	case ((current_score == 2000)):
      	display_text = "Congratulations on reaching the 8th Milestone! You are now 200 correct responses away from reaching the 9th Milestone.";
        percnt =  (current_score - 1250)/(2000-1250)*100;		
        break;	
		
    case ((2000 < current_score) && (current_score < 3000)):
      	estimate = (3000 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 9th Milestone.";	
		percnt =  (current_score - 2000)/(3000-2000)*100;
		progress_label = "Progress in stage 8-9.";
        break;
	case ((current_score == 3000)):
      	display_text = "Congratulations on reaching the 9th Milestone! You are now 400 correct responses away from reaching the 10th Milestone.";
        percnt =  (current_score - 2000)/(3000-2000)*100;		
        break;			
		
    case ((3000 < current_score) && (current_score < 5000)):
      	estimate = (5000 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 10th Milestone.";	
		percnt =  (current_score - 3000)/(5000-3000)*100;
		progress_label = "Progress in stage 9-10.";
        break;
	case ((current_score == 5000)):
      	display_text =  "Congratulations on reaching the 10th Milestone! You are now 500 correct responses away from reaching the 11th Milestone.";		
		percnt =  (current_score - 3000)/(5000-3000)*100;
        break;			
		
    case ((5000 < current_score) && (current_score < 7500)):
      	estimate = (7500 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 11th Milestone.";	
        percnt =  (current_score - 5000)/(7500-5000)*100;
        progress_label = "Progress in stage 10-11.";		
        break;
	case ((current_score == 7500)):
      	display_text = "Congratulations on reaching the 11th Milestone! You are now 500 correct responses away from reaching the 12th Milestone.";		
		percnt =  (current_score - 5000)/(7500-5000)*100;
        break;			
		
    case ((7500 < current_score) && (current_score < 10000)):
      	estimate = (10000 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 12th Milestone.";		
		percnt =  (current_score - 7500)/(10000-7500)*100;
		progress_label = "Progress in stage 11-12.";
        break;
	case ((current_score == 10000)):
      	display_text = "Congratulations on reaching the 12th Milestone! You are now 500 correct responses away from reaching the 13th Milestone.";		
		percnt =  (current_score - 7500)/(10000-7500)*100;
        break;			

    case ((10000 < current_score) && (current_score < 12500)):
      	estimate = (12500 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 13th Milestone.";	
		percnt =  (current_score - 10000)/(12500-10000)*100;
		progress_label = "Progress in stage 12-13.";
        break;
	case ((current_score == 12500)):
      	display_text = "Congratulations on reaching the 13th Milestone! You are now 500 correct responses away from reaching the 14th Milestone.";	
        percnt =  (current_score - 10000)/(12500-10000)*100;		
        break;			

    case ((12500 < current_score) && (current_score < 15000)):
      	estimate = (15000 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 14th Milestone.";	
		percnt =  (current_score - 12500)/(15000-12500)*100;
		progress_label = "Progress in stage 13-14.";
        break;
	case ((current_score == 15000)):
      	display_text = "Congratulations on reaching the 14th Milestone! You are now 1000 correct responses away from reaching the 15th Milestone.";	
        percnt =  (current_score - 12500)/(15000-12500)*100;		
        break;			
		
    case ((15000 < current_score) && (current_score < 20000)):
      	estimate = (20000 - current_score)/5;
		display_text = "You are now " + estimate + " correct responses away from reaching the 15th Milestone.";		
		percnt =  (current_score - 15000)/(20000-15000)*100;
		progress_label = "Progress in stage 14-15.";
        break;
	case ((current_score == 20000)):
      	display_text = "Congratulations on reaching the 15th Milestone! You are now 1000 correct responses away from reaching the 16th Milestone.";		
		percnt =  (current_score - 15000)/(20000-15000)*100;
		progress_label = "Progress in stage 15-16.";
        break;			
}
    
     return display_text, percnt;
  }
  //pks2 <<
  
  function docurrentaffairs(node_id, response_1){
	 // alert("ok");
	  
	  ca = "0,X,"
	 if (typeof $.cookie('affairs') === 'undefined'){
       
		
     } else {
        ca = $.cookie('affairs');
		
     }
	  var ca_array = ca.split(',');
	  if (ca_array.indexOf(node_id) === -1){
		  if (response_1 === 'C'){
			 ca_resp = 'C';
		  }	else {
			 ca_resp = 'W';
		  } 
		  
		  ca_w =   node_id + "," + ca_resp;
		  ca = ca +  ca_w + ",";
		  $.cookie('affairs', ca, { expires: 7, path: '/' });
		  if(ca_array.length % 10 == 0){
		        job = "affairs";	  
                jQuery.ajax( {
			        
					type: "POST",
					url: "http://examrobot.com/post_response/post", 
					data: { "cl_data":ca , "job":job },
					success: function(data){
					
					}
                                                                     
					
				   });
			
        	
								
	}
		  
	  }
  }
  
  function flushbeforeexit(){
	    
        op = $.cookie('response');
	    job = "cookie";	  
		
		
	if (typeof $.cookie('response') === 'undefined' || op === NULL){
        
		
     } else {
     
        jQuery.ajax( {
			        
					type: "POST",
					url: "http://examrobot.com/post_response/post", 
					async: false,
					data: { "cl_data":op , "job":job },
					success: function(data){
					$.removeCookie('response', { path: '/' });
					
                                                                          
					}
					
				   });
     }
				   
				   
    score  = $.cookie('clientscore') ;
 	if (typeof score === 'undefined' || score === NULL){
        
		
     } else {
	if (typeof score === 'undefined'){
        score = 0;
	     } else {
        score = score;
     }
	op = score;
	job = "score";
	jQuery.ajax( {
				type: "POST",
				url: "http://examrobot.com/post_response/post", 
				async: false,
				data: { "cl_data":op , "job":job },
				success: function(data){
						
                                                                          
										}
				});	
     }				
        	
								
	
  }
  
}); 




 
