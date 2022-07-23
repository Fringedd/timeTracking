'use strict';

const bottom = document.getElementById('bottomC');
const bottom2 = document.getElementById('bottom2');
const bottom3 = document.getElementById('bottom3');
const bottom4 = document.getElementById('bottom4');
const bottom5 = document.getElementById('bottom5');
const bottom6 = document.getElementById('bottom6');
const day = document.getElementById('day');
const week = document.getElementById('week');
const month = document.getElementById('month');

function weekly(week1, week2, week3, week4, week5, week6) {
  bottom.innerHTML += `<div class='hours'>
    <h2>${week1.current}hrs</h2>
    <p>Last Week - ${week1.previous}hrs</p>
    </div>`;
  bottom2.innerHTML += `<div class='hours'>
    <h2>${week2.current}hrs</h2>
    <p>Last Week - ${week2.previous}hrs</p>
    </div>`;
  bottom3.innerHTML += `<div class='hours'>
    <h2>${week3.current}hrs</h2>
    <p>Last Week - ${week3.previous}hrs</p>
    </div>`;
  bottom4.innerHTML += `<div class='hours'>
    <h2>${week4.current}hrs</h2>
    <p>Last Week - ${week4.previous}hrs</p>
    </div>`;
  bottom5.innerHTML += `<div class='hours'>
    <h2>${week5.current}hrs</h2>
    <p>Last Week - ${week5.previous}hrs</p>
    </div>`;
  bottom6.innerHTML += `<div class='hours'>
    <h2>${week6.current}hrs</h2>
    <p>Last Week - ${week6.previous}hrs</p>
    </div>`;
}
function daily(day1, day2, day3, day4, day5, day6) {
  bottom.innerHTML += `<div class='hours'>
    <h2>${day1.current}hrs</h2>
    <p>Last Week - ${day1.previous}hrs</p>
    </div>`;
  bottom2.innerHTML += `<div class='hours'>
    <h2>${day2.current}hrs</h2>
    <p>Last Week - ${day2.previous}hrs</p>
    </div>`;
  bottom3.innerHTML += `<div class='hours'>
    <h2>${day3.current}hrs</h2>
    <p>Last Week - ${day3.previous}hrs</p>
    </div>`;
  bottom4.innerHTML += `<div class='hours'>
    <h2>${day4.current}hrs</h2>
    <p>Last Week - ${day4.previous}hrs</p>
    </div>`;
  bottom5.innerHTML += `<div class='hours'>
    <h2>${day5.current}hrs</h2>
    <p>Last Week - ${day5.previous}hrs</p>
    </div>`;
  bottom6.innerHTML += `<div class='hours'>
    <h2>${day6.current}hrs</h2>
    <p>Last Week - ${day6.previous}hrs</p>
    </div>`;
}
fetch('./data.json')
  .then(res => res.json())
  .then(data => {
    /* Work variables*/
    let weeklyWork = data[0].timeframes.weekly;
    let dailyWork = data[0].timeframes.daily;
    let monthlyWork = data[0].timeframes.monthly;
    /*Play variables*/
    let weeklyPlay = data[1].timeframes.weekly;
    let dailyPlay = data[1].timeframes.daily;
    let monthlyPlay = data[1].timeframes.monthly;
    /*Study Variable*/
    let weeklyStudy = data[2].timeframes.weekly;
    let dailyStudy = data[2].timeframes.daily;
    let monthlyStudy = data[2].timeframes.monthly;
    /*Exercise Variable*/
    let weeklyExercise = data[3].timeframes.weekly;
    let dailyExercise = data[3].timeframes.daily;
    let monthlyExercise = data[3].timeframes.monthly;
    /*Social Variable*/
    let weeklySocial = data[4].timeframes.weekly;
    let dailySocial = data[4].timeframes.daily;
    let monthlySocial = data[4].timeframes.monthly;
    /*Self-Care*/
    let weeklySelf = data[5].timeframes.weekly;
    let dailySelf = data[5].timeframes.daily;
    let monthlySelf = data[5].timeframes.monthly;
    week.addEventListener('click', function () {
      bottom.innerHTML = `<div class="working">
      <h5>Work</h5>
      <span>...</span>
    </div>`;
      bottom2.innerHTML = `<div class="working">
    <h5>Work</h5>
    <span>...</span>
  </div>`;
      bottom3.innerHTML = `<div class="working">
  <h5>Work</h5>
  <span>...</span>
</div>`;
      bottom4.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom5.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom6.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom.innerHTML += `<div class='hours'>
    <h2>${weeklyWork.current}hrs</h2>
    <p>Last Week - ${weeklyWork.previous}hrs</p>
    </div>`;
      bottom2.innerHTML += `<div class='hours'>
    <h2>${weeklyPlay.current}hrs</h2>
    <p>Last Week - ${weeklyPlay.previous}hrs</p>
    </div>`;
      bottom3.innerHTML += `<div class='hours'>
    <h2>${weeklyStudy.current}hrs</h2>
    <p>Last Week - ${weeklyStudy.previous}hrs</p>
    </div>`;
      bottom4.innerHTML += `<div class='hours'>
    <h2>${weeklyExercise.current}hrs</h2>
    <p>Last Week - ${weeklyExercise.previous}hrs</p>
    </div>`;
      bottom5.innerHTML += `<div class='hours'>
    <h2>${weeklySocial.current}hrs</h2>
    <p>Last Week - ${weeklySocial.previous}hrs</p>
    </div>`;
      bottom6.innerHTML += `<div class='hours'>
    <h2>${weeklySelf.current}hrs</h2>
    <p>Last Week - ${weeklySelf.previous}hrs</p>
    </div>`;
    });
    day.addEventListener('click', function () {
      bottom.innerHTML = `<div class="working">
      <h5>Work</h5>
      <span>...</span>
    </div>`;
      bottom2.innerHTML = `<div class="working">
    <h5>Work</h5>
    <span>...</span>
  </div>`;
      bottom3.innerHTML = `<div class="working">
  <h5>Work</h5>
  <span>...</span>
</div>`;
      bottom4.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom5.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom6.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom.innerHTML += `<div class='hours'>
    <h2>${dailyWork.current}hrs</h2>
    <p>Last Day - ${dailyWork.previous}hrs</p>
    </div>`;
      bottom2.innerHTML += `<div class='hours'>
    <h2>${dailyPlay.current}hrs</h2>
    <p>Last Day - ${dailyPlay.previous}hrs</p>
    </div>`;
      bottom3.innerHTML += `<div class='hours'>
    <h2>${dailyStudy.current}hrs</h2>
    <p>Last Day - ${dailyStudy.previous}hrs</p>
    </div>`;
      bottom4.innerHTML += `<div class='hours'>
    <h2>${dailyExercise.current}hrs</h2>
    <p>Last Day - ${dailyExercise.previous}hrs</p>
    </div>`;
      bottom5.innerHTML += `<div class='hours'>
    <h2>${dailySocial.current}hrs</h2>
    <p>Last Day - ${dailySocial.previous}hrs</p>
    </div>`;
      bottom6.innerHTML += `<div class='hours'>
    <h2>${dailySelf.current}hrs</h2>
    <p>Last Day - ${dailySelf.previous}hrs</p>
    </div>`;
    });
    month.addEventListener('click', function () {
      bottom.innerHTML = `<div class="working">
      <h5>Work</h5>
      <span>...</span>
    </div>`;
      bottom2.innerHTML = `<div class="working">
    <h5>Work</h5>
    <span>...</span>
  </div>`;
      bottom3.innerHTML = `<div class="working">
  <h5>Work</h5>
  <span>...</span>
</div>`;
      bottom4.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom5.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom6.innerHTML = `<div class="working">
<h5>Work</h5>
<span>...</span>
</div>`;
      bottom.innerHTML += `<div class='hours'>
    <h2>${monthlyWork.current}hrs</h2>
    <p>Last Month - ${monthlyWork.previous}hrs</p>
    </div>`;
      bottom2.innerHTML += `<div class='hours'>
    <h2>${monthlyPlay.current}hrs</h2>
    <p>Last Month - ${monthlyPlay.previous}hrs</p>
    </div>`;
      bottom3.innerHTML += `<div class='hours'>
    <h2>${monthlyStudy.current}hrs</h2>
    <p>Last Month - ${monthlyStudy.previous}hrs</p>
    </div>`;
      bottom4.innerHTML += `<div class='hours'>
    <h2>${monthlyExercise.current}hrs</h2>
    <p>Last Month - ${monthlyExercise.previous}hrs</p>
    </div>`;
      bottom5.innerHTML += `<div class='hours'>
    <h2>${monthlySocial.current}hrs</h2>
    <p>Last Month - ${monthlySocial.previous}hrs</p>
    </div>`;
      bottom6.innerHTML += `<div class='hours'>
    <h2>${monthlySelf.current}hrs</h2>
    <p>Last Month - ${monthlySelf.previous}hrs</p>
    </div>`;
    });
  });
