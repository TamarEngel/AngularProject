import { Component, Input } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
//import { Class } from '../../models/class';
import { ClassesService } from '../../services/classes.service';
import { Class } from '../../models/class';

@Component({
  selector: 'app-reactive-form-class',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form-class.component.html',
  styleUrl: './reactive-form-class.component.css'
})
export class ReactiveFormClassComponent {
  classForm!: FormGroup;
  public ClassList: Class[] = [];
  constructor(private fb: FormBuilder,private classesService: ClassesService){}
  
  ngOnInit(): void {
    this.classForm = this.fb.group({
      Id: ['', [Validators.required, Validators.min(1)]],
      Name: ['', [Validators.required, Validators.minLength(2)]],
      NumStudents: ['', [Validators.required, Validators.min(1), Validators.max(50)]]
      });
    this.ClassList=this.classesService.getClasses()
  }

  get f(): { [key: string]: AbstractControl  }{
    return this.classForm.controls;
  }

  onSubmit() {
    const newClass: Class = {
      Id:this.classForm.value.Id,
      Name:this.classForm.value.Name,
      NumStudents:this.classForm.value.NumStudents
    };
    this.classesService.addClasses(newClass)
    this.classForm.reset()
  }
}
