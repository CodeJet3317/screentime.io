function calculateTime() {
  const averageScreenTimeInHours =
    document.getElementById("average-time").value;
  const averageLifespan = document.getElementById("average-life").value;
  if (averageScreenTimeInHours !== "" && averageLifespan !== "") {
    // Calculate total hours in a year based on average screen time
    const totalHours = averageScreenTimeInHours * 365;
    const Lifespan = averageLifespan;
    const days = Math.floor(totalHours / 24);
    const averageLifespan1 = Math.floor((Lifespan * days) / 365);
    const hours = Math.floor(totalHours);
    const minutes = Math.floor(totalHours * 60);

    document.getElementById("result-days").innerText =
      "Days: " + days.toFixed(2);
    document.getElementById("result-hours").innerText = "Hours: " + hours;
    document.getElementById("result-minutes").innerText = "Minutes: " + minutes;
    document.getElementById("result-lifespan1").innerText =
      "You will spend " +
      averageLifespan1 +
      " years out of " +
      Lifespan +
      " years on your phone screen according to the data provided by you";
    document.getElementById("result-container").style.display = "block";
  } else {
    alert("Please enter the average screen time and lifespan.");
  }
}
