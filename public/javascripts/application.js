// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function remove_fields (link) {
	$(link).previous("input[type=hidden]").value = "1";
	$(link).up(".fields").hide();
}

function add_fields(link, association, content) {
	var new_id = new Date().getTime();
	var regexp = RegExp("new_" + association, "g")
	$(link).up().insert({
		before: content.replace(regexp, new_id)
	})
}





function showStudentStaffResidences(choice)
{
  if (choice == "1"){
    document.getElementById("restypestaff").style.display = "table-row";      
    document.getElementById("restypestudent").style.display = 'none';            
  } else if (choice == '2'){
    document.getElementById("restypestudent").style.display = "table-row";        
    document.getElementById("restypestaff").style.display = 'none';      
  }
}

function showMenuForAllocatableRooms(choice)
{
  if (choice < "3"){    
    document.getElementById("restypes").style.display = 'none';
    document.getElementById("keys1").style.display = 'none';
    document.getElementById("keys2").style.display = 'none';
    document.getElementById("keys3").style.display = 'none';
    document.getElementById("keys4").style.display = 'none';            
  } else if (choice >= '3'){
    document.getElementById("restypes").style.display = "table-row";
    document.getElementById("keys1").style.display = "table-row";
    document.getElementById("keys2").style.display = "table-row";
    document.getElementById("keys3").style.display = "table-row";
    document.getElementById("keys4").style.display = "table-row";             
  }
}

function showStaffLate(choice)
{
  if (choice > "30"){
    document.getElementById("reason").style.display = "table-row";                
  } else if (choice < "30"){
    document.getElementById("reason").style.display = "none";        
  }
}