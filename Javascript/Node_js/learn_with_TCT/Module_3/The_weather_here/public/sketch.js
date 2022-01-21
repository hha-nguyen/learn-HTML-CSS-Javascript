function setup() {
    noCanvas();
    let lat, lon;
    const button = document.getElementById('checkin');
    button.addEventListener('click', async event => {
      const data = { lat, lon };
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      const response = await fetch('/api', options);
      const json = await response.json();
      console.log(json);
    });
  
    if ('geolocation' in navigator) {
      console.log('geolocation available');
      navigator.geolocation.getCurrentPosition(async position => {
        lat = position.coords.latitude.toFixed(2);
        lon = position.coords.longitude.toFixed(2);
        console.log(lat, lon);
        document.getElementById('latitude').textContent = lat;
        document.getElementById('longitude').textContent = lon;
        const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=90bf63c218a02d111dfd7e3f6db5222f`;
        const response = await fetch(api_url);
        const json = await response.json();
        document.getElementById('description').textContent = json.weather[0].description;
        document.getElementById('temperature').textContent = (json.main.temp - 273).toFixed(2);
        console.log(json);
      });
    } else {
      console.log('geolocation not available');
    }
  }