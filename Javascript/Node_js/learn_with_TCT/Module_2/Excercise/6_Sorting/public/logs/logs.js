getData();

const selfies = [];

document.getElementById('time', (event) => {
    sortData((a, b) => b.time - a.time);
});

document.getElementById('mood', event => {
    sortData((a, b) => b.mood > a.mood ? -1 : 1);
})

function sortData(compare) {
    for (let item of selfies) {
        item.elt.remove();
    }
    selfies.sort(compare);
    for (let item of selfies) {
        document.body.append(item.elt);
    }
}

async function getData() {
    const response = await fetch('/api');
    const data = await response.json();
    
    for (item of data) {
        const root = document.createElement('p');
        const mood = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const image = document.createElement('img');

        mood.textContent = `mood: ${item.mood}`;
        geo.textContent = `latitude: ${item.lat}°, longitude: ${item.lon}°`;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = dateString;
        image.src = item.image64;
        image.alt = 'Mesto face';

        root.append(mood, geo, date, image);

        selfies.push({
            elt: root,
            time: item.timestamp,
            mood: item.mood
        });

        document.body.append(root);
    }    
    console.log(data);
}
