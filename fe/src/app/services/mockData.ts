import Student from "../models/student";
import House from "../models/house";

export const mockHouses: House[] = [
    {id: 1, name: "Gryffindor", students: []},
    {id: 2, name: "Hufflepuff", students: []},
    {id: 3, name: "Ravenclaw", students: []},
    {id: 4, name: "Slytherin", students: []}
];
export const mockStudents: Student[] = [
    {id: 1, firstName: "Harry", lastName: "Potter", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 2, firstName: "Ron", lastName: "Weasley", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 3, firstName: "Hermione", lastName: "Granger", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 4, firstName: "Draco", lastName: "Malfoy", house: mockHouses.filter(h => h.name === "Slytherin" )[0]},
    {id: 5, firstName: "Cedric", lastName: "Diggory", house: mockHouses.filter(h => h.name === "Hufflepuff" )[0]},
    {id: 6, firstName: "Cho", lastName: "Chang", house: mockHouses.filter(h => h.name === "Ravenclaw" )[0]},
    {id: 7, firstName: "Luna", lastName: "Lovegood", house: mockHouses.filter(h => h.name === "Ravenclaw" )[0]},
    {id: 8, firstName: "Neville", lastName: "Longbottom", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 9, firstName: "Ginny", lastName: "Weasley", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 10, firstName: "Fred", lastName: "Weasley", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 11, firstName: "George", lastName: "Weasley", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 12, firstName: "Percy", lastName: "Weasley", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 13, firstName: "Seamus", lastName: "Finnigan", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 14, firstName: "Dean", lastName: "Thomas", house: mockHouses.filter(h => h.name === "Gryffindor" )[0]},
    {id: 15, firstName: "Vincent", lastName: "Crabbe", house: mockHouses.filter(h => h.name === "Slytherin" )[0]},
    {id: 16, firstName: "Gregory", lastName: "Goyle", house: mockHouses.filter(h => h.name === "Slytherin" )[0]},
    {id: 17, firstName: "Millicent", lastName: "Bulstrode", house: mockHouses.filter(h => h.name === "Slytherin" )[0]},
    {id: 18, firstName: "Pansy", lastName: "Parkinson", house: mockHouses.filter(h => h.name === "Slytherin" )[0]},
    {id: 19, firstName: "Blaise", lastName: "Zabini", house: mockHouses.filter(h => h.name === "Slytherin" )[0]},
    {id: 20, firstName: "Ernie", lastName: "Macmillan", house: mockHouses.filter(h => h.name === "Hufflepuff" )[0]},
    {id: 21, firstName: "Hannah", lastName: "Abbott", house: mockHouses.filter(h => h.name === "Hufflepuff" )[0]},
];