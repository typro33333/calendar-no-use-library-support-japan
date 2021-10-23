function Radio1Click(){
    var layout1 = document.getElementById('radio-1-layout');
    var layout2 = document.getElementById('radio-2-layout');
    layout1.style.backgroundColor = "rgb(255, 241, 221)";
    layout2.style.backgroundColor = "white";
    var form1 = document.getElementById('txt-content-2');
    form1.style.display = "block";
    var form2 = document.getElementById('group-radio');
    form2.style.display = "none";

    document.getElementById("second").style.display = "none";
    document.getElementById("first").style.display = "block";
}

function Radio2Click(){
    var layout1 = document.getElementById('radio-1-layout');
    var layout2 = document.getElementById('radio-2-layout');
    layout1.style.backgroundColor = "white";
    layout2.style.backgroundColor = "rgb(255, 241, 221)";
    
    var form1 = document.getElementById('txt-content-2');
    form1.style.display = "none";
    var form2 = document.getElementById('group-radio');
    form2.style.display = "flex";

    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
}

function Radio3Click(){
    var layout3 = document.getElementById('radio-3-layout');
    var layout4 = document.getElementById('radio-4-layout');
    var layout5 = document.getElementById('radio-5-layout');
    
    layout3.style.background = "rgb(255, 241, 221)";
    layout4.style.background = "white";
    layout5.style.background = "white";
}

function Radio4Click(){
    var layout3 = document.getElementById('radio-3-layout');
    var layout4 = document.getElementById('radio-4-layout');
    var layout5 = document.getElementById('radio-5-layout');

    layout3.style.background = "white";
    layout4.style.background = "rgb(255, 241, 221)";
    layout5.style.background = "white";
}

function Radio5Click(){
    var layout3 = document.getElementById('radio-3-layout');
    var layout4 = document.getElementById('radio-4-layout');
    var layout5 = document.getElementById('radio-5-layout');

    layout3.style.background = "white";
    layout4.style.background = "white";
    layout5.style.background = "rgb(255, 241, 221)";
}

function CheckBox2(){
    var checkbox2 = document.getElementById("checkbox2").checked;
    if(checkbox2){
        document.getElementById("layout-checkbox2").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout-checkbox2").style.backgroundColor = "white";
    }
}

function CheckBox3(){
    var checkbox3 = document.getElementById("checkbox3").checked;
    if(checkbox3){
        document.getElementById("layout-checkbox3").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout-checkbox3").style.backgroundColor = "white";
    }
}

function CheckBox4(){
    var checkbox4 = document.getElementById("checkbox4").checked;
    if(checkbox4){
        document.getElementById("layout-checkbox4").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout-checkbox4").style.backgroundColor = "white";
    }
}

function CheckBox5(){
    var checkbox5 = document.getElementById("checkbox5").checked;
    if(checkbox5){
        document.getElementById("layout-checkbox5").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout-checkbox5").style.backgroundColor = "white";
    }
}

function CheckBox6(){
    var checkbox6 = document.getElementById("checkbox6").checked;
    if(checkbox6){
        document.getElementById("layout-checkbox6").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout-checkbox6").style.backgroundColor = "white";
    }
}

function CheckBox7(){
    var checkbox7 = document.getElementById("checkbox7").checked;
    if(checkbox7){
        document.getElementById("layout-checkbox7").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout-checkbox7").style.backgroundColor = "white";
    }
}

function CheckBox8(){
    var checkbox8 = document.getElementById("checkbox8").checked;
    if(checkbox8){
        document.getElementById("layout-checkbox8").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout-checkbox8").style.backgroundColor = "white";
    }
}

