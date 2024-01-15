import { Component, Input } from "@angular/core";
import { NgIf } from "@angular/common";
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";
import { HogwartsService } from "../services/hogwarts.service";
import Student from "../models/student";
import { mockHouses } from "../services/mockData";
import House, { HogwartsHouse } from "../models/house";
import { environment } from "../../environment/environment";

@Component({
  selector: "app-add-student",
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: "./add-student.component.html",
  styleUrl: "./add-student.component.css",
})
export class AddStudentComponent {
  @Input() houses: House[] = [];

  showAddStudentForm: boolean = false;

  addStudentForm = this.formBuilder.group({
    firstName: "",
    lastName: "",
    house: "",
  });

  constructor(
    private formBuilder: FormBuilder,
    private hogwartsService: HogwartsService
  ) {}

  onAddStudent() {
    this.showAddStudentForm = true;
  }

  onSubmit(): void {
    if (!this.isValidForm()) {
      alert("Please fill out all fields");
      return;
    }
    const selectedHouse = environment.isContainerized
      ? this.houses.find(
          (house) => house.name === this.addStudentForm.value.house
        )
      : mockHouses.find(
          (house) => house.name === this.addStudentForm.value.house
        );
    if (!selectedHouse) {
      alert("Invalid house");
      return;
    }
    console.log("Adding student", this.addStudentForm.value);
    const newStudent: Student = {
      firstName: this.addStudentForm.value.firstName as string,
      lastName: this.addStudentForm.value.lastName as string,
      house: {
        id: selectedHouse.id,
        name: this.addStudentForm.value.house as HogwartsHouse,
      },
    };
    this.hogwartsService.addStudent(newStudent).subscribe((student) => {
      console.log("Added student", student);
      this.showAddStudentForm = false;
      this.addStudentForm.reset();
    });
  }

  onCancel(): void {
    this.showAddStudentForm = false;
    this.addStudentForm.reset();
  }

  // TODO: proper form validation
  isValidForm(): boolean {
    let valid = false;
    if (
      this.addStudentForm.value.firstName &&
      this.addStudentForm.value.lastName &&
      this.addStudentForm.value.house
    ) {
      valid = true;
    }
    return valid;
  }
}
