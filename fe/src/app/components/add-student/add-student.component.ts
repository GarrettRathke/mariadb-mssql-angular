import { Component } from "@angular/core";
import { NgIf } from "@angular/common";
import { FormBuilder } from "@angular/forms";
import { HogwartsService } from "../../services/hogwarts.service";

@Component({
  selector: "app-add-student",
  standalone: true,
  imports: [NgIf],
  templateUrl: "./add-student.component.html",
  styleUrl: "./add-student.component.css",
})
export class AddStudentComponent {
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
    // TODO: add student to database
    console.log("Adding student", this.addStudentForm.value);

    this.addStudentForm.reset();
  }
}
