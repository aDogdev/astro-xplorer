  const API_URL = "https://api.spacexdata.com/v5";

async function getAllLaunches() {
  try {
    const res = await fetch(`${API_URL}/launches`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
}

async function getLaunchByFlightNumber(flightNumber) {
  try {
    const res = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await res.json();
    return data;
  } catch (e) {
    console.error(e.message);
  }
}

export { getAllLaunches, getLaunchByFlightNumber };
