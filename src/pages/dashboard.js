import React, { useState } from "react";
import StatisticModule from "../modules/statisticModule";
import ListingModule from "../modules/listingModule";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  return (
    <div style={{ width: "90vw", height: 200 }}>
      <StatisticModule setTasks={setTasks} />
      <ListingModule tasks={tasks} />
    </div>
  );
}

export default Dashboard;
