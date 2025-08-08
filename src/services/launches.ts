import launches from "@/mocks/launches.json";
import type { Launch } from "@/types/api";
const API_URL = "https://api.spacexdata.com/v5";

async function getAllLaunches(): Promise<Launch[]> {
  try {
    const res = await fetch(`${API_URL}/launches`);
    const data: Launch[] = await res.json();
    return data;
  } catch (e: unknown) {
    const error = e as Error;
    console.error(error.message);
    return launches as unknown as Launch[];
  }
}

async function getLaunchBy({ id }: { id: string }): Promise<Launch | null> {
  try {
    const res = await fetch(`${API_URL}/launches/${id}`);
    const data: Launch = await res.json();
    return data;
  } catch (e: unknown) {
    const error = e as Error;
    console.error(error.message);
    return (launches.find((launch: any) => launch.id === id) as unknown as Launch) || null;
  }
}

export { getAllLaunches, getLaunchBy };
