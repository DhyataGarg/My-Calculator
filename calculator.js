var buttons = document.getElementsByClassName('button');
var display = document.getElementById("display");
var upper_display= document.getElementById("upper-display");
var operand1=0;
var operand2=null;
var operator=null;
var flag=true;
var number_flag=true;
var arr=[]; 

for (var i = 0; i<buttons.length; i++){
  buttons[i].addEventListener('click',function(){
    var type = this.getAttribute('data-type');
    
    if (type=='operator'){
      upper_text=(upper_display.textContent);
      operand1=parseFloat(display.textContent);
      arr.push(operand1);
      display.innerText='';
      operator=this.getAttribute('data-value');
      arr.push(operator);

      if (isNaN(operand1)){
        upper_display.innerText='Error';
      }

      else{
        upper_display.innerText=upper_text+operand1+operator;
      }

      flag=true;
        number_flag=true;
    }

    else if(type=='plus_minus'){
      if (display.textContent>0){
        display.innerText='-'+display.textContent;
      }

      else{
        var number=display.textContent;
        var str=number.toString();
        display.innerText=str.slice(1);
      }
    }

    else if (type =='decimal' & flag==true){
      value=this.getAttribute('data-value');
      display.innerText+=value;
      flag=false;
    }

    else if (type =='number'){
      if (number_flag==true){
        value=this.getAttribute('data-value');
        display.innerText+=value;
      }	

      var number=display.textContent;
      var numberstr=number.toString();
      if (number.length===13){
        number_flag=false;
      } 
    }

    else if (type=='clear'){
      display.innerText='';
      number_flag=true;
      var operand1=0;
		  var operand2=null;
		  var operator=null;
		  arr=[];
      upper_display.innerText='';
    }

    else if (type=='evaluate'){
      operand2=parseFloat(display.textContent);
		  arr.push(operand2);
      upper_display.innerText+=operand2+'=';

      result_str='';
      for (var k=0; k<arr.length; k++){
        result_str+=(arr[k]);
      }

      result=eval(result_str);

      if (isNaN(operand2) || isNaN(result)){
        upper_display.innerText='Error';
        display.innerText='';
      }

      else if(arr[1]=='/' & arr[2]==0){
        upper_display.innerText="Can't divide by zero";
        display.innerText='';
      }

      else if(arr[1]=='%'){
        result=arr[0]*arr[2]/100;
        display.innerText=result;
      }

      else{
        display.innerText=result;
      }

      flag=true;
      arr=[]
    }
  });
}

