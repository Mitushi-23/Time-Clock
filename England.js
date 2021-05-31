

  let d;
  let date;
  let time;
  let utc;
  let offset;
  let nd;
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    
   
   
   setInterval(() => {
    d = new Date();
   offset=-5.00;
    utc = d.getTime() + (d.getTimezoneOffset() * 60000);
    nd = new Date(utc+(3600000*offset));
  date = nd.toLocaleString(undefined,options);
   time =  nd.getHours() + ':' + nd.getMinutes() + ':' + nd.getSeconds();
  document.getElementById('time').innerHTML = time + " <br>on " +date;
  }, 1000);
