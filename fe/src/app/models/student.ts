import House from "./house";

export default interface Student {
    id?: number;
    firstName: string;
    lastName: string;
    house: House;
  }