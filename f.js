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

function MonthHaveChoosen(){
    let checkdefault = document.getElementById("radio-1").checked;
    console.log(checkdefault)
    var month = 0;
    if(checkdefault == true){
        month = 3;
        return ;
    }
    return 0;
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

function getDatesInMonth(){
    let d = new Date();
        let month = d.getMonth();
        let year = d.getFullYear();
        var point =[];
        let nowDate = new Date(year,month,0).getDate();
        for(var i=0;i<7;i++){
            if(document.getElementById(`txt${i}`).innerHTML < 8){
                point.push(i);
            }
        }
        var point2 =(nowDate-point.length)
        for(var i = 0; i<point2;i++){
            point.push(point[point.length-1]+1)
        }
        var currentdate = d.getDate();
        data2 = [];
        for(var i = point[0]; i<42;i++){
            var a = document.getElementById(`txt${i}`).innerHTML;
            if(currentdate <= Number(a)){
                data2.push(`${i}`);
            }
        }
    return data2;
}

function CheckBox1(){
    var checkbox0 = document.getElementById("checkbox1").checked;
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    console.log(timeLocal(),timeConvert(year,month));
    if(checkbox0){
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 0){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            console.log(point)
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 0){
                    var a = document.getElementById(`${point[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${point[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        document.getElementById("ele2-container__checkbox1").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 0){
                    document.getElementById(`choosen${data2[i]}`).outerHTML = "";
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 0){
                    document.getElementById(`choosen${point[i]}`).remove();
                }
            }
        }
        document.getElementById("ele2-container__checkbox1").style.backgroundColor = "white";
    }
}

function CheckBox2(){
    var checkbox2 = document.getElementById("checkbox2").checked;
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    if(checkbox2){
        if(month == monthNumber && yearlocal == year){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 1){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 1){
                    var a = document.getElementById(`${point[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${point[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        document.getElementById("ele2-container__checkbox2").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 1){
                    var a = document.getElementById(`${data2[i]}`);
                    document.getElementById(`choosen${data2[i]}`).outerHTML = "";
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 1){
                    document.getElementById(`choosen${point[i]}`).remove();
                }
            }
        }
        document.getElementById("ele2-container__checkbox2").style.backgroundColor = "white";
    }
}

function CheckBox3(){
    var checkbox3 = document.getElementById("checkbox3").checked;
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    if(checkbox3){
        if(month == monthNumber && yearlocal == year){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 2){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 2){
                    var a = document.getElementById(`${point[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${point[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        document.getElementById("ele2-container__checkbox3").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 2){
                    var a = document.getElementById(`${data2[i]}`);
                    document.getElementById(`choosen${data2[i]}`).outerHTML = "";
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 2){
                    document.getElementById(`choosen${point[i]}`).remove();
                }
            }
        }
        document.getElementById("ele2-container__checkbox3").style.backgroundColor = "white";
    }
}

function CheckBox4(){
    var checkbox4 = document.getElementById("checkbox4").checked;
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    if(checkbox4){
        if(month == monthNumber && yearlocal == year){
            console.log(true)
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 3){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }else if(timeLocal()<timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 3){
                    var a = document.getElementById(`${point[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${point[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        document.getElementById("ele2-container__checkbox4").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 3){
                    var a = document.getElementById(`${data2[i]}`);
                    document.getElementById(`choosen${data2[i]}`).outerHTML = "";
                }
            }
        }else if(timeLocal()<timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 3){
                    document.getElementById(`choosen${point[i]}`).remove();
                }
            }
        }
        document.getElementById("ele2-container__checkbox4").style.backgroundColor = "white";
    }
}

function CheckBox5(){
    var checkbox5 = document.getElementById("checkbox5").checked;
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    if(checkbox5){
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 4){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 4){
                    var a = document.getElementById(`${point[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${point[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        document.getElementById("ele2-container__checkbox5").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 4){
                    var a = document.getElementById(`${data2[i]}`);
                    document.getElementById(`choosen${data2[i]}`).outerHTML = "";
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 4){
                    document.getElementById(`choosen${point[i]}`).remove();
                }
            }
        }
        document.getElementById("ele2-container__checkbox5").style.backgroundColor = "white";
    }
}

function CheckBox6(){
    var checkbox6 = document.getElementById("checkbox6").checked;
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    if(checkbox6){
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 5){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 5){
                    var a = document.getElementById(`${point[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${point[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        document.getElementById("ele2-container__checkbox6").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        if(month == monthNumber && yearlocal == year){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 5){
                    document.getElementById(`choosen${data2[i]}`).outerHTML = "";
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 5){
                    document.getElementById(`choosen${point[i]}`).remove();
                }
            }
        }
        document.getElementById("ele2-container__checkbox6").style.backgroundColor = "white";
    }
}

function CheckBox7(){
    var checkbox7 = document.getElementById("checkbox7").checked;
    var month = document.getElementById("month").innerHTML;
    var year = document.getElementById("year").innerHTML;
    if(checkbox7){
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 6){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 6){
                    var a = document.getElementById(`${point[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${point[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        document.getElementById("ele2-container__checkbox7").style.backgroundColor = "rgb(265, 241, 221)";
    }else{
        if(month == monthNumber && year == yearlocal){
            let d = new Date();
            let month = d.getMonth();
            let year = d.getFullYear();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            var currentdate = d.getDate();
            data2 = [];
            for(var i = point[0]; i<42;i++){
                var a = document.getElementById(`txt${i}`).innerHTML;
                if(currentdate <= Number(a)){
                    data2.push(`${i}`);
                }
            }
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                d = new Date(year,month,date)
                var day = d.getDay();
                if(day == 6){
                    document.getElementById(`choosen${data2[i]}`).outerHTML = "";
                }
            }
        }else if(timeLocal() < timeConvert(year,month)){
            let d = new Date();
            var point =[];
            let nowDate = new Date(year,month,0).getDate();
            for(var i=0;i<7;i++){
                if(document.getElementById(`txt${i}`).innerHTML < 8){
                    point.push(i);
                }
            }
            var point2 =(nowDate-point.length)
            for(var i = 0; i<point2;i++){
                point.push(point[point.length-1]+1)
            }
            for(var i = 0; i<point.length;i++){
                var date = document.getElementById(`txt${point[i]}`).textContent;
                d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 6){
                    document.getElementById(`choosen${point[i]}`).remove();
                }
            }
        }
        document.getElementById("ele2-container__checkbox7").style.backgroundColor = "white";
    }
}

function CheckBox8(){
    var checkbox8 = document.getElementById("checkbox8").checked;
    if(checkbox8){
        document.getElementById("ele2-container__checkbox8").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("ele2-container__checkbox8").style.backgroundColor = "white";
    }
}

function CheckBox9(){
    var checkbox9 = document.getElementById("checkbox9").checked;
    if(checkbox9){
        document.getElementById("ele2-container__checkbox9").style.backgroundColor = "rgb(255, 241, 221)";
    }else{
        document.getElementById("ele2-container__checkbox9").style.backgroundColor = "white";
    }
}

function Radio6Click(){
    document.getElementById("radio-6-layout").style.backgroundColor = "rgb(255, 241, 221)";
    document.getElementById("radio-7-layout").style.backgroundColor = "white";
    document.getElementById("ele2-container__checkbox8").style.backgroundColor = "rgb(212, 212, 212)";
    document.getElementById("checkbox__txt-8").style.color = "white";
    document.getElementById("ele2-container__checkbox9").style.backgroundColor = "rgb(212, 212, 212)";
    document.getElementById("checkbox__txt-9").style.color = "white";
    document.getElementById("checkbox8").disabled = true;
    document.getElementById("checkbox9").disabled = true;
    document.getElementById("checkbox8").checked = false;
    document.getElementById("checkbox9").checked = false;
}

function Radio7Click(){
    document.getElementById("radio-7-layout").style.backgroundColor = "rgb(255, 241, 221)";
    document.getElementById("radio-6-layout").style.backgroundColor = "white";
    document.getElementById("ele2-container__checkbox8").style.backgroundColor = "white";
    document.getElementById("checkbox__txt-8").style.color = "orange";
    document.getElementById("checkbox-disable").style.borderColor = "rgb(212, 212, 212)";
    document.getElementById("ele2-container__checkbox9").style.backgroundColor = "white";
    document.getElementById("checkbox__txt-9").style.color = "orange";
    document.getElementById("checkbox8").disabled = false;
    document.getElementById("checkbox9").disabled = false;
}

function ClickAll(){
    var checkall = document.getElementById("checkbox-all").checked;
    var r7 = document.getElementById("radio-7").checked;
    if(checkall){
        for(var i =0; i<7;i++){
            document.getElementById(`ele2-container__checkbox${i+1}`).style.backgroundColor = "rgb(255, 241, 221)";
            document.getElementById(`checkbox${i+1}`).checked = true;
        }
        if(r7){
            for(var i =0; i<2;i++){
                document.getElementById(`ele2-container__checkbox${i+8}`).style.backgroundColor = "rgb(255, 241, 221)";
                document.getElementById(`checkbox${i+8}`).checked = true;
            }
        }
    }else{
        for(var i =0; i<7;i++){
            document.getElementById(`ele2-container__checkbox${i+1}`).style.backgroundColor = "white";
            document.getElementById(`checkbox${i+1}`).checked = false;
        }
        if(r7){
            for(var i =0; i<2;i++){
                document.getElementById(`ele2-container__checkbox${i+8}`).style.backgroundColor = "white";
                document.getElementById(`checkbox${i+8}`).checked = false;
            }
        }
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

function timeConvert(yy,mm){
    var convert = new Date(yy,mm).getTime();
    return Number(convert);
}

var today = new Date();
var month = new Array();
month[0] = 1;
month[1] = 2;
month[2] = 3;
month[3] = 4;
month[4] = 5;
month[5] = 6;
month[6] = 7;
month[7] = 8;
month[8] = 9;
month[9] = 10;
month[10] = 11;
month[11] = 12;

var yearlocal = today.getFullYear();


var monthNumber = month[today.getMonth()];

function nextMonth(){
    var year = document.getElementById("year").innerHTML;
    var month = document.getElementById("month").innerHTML;
    var check1 = document.getElementById("checkbox1").checked;
    var check2 = document.getElementById("checkbox2").checked;
    var check3 = document.getElementById("checkbox3").checked;
    var check4 = document.getElementById("checkbox4").checked;
    var check5 = document.getElementById("checkbox5").checked;
    var check6 = document.getElementById("checkbox6").checked;
    var check7 = document.getElementById("checkbox7").checked;
    month = Number(month) + 1;
    if(month == 13){
        month = 1;
        year = Number(year)+1;
        document.getElementById("year").innerHTML = year;
        document.getElementById("month").innerHTML = month;
        var data_calendar = dataCalendar(year,month);
        for(var i=0; i<42;i++){
            document.getElementById(`txt${i}`).innerHTML = data_calendar[i];
        }
    }
    document.getElementById("month").innerHTML = month;
    var data_calendar = dataCalendar(year,month);
    for(var i=0; i<42;i++){
        document.getElementById(`txt${i}`).innerHTML = data_calendar[i];
        document.getElementById(`${i}`).style.backgroundColor = "rgb(250, 250, 250)"
    }

    var point =[];
    let nowDate = new Date(year,month,0).getDate();
    for(var i=0;i<7;i++){
        if(document.getElementById(`txt${i}`).innerHTML < 8){
            point.push(i);
        }
    }
    var point2 =(nowDate-point.length)
    for(var i = 0; i<point2;i++){
        point.push(point[point.length-1]+1)
    }
    for(var i=0; i<42;i++){
        var a = document.getElementById(`choosen${i}`);
        if(a != null){
            document.getElementById(`choosen${i}`).remove();
        }
    }
    if(check1){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 0){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check2){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 1){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check3){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 2){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check4){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 3){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check5){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 4){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check6){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 5){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check7){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 6){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    for(var i=0; i < point.length;i++){
        document.getElementById(point[i]).style.backgroundColor = "white";
        document.getElementById(point[i]).style.borderRadius = "4px"
    }
    if(month == monthNumber && yearlocal == year){
        const d = new Date();
        var currentdate = d.getDate();
        for(var i=0; i < point.length;i++){
            document.getElementById(point[i]).style.backgroundColor = "rgb(250, 250, 250)";
            document.getElementById(point[i]).style.borderRadius = "0px"
        }
        data2 = []
        for(var i = point[0]; i<42;i++){
            var a = document.getElementById(`txt${i}`).innerHTML;
            if(currentdate <= Number(a)){
                data2.push(`${i}`);
            }
        }
        console.log(data2)
        for(var i=0;i<data2.length;i++){
            document.getElementById(data2[i]).style.backgroundColor = "white";
            document.getElementById(data2[i]).style.borderRadius = "4px"
        }
        for(var i=0; i<42;i++){
            var a = document.getElementById(`choosen${i}`);
            if(a != null){
                document.getElementById(`choosen${i}`).remove();
            }
        }
        if(check1){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 0){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check2){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 1){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check3){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 2){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check4){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 3){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check5){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 4){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check6){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 5){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check7){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 6){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
    }
    else if(timeLocal() > timeConvert(year,month)){
        var point =[];
        let nowDate = new Date(year,month,0).getDate();
        for(var i=0;i<7;i++){
            if(document.getElementById(`txt${i}`).innerHTML < 8){
                point.push(i);
            }
        }
        var point2 =(nowDate-point.length)
        for(var i = 0; i<point2;i++){
            point.push(point[point.length-1]+1)
        }
        for(var i=0; i < point.length;i++){
            document.getElementById(point[i]).style.backgroundColor = "rgb(250, 250, 250)";
            document.getElementById(point[i]).style.borderRadius = "0px"
        }
        for(var i=0; i<42;i++){
            var a = document.getElementById(`choosen${i}`);
            if(a != null){
                document.getElementById(`choosen${i}`).remove();
            }
        }
    }
    return
}

function priviousMonth(){
    var year = document.getElementById("year").innerHTML;
    var month = document.getElementById("month").innerHTML;
    var check1 = document.getElementById("checkbox1").checked;
    var check2 = document.getElementById("checkbox2").checked;
    var check3 = document.getElementById("checkbox3").checked;
    var check4 = document.getElementById("checkbox4").checked;
    var check5 = document.getElementById("checkbox5").checked;
    var check6 = document.getElementById("checkbox6").checked;
    var check7 = document.getElementById("checkbox7").checked;
    month = Number(month) - 1;
    if(month == 0){
        month = 12;
        year = Number(year)-1;
        document.getElementById("year").innerHTML = year;
        document.getElementById("month").innerHTML = month;
        var data_calendar = dataCalendar(year,month);
        for(var i=0; i<42;i++){
            document.getElementById(`txt${i}`).innerHTML = data_calendar[i];
        }
    }
    document.getElementById("month").innerHTML = month;
    var data_calendar = dataCalendar(year,month);
    for(var i=0; i<42;i++){
        document.getElementById(`txt${i}`).innerHTML = data_calendar[i];
    }
    var point =[];
    let nowDate = new Date(year,month,0).getDate();
    for(var i=0;i<7;i++){
        if(document.getElementById(`txt${i}`).innerHTML < 8){
            point.push(i);
        }
    }
    var point2 =(nowDate-point.length)
    for(var i = 0; i<point2;i++){
        point.push(point[point.length-1]+1)
    }
    for(var i=0; i < 42;i++){
        document.getElementById(`${i}`).style.backgroundColor = "rgb(250, 250, 250)";
        document.getElementById(`${i}`).style.borderRadius = "0px"
    }
    for(var i=0; i<42;i++){
        var a = document.getElementById(`choosen${i}`);
        if(a != null){
            document.getElementById(`choosen${i}`).remove();
        }
    }
    if(check1){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 0){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check2){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 1){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check3){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 2){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check4){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 3){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check5){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 4){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check6){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 5){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(check7){
        for(var i = 0; i<point.length;i++){
            var date = document.getElementById(`txt${point[i]}`).textContent;
            let d = new Date(year,month-1,date)
            var day = d.getDay();
            if(day == 6){
                var a = document.getElementById(`${point[i]}`);
                var b = document.createElement('div');
                b.setAttribute("id",`choosen${point[i]}`)
                b.classList.add("choosen");
                b.innerHTML = "曜日を";
                a.appendChild(b);
            }
        }
    }
    if(timeLocal() > timeConvert(year,month)){
        for(var i=0; i<42;i++){
            var a = document.getElementById(`choosen${i}`);
            if(a != null){
                document.getElementById(`choosen${i}`).remove();
            }
        }
    }
    if(month == monthNumber){
        const d = new Date();
        var currentdate = d.getDate();
        data2 = []
        for(var i = point[0]; i<42;i++){
            var a = document.getElementById(`txt${i}`).innerHTML;
            if(currentdate <= Number(a)){
                data2.push(`${i}`);
            }
        }
        for(var i=0;i<data2.length;i++){
            document.getElementById(data2[i]).style.backgroundColor = "white";
            document.getElementById(data2[i]).style.borderRadius = "4px"
        }
        for(var i=0; i<42;i++){
            var a = document.getElementById(`choosen${i}`);
            if(a != null){
                document.getElementById(`choosen${i}`).remove();
            }
        }
        if(check1){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 0){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check2){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 1){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check3){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 2){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check4){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 3){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check5){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 4){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check6){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 5){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
        if(check7){
            for(var i = 0; i<data2.length;i++){
                var date = document.getElementById(`txt${data2[i]}`).textContent;
                let d = new Date(year,month-1,date)
                var day = d.getDay();
                if(day == 6){
                    var a = document.getElementById(`${data2[i]}`);
                    var b = document.createElement('div');
                    b.setAttribute("id",`choosen${data2[i]}`)
                    b.classList.add("choosen");
                    b.innerHTML = "曜日を";
                    a.appendChild(b);
                }
            }
        }
    }else if(timeLocal() < timeConvert(year,month)){
        var point =[];
        let nowDate = new Date(year,month,0).getDate();
        for(var i=0;i<7;i++){
            if(document.getElementById(`txt${i}`).innerHTML < 8){
                point.push(i);
            }
        }
        var point2 =(nowDate-point.length)
        for(var i = 0; i<point2;i++){
            point.push(point[point.length-1]+1)
        }
        for(var i=0; i < point.length;i++){
            document.getElementById(point[i]).style.backgroundColor = "white";
            document.getElementById(point[i]).style.borderRadius = "4px"
        }
    }
    return
}

function dataCalendar(yy,mm){
    const d = new Date(yy,mm-1,1);
    let day = d.getDay(); //5
    let priviousDate = new Date(yy,mm-1,0).getDate();
    let nowDate = new Date(yy,mm,0).getDate();
    let point = 0;
    let data = [];
    for(var i=0;i<7;i++){
        if(i >= day){
            data.reverse()
            for(var j=0;j<=(6-day);j++){
                data.push(j+1);
                point = j+1;
            }
            break
        }
        data.push(priviousDate-i);
    }
    point = point +1;
    for(point; point<=nowDate;point++){
        data.push(point);
    }
    var len = (42 - data.length);
    for(var h=0; h < len;h++){
        data.push(h+1)
    }
    return data
}

document.addEventListener("DOMContentLoaded", function() { 
    let select1 = document.getElementById("select_1");
    let select2 = document.getElementById("select_2");

    for(var i=0;i<24;i++){
        let option = document.createElement('option');
        option.setAttribute('value',`value_${i}`);
        option.innerHTML = `- ${i}:00`;
        select1.appendChild(option);
    }

    for(var i=0;i<24;i++){
        let option = document.createElement('option');
        option.setAttribute('value',`value_${i}`);
        option.innerHTML = `- ${i}:00`;
        select2.appendChild(option);
    }

    var listitems = document.getElementById("content-form-2");
    var data = ['プレミアムプラン席','プレミアムプラン席','テーブル','1〜7名']
    for(var i=0;i<4;i++){
        let div = document.createElement('div');
        if(i >= 2){
            div.classList.add('item2',`border${2}`);
        }else{
            div.classList.add('item1',`border${i}`);
        }
        let span = document.createElement('span');
        span.classList.add('item1__text--style');
        span.innerHTML = data[i];
        div.appendChild(span);
        listitems.appendChild(div);
    }
    /* Custom default checkbox */
    document.getElementById("ele2-container__checkbox8").style.backgroundColor = "rgb(212, 212, 212)";
    document.getElementById("ele2-container__checkbox9").style.backgroundColor = "rgb(212, 212, 212)";
    document.getElementById("checkbox__txt-8").style.color = "white";
    document.getElementById("checkbox__txt-9").style.color = "white";
    document.getElementById("checkbox-disable").style.border = "1px solid white";
    /* End  Custom Default*/

    /*Render dates*/
    var listDates = document.getElementById('list_dates');
    var dates = ["日","月","火","水","木","金","土"];
    for(var i=0;i<7;i++){
        var item_date = document.createElement("div");
        item_date.classList.add("date__item");
        if(i==0){
            item_date.classList.add("sunday");
            item_date.innerHTML = dates[i];
            listDates.appendChild(item_date);
            continue;
        }
        else if(i==6){
            item_date.classList.add("satday");
            item_date.innerHTML = dates[i];
            listDates.appendChild(item_date);
            continue;
        }
        item_date.classList.add("normal-day");
        item_date.innerHTML = dates[i];
        listDates.appendChild(item_date);
    };

    /*Render days*/
    let d = new Date();
    let month = d.getMonth();
    let year = d.getFullYear();
    month += 1;
    document.getElementById("year").innerHTML = year;
    document.getElementById("month").innerHTML = month;

    var data_calendar = dataCalendar(year,month);
    for(var i=0; i<42;i++){
        document.getElementById(`txt${i}`).innerHTML = data_calendar[i];
    }
    var currentdate = d.getDate();
    var point =[];
    for(var i=0;i<7;i++){
        if(document.getElementById(`txt${i}`).innerHTML < 8){
            point.push(i)
        }
    }
    data2 = [];
    for(var i = point[0]; i<42;i++){
        var a = document.getElementById(`txt${i}`).innerHTML;
        if(currentdate <= Number(a)){
            data2.push(`${i}`);
        }
    }
    for(var i=0;i<data2.length;i++){
        document.getElementById(data2[i]).style.backgroundColor = "white";
        document.getElementById(data2[i]).style.borderRadius = "4px";
    }

    var t = MonthHaveChoosen();
    console.log(t)
});