function ClickAll(){
    var checkAll = document.getElementById("clickall").checked;
    if(checkAll){
        document.getElementById("checkbox2").checked = true;
        document.getElementById("layout-checkbox2").style.backgroundColor = "rgb(255, 241, 221)";
        document.getElementById("checkbox3").checked = true;
        document.getElementById("layout-checkbox3").style.backgroundColor = "rgb(255, 241, 221)";
        document.getElementById("checkbox4").checked = true;
        document.getElementById("layout-checkbox4").style.backgroundColor = "rgb(255, 241, 221)";
        document.getElementById("checkbox5").checked = true;
        document.getElementById("layout-checkbox5").style.backgroundColor = "rgb(255, 241, 221)";
        document.getElementById("checkbox6").checked = true;
        document.getElementById("layout-checkbox6").style.backgroundColor = "rgb(255, 241, 221)";
        document.getElementById("checkbox7").checked = true;
        document.getElementById("layout-checkbox7").style.backgroundColor = "rgb(255, 241, 221)";
        document.getElementById("checkbox8").checked = true;
        document.getElementById("layout-checkbox8").style.backgroundColor = "rgb(255, 241, 221)";
        var a = document.getElementById("disable1").disabled;
        if(!a){
            document.getElementById("disable1").checked = true;
            document.getElementById("layout_1").style.backgroundColor = "rgb(255, 241, 221)";
            document.getElementById("disable2").checked = true;
            document.getElementById("layout_2").style.backgroundColor = "rgb(255, 241, 221)";
        }
        
    }else{
        document.getElementById("checkbox2").checked = false;
        document.getElementById("checkbox3").checked = false;
        document.getElementById("checkbox4").checked = false;
        document.getElementById("checkbox5").checked = false;
        document.getElementById("checkbox6").checked = false;
        document.getElementById("checkbox7").checked = false;
        document.getElementById("checkbox8").checked = false;
        document.getElementById("layout-checkbox2").style.backgroundColor = "white";
        document.getElementById("layout-checkbox3").style.backgroundColor = "white";
        document.getElementById("layout-checkbox4").style.backgroundColor = "white";
        document.getElementById("layout-checkbox5").style.backgroundColor = "white";
        document.getElementById("layout-checkbox6").style.backgroundColor = "white";
        document.getElementById("layout-checkbox7").style.backgroundColor = "white";
        document.getElementById("layout-checkbox8").style.backgroundColor = "white";
        var b = document.getElementById("radio-7").checked;
        if(b){
            document.getElementById("disable1").checked = false;
            document.getElementById("layout_1").style.backgroundColor = "white";
            document.getElementById("disable2").checked = false;
            document.getElementById("layout_2").style.backgroundColor = "white";
        }
    }
}

function Radio6Click(){
    document.getElementById("radio-6-layout").style.backgroundColor = "rgb(255, 241, 221)";
    document.getElementById("radio-7-layout").style.backgroundColor = "white";
    document.getElementById("layout_1").style.backgroundColor="rgb(212, 212, 212)";
    document.getElementById("disable1").checked = false;
    document.getElementById("layout_2").style.backgroundColor="rgb(212, 212, 212)";
    document.getElementById("disable2").checked = false;
    document.getElementById("layout_1").classList.add('disable');
    document.getElementById("layout_2").classList.add('disable');
    document.getElementById("disable1").disabled = true;
    document.getElementById("disable2").disabled = true;
}

function Radio7Click(){
    document.getElementById("radio-7-layout").style.backgroundColor = "rgb(255, 241, 221)";
    document.getElementById("radio-6-layout").style.backgroundColor = "white";
    document.getElementById("layout_1").style.backgroundColor="white";
    document.getElementById("layout_2").style.backgroundColor="white";
    document.getElementById("layout_1").classList.remove('disable');
    document.getElementById("layout_2").classList.remove('disable');
    document.getElementById("disable1").disabled = false;
    document.getElementById("disable2").disabled = false;
}

function CheckBox9(){
    var checkbox9 = document.getElementById("disable1").checked;
    if(checkbox9){
        document.getElementById("layout_1").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout_1").style.backgroundColor = "white";
    }
}

