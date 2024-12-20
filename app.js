// function calcBMI(height, weight) {
//   console.log("height=", height, "weight=", weight)
//   //var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
//   var weight = weight, height = height;
//   var bmi = parseInt((weight * 703) / (height * height));
//   document.bmiform.bmi.value = bmi;
// }
async function calcBMI(height, weight) {


  // https://t9au549wr2.execute-api.us-east-1.amazonaws.com/dev/
  // https://s6hf1cruj8.execute-api.us-east-1.amazonaws.com/dev/healthcalc
  //         "Content-Type": "application/json",
  // "Access-Control-Allow-Headers": "Content-Type",
  // "Access-Control-Allow-Origin": "*", // Allow all origins

  // "Access-Control-Allow-Methods": "GET",
  const response = await fetch(`https://t9au549wr2.execute-api.us-east-1.amazonaws.com/dev/?height=${height}&weight=${weight}`,
    {
      method: 'GET',
      headers: {
        "Accept": "application/json"
      }
    });

  const raw = await response;
  console.log('Raw data is: ', raw);
  const data = await response.json();
  console.log('Returned data is: ', data);

  const bmi = data.result;
  

  if (bmi) {
    if (!isNaN(bmi)) {
      let status = 'Obese';
      let color = 'pink';    
      if (bmi < 19) {
        status = 'Under weight';
        color = 'yellow';
      } else if (bmi < 25) {
        status = 'Normal weight';
        color = 'green';
      } else if (bmi < 30) {
        status = 'Over weight';
        color = 'orange';
      } 

      document.bmiform.bmi.value = data.result;
      document.bmiform.status.value = status;
      document.bmiform.status.style.backgroundColor = color;

    }
  }
  // const data = await response.json();
  // document.getElementById('message').innerText = data.message;

}