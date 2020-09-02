import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { DepartmentService } from '../Services/department.service';
import { IBranch } from '../ViewModel/ibranch';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  ListDepartment: IBranch[];
  Editdepartment: IBranch = { ID: 0, Name: "", Location:"" };
  URL: string = `${environment.API_URL}`;
  AddForm: FormGroup;
  EditdeForm: FormGroup;
  newDept: IBranch;

  constructor(private APIDepartment: DepartmentService, private fb: FormBuilder) {
    this.newDept = {
      Name: '',
      Location:''
    }

  }

  ngOnInit(): void {
    this.APIDepartment.GetAll().subscribe(
      (res) => {
        //console.log(res);
        this.ListDepartment = res;
        console.log(this.ListDepartment)
      },
      (err) => { console.log(err) });

    this.AddForm = this.fb.group(
      {
        Name: ['', [Validators.required]],
        Location: ['', [Validators.required]],
      })

    this.EditdeForm = this.fb.group(
      {
        Name: ['', [Validators.required]],
        Location: ['', [Validators.required]],
      })
  }

  addProduct() {
    console.log(this.AddForm.controls['Name'].value);
    this.newDept.Name = this.AddForm.controls['Name'].value;
    this.newDept.Location = this.AddForm.controls['Location'].value;

    this.APIDepartment.AddDepartment(this.newDept).subscribe(
      res => { this.newDept = res; this.ListDepartment.push(this.newDept) },
      err => console.log(err)
    )
  }

  GitOneProduct(ID: number) {
    this.APIDepartment.getOneProduct(ID).subscribe(
      (res) => { console.log(res); this.Editdepartment = res },
      (err) => { console.log(err) }
    );
  }

  EditProduct() {
    console.log(this.EditdeForm.value);
    this.APIDepartment.Edit(this.Editdepartment.ID, this.Editdepartment).subscribe(
      (res) => { console.log(res); this.ngOnInit() },
      (err) => { console.log(err) }
    );

  }

  DeleteProduct() {
    this.APIDepartment.Delete(this.Editdepartment.ID).subscribe(
      (res) => { console.log(res); this.ngOnInit() },
      (err) => { console.log(err) }
    );

  }

}
