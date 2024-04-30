
let perDayexp = [];
let hundred_per;

fetch('data.json')
 .then(response => response.json())
 .then(data => {
    for (let i = 0; i < data.length; i++){
      perDayexp.push(data[i].amount)
    }

    let max_num = Math.max.apply(null, perDayexp);

    hundred_per = max_num * 1.25;
    let per_array = [];
    for(let i = 0; i < perDayexp.length; i++){
      per_array[i] = perDayexp[i] *(100/hundred_per);
      document.getElementsByClassName("bar")[i].style.height = `${per_array[i]}%`

      if (perDayexp[i] === max_num){
        document.getElementsByClassName("bar")[i].style.backgroundColor = 'hsl(186, 34%, 60%)';
      }
      document.getElementsByClassName("tooltip")[i].innerHTML = "$ " + perDayexp[i];
    }
    console.log("m")
 });