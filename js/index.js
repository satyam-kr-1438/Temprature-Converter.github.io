let cal=document.getElementById("celsius");
        let fah=document.getElementById("fahrenheit");
        cal.addEventListener("input",function()
        {
             let cvalue=this.value;                                               // this.value is celsius value
             let fvalue=( (cvalue * 9/5) + 32);                                     // calculated value into fahrenheit
             if(!Number.isInteger(fvalue))                                     //check whether value of (f) is integer or not
             {
               fvalue=fvalue.toFixed(4);
             }
             fah.value=fvalue;                                                // changing value of fahrenheit
        });
        fah.addEventListener("input",function()
        {
             let fvalue=this.value;
             let cvalue= ((fvalue-32)*5/9);
             if(!Number.isInteger(cvalue))
             {
               cvalue=cvalue.toFixed(4);
             }
             cal.value=cvalue;
        });