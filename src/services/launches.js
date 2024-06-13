import launches from "../mocks/launches.json";
const API_URL = "https://api.spacexdata.com/v5";

async function getAllLaunches() {
  try {
    const res = await fetch(`${API_URL}/launches`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return launches;
  }
}

async function getLaunchByFlightNumber(flightNumber) {
  try {
    const res = await fetch(`${API_URL}/launches/${flightNumber}`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export { getAllLaunches, getLaunchByFlightNumber };
