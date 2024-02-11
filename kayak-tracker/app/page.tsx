import Image from "next/image";
import TripList from "./Trips/TripList";
import { getCurrentUser } from "./actions/authActions";

export default async function Home() {
  const user = await getCurrentUser();
  return (
    <div>
      {/* <TripList /> */}
      {user ? <TripList /> : <h1>Please Login to Continue</h1>}
    </div>
  );
}