function CheckBox10(){
    var checkbox10 = document.getElementById("disable2").checked;
    console.log(checkbox10)
    if(checkbox10){
        document.getElementById("layout_2").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("layout_2").style.backgroundColor = "white";
    }
}

function btnMinus(){
    let number = document.getElementById("item-input").value;
    if(number <= 1){
        console.log(true)
        document.getElementById("item-input").value = 1;
    }else{
        number = Number(number)-1;
        document.getElementById("item-input").value = number;
        return
    }
}

function changeValue(value){
    console.log(value)
    document.getElementById("item-input").value = value;
    if(value < 1){
        document.getElementById("item-input").value = 1;
    }
}

function btnPlus(){
    let number = document.getElementById("item-input").value;
    number = Number(number)+1;
    document.getElementById("item-input").value = number;
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function lastDayInMonth (month, year) {
    return new Date(year, month, 0).getDay();
}

function timeLocal(){
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth()+1);
    var yy = String(today.getFullYear());
    var convert = new Date(yy,mm,dd).getTime();
    return Number(convert);
}

function timeConvert(yy,mm,dd){
    var convert = new Date(yy,mm,dd).getTime();
    return Number(convert);
}

function nextMonth(){
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;

    month = Number(month)+1;
    document.getElementById("month").innerHTML = month;
    if(month == 13){
        document.getElementById("month").innerHTML = month-12;
        year = Number(year) + 1;
        document.getElementById("year").innerHTML = year;
    }
    const fist_day_of_month = new Date(year,month-1,1)
    var day1 = fist_day_of_month.getDay();
    if(day1 == 0){
        day1 = 6;
    }
    for(var i = 1; i<= 42; i++){
        var item1 = document.getElementById("item"+i);
        item1.parentNode.removeChild(item1)
    }

    var totalastmonth = daysInMonth(month-1,year);
    var total = daysInMonth(month,year);

    var days = 0;
    for(var i=0;i<=6;i++){
        var row1 = document.getElementById("row-1");
        let item = document.createElement("td");
        item.setAttribute("id",`item${i+1}`);
        if(i >= day1){
            if(timeLocal()<timeConvert(year,month,days)){
                item.classList.add("future");
            }
            item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
            days += 1;
            row1.appendChild(item);
            continue;
        }
        item.innerHTML = `<div><div>${(totalastmonth-Number(lastDayInMonth(month-1,year)))+i}</div><div style="visibility: hidden;">0</div></div>`;
        row1.appendChild(item);
        continue
    }

    var numberRow2 = 7;
    
    for(i = 0; i <= 6; i++){
        var row2 = document.getElementById("row-2");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row2.appendChild(item);
        numberRow2 += 1;
        days += 1;
    }

    for(i = 0; i<=6; i++){
        var row3 = document.getElementById("row-3");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row3.appendChild(item);
        numberRow2 += 1;
        days += 1;
    }

    for(i = 0; i<=6; i++){
        var row4 = document.getElementById("row-4");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row4.appendChild(item);
        numberRow2 += 1;
        days += 1;
    }

    var resetdays = 0;
    for(i = 0; i<=6; i++){
        var row5 = document.getElementById("row-5");
        let item = document.createElement("td");
        if(days >= total){
            item.setAttribute("id",`item${numberRow2+1}`);
            item.innerHTML = `<div><div>${resetdays+1}</div><div style="visibility: hidden;">0</div></div>`;
            row5.appendChild(item);
            resetdays += 1;
            numberRow2 += 1;
            days += 1;
            if(days == total){
                days *= 0;
            }
            continue;
        }
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row5.appendChild(item);
        numberRow2 += 1;
        days += 1;
        continue
    }

    for(i = 0; i<=6; i++){
        var row6 = document.getElementById("row-6");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        console.log(day1,total,days);
        if(days <= total){
            if(timeLocal()<timeConvert(year,month,days)){
                item.classList.add("future");
            }
            item.innerHTML = `<div><div>${days}</div><div style="visibility: hidden;">0</div></div>`;
            days += 1;
            numberRow2 += 1;
            row6.appendChild(item);
            continue
        }else{
            item.innerHTML = `<div><div>${resetdays+1}</div><div style="visibility: hidden;">0</div></div>`;
            resetdays += 1;
            numberRow2 += 1;
            row6.appendChild(item);
            continue
        }
    }
}

