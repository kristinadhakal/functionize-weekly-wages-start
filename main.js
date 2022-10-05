// Weekly Wages - Start Code

// Determine Wage Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);

function btnClicked() {
  // Get Employee Inputs
  let dmHours = +document.getElementById('dm-hours').value;
  let dmPayrate = +document.getElementById('dm-payrate').value;
  let soHours = +document.getElementById('so-hours').value;
  let soPayrate = +document.getElementById('so-payrate').value;
  let kyHours = +document.getElementById('ky-hours').value;
  let kyPayrate = +document.getElementById('ky-payrate').value;

  // Calculate & Output Pay
  // Darcy Maddox
  let dmOvertime = 0;
  if (dmHours > 40) {
    dmOvertime = dmHours - 40;
    dmHours = 40;
  }
  let dmPay = dmHours * dmPayrate + dmOvertime * 1.5 * dmPayrate;
  document.getElementById('dm-wage').innerHTML = dmPay.toFixed(2);

  // Sofie Orenstein
  let soOvertime = 0;
  if (soHours > 40) {
    soOvertime = soHours - 40;
    soHours = 40;
  }
  let soPay = soHours * soPayrate + soOvertime * 1.5 * soPayrate;
  document.getElementById('so-wage').innerHTML = soPay.toFixed(2);

  // Karl Yoon
  let kyOvertime = 0;
  if (kyHours > 40) {
    kyOvertime = kyHours - 40;
    kyHours = 40;
  }
  let kyPay = kyHours * kyPayrate + kyOvertime * 1.5 * kyPayrate;
  document.getElementById('ky-wage').innerHTML = kyPay.toFixed(2);
}
