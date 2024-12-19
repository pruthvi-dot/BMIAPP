// function calcBMI(height, weight) {
//   console.log("height=", height, "weight=", weight)
//   //var weight = document.bmiform.pounds.value, height = document.bmiform.inches.value;
//   var weight = weight, height = height;
//   var bmi = parseInt((weight * 703) / (height * height));
//   document.bmiform.bmi.value = bmi;
// }
async function calcBMI(height, weight) {
  const response = await fetch('https://s6hf1cruj8.execute-api.us-east-1.amazonaws.com/dev/healthcalc',
    {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow all origins
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      }
    });
  const data = await response;
  console.log (data);
  // document.getElementById('message').innerText = data.message;
  document.bmiform.bmi.value = data.message;
}
