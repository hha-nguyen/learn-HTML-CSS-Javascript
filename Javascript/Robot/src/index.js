import { VillageState, runRobot } from "./state";
import { goalOrientedRobot, routeRobot, randomRobot } from "./example-robots";
import { roadGraph } from "./roads";

const villageState = VillageState.random(roadGraph);

// runRobot(villageState, randomRobot, []);
// runRobot(villageState, routeRobot, []);
// runRobot(villageState, goalOrientedRobot, []);
