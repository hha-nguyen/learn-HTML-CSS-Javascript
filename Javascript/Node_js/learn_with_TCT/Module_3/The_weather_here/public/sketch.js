function setup() {
  noCanvas();
  let lat, lon, weather, air;
  const button = document.getElementById('checkin');
  button.addEventListener('click', async event => {
    const data = { lat, lon, weather, air };
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
      const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=90bf63c218a02d111dfd7e3f6db5222f&units=metric`;
      const weather_response = await fetch(weather_url);
      const weather_data = await weather_response.json();
      document.getElementById('description').textContent = weather_data.weather[0].description;
      document.getElementById('temperature').textContent = weather_data.main.temp.toFixed(2);

      const aq_url = `https://api.waqi.info/feed/geo:${lat};${lon}/?token=a40f1b450083221b49014135908885d7aa1fe82a`;
      const aq_response = await fetch(aq_url);
      const aq_data = await aq_response.json();
      document.getElementById('aq_city').textContent = aq_data.data.city.name;
      document.getElementById('aq_aqi').textContent = aq_data.data.aqi;
      document.getElementById('aq_pm').textContent = aq_data.data.dominentpol;
      document.getElementById('aq_status').textContent = aq_data.status;
      document.getElementById('aq_date').textContent = aq_data.data.time.iso;
      
      weather = weather_data, air = aq_data;
      const data = {
        weather: weather_data,
        air_quality: aq_data
      }
      console.log(data);
    });
  } else {
    console.log('geolocation not available');
  }
}