"use client";

import { Trip } from "@/models/trip";
import React, { useEffect, useState } from "react";
import { get } from "../api/api";
import TripGrid from "./TripGrid";

async function getTrips() {
  const res = await get<Trip[]>("trips");
  return res.data;
}

export default function TripList() {
  const [trips, setTrips] = useState<Trip[]>([]);

  useEffect(() => {
    getTrips()
      .then((t) => {
        setTrips(t);
      })
      .catch();
  }, []);

  return (
    <div>
      <TripGrid trips={trips} />
    </div>
  );
}