function priviousMonth(){
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    month = Number(month)-1;
    document.getElementById("month").innerHTML = month;
    if(month == 0){
        document.getElementById("month").innerHTML = month+12;
        year = Number(year) - 1;
        document.getElementById("year").innerHTML = year;
    }

    /*Update calendar*/
    const fist_day_of_month = new Date(year,month-1,1)
    var day1 = fist_day_of_month.getDay();
    if(day1 == 0){
        day1 = 6;
    }
    for(var i = 1; i<= 42; i++){
        var item1 = document.getElementById("item"+i);
        item1.parentNode.removeChild(item1)
    }

    var totalastmonth = daysInMonth(month-1,year);
    var total = daysInMonth(month,year);

    var days = 0;
    for(var i=0;i<=6;i++){
        var row1 = document.getElementById("row-1");
        let item = document.createElement("td");
        item.setAttribute("id",`item${i+1}`);
        if(i >= day1){
            if(timeLocal()<timeConvert(year,month,days)){
                item.classList.add("future");
            }
            item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
            days += 1;
            row1.appendChild(item);
            continue;
        }
        item.innerHTML = `<div><div>${(totalastmonth-Number(lastDayInMonth(month-1,year)))+i}</div><div style="visibility: hidden;">0</div></div>`;
        row1.appendChild(item);
        continue
    }

    var numberRow2 = 7;
    
    for(i = 0; i <= 6; i++){
        var row2 = document.getElementById("row-2");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row2.appendChild(item);
        numberRow2 += 1;
        days += 1;
    }

    for(i = 0; i<=6; i++){
        var row3 = document.getElementById("row-3");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row3.appendChild(item);
        numberRow2 += 1;
        days += 1;
    }

    for(i = 0; i<=6; i++){
        var row4 = document.getElementById("row-4");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row4.appendChild(item);
        numberRow2 += 1;
        days += 1;
    }

    var resetdays = 0;
    for(i = 0; i<=6; i++){
        var row5 = document.getElementById("row-5");
        let item = document.createElement("td");
        if(days >= total){
            item.setAttribute("id",`item${numberRow2+1}`);
            item.innerHTML = `<div><div>${resetdays+1}</div><div style="visibility: hidden;">0</div></div>`;
            row5.appendChild(item);
            resetdays += 1;
            numberRow2 += 1;
            days += 1;
            if(days == total){
                days *= 0;
            }
            continue;
        }
        item.setAttribute("id",`item${numberRow2+1}`);
        if(timeLocal()<timeConvert(year,month,days)){
            item.classList.add("future");
        }
        item.innerHTML = `<div><div>${days+1}</div><div style="visibility: hidden;">0</div></div>`;
        row5.appendChild(item);
        numberRow2 += 1;
        days += 1;
        continue
    }

    for(i = 0; i<=6; i++){
        var row6 = document.getElementById("row-6");
        let item = document.createElement("td");
        item.setAttribute("id",`item${numberRow2+1}`);
        console.log(day1,total,days);
        if(days <= total){
            if(timeLocal()<timeConvert(year,month,days)){
                item.classList.add("future");
            }
            item.innerHTML = `<div><div>${days}</div><div style="visibility: hidden;">0</div></div>`;
            days += 1;
            numberRow2 += 1;
            row6.appendChild(item);
            continue
        }else{
            item.innerHTML = `<div><div>${resetdays+1}</div><div style="visibility: hidden;">0</div></div>`;
            resetdays += 1;
            numberRow2 += 1;
            row6.appendChild(item);
            continue
        }
    }
}

