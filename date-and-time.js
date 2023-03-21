<script>
  function updateTime() {
    var now = new Date();
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var dayOfWeek = days[now.getDay()];
    var month = months[now.getMonth()];
    var dayOfMonth = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    var amOrPm = hours < 12 ? 'AM' : 'PM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be treated as 12
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = dayOfWeek + ', ' + month + ' ' + dayOfMonth + ', ' + year + ', ' + hours + ':' + minutes + ':' + seconds + ' ' + amOrPm;
    document.getElementById("clock").innerHTML = timeString;
  }

  setInterval(updateTime, 1000); // update the time every second
</script>