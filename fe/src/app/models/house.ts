import Student from "./student";

export type HogwartsHouse = "Gryffindor" | "Hufflepuff" | "Ravenclaw" | "Slytherin";

export default interface House {
  id: number;
  name: HogwartsHouse;
  students?: Student[];
}