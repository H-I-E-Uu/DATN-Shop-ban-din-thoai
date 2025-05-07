import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { NikeService } from '../../service/nike.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-add',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  nikeForm!:FormGroup
 constructor(
  private nikeService:NikeService,
  private formBuilder:FormBuilder,
  private router:Router
 ){
  this.nikeForm = this.formBuilder.group({
    name:['',[Validators.required,Validators.minLength(4)]],
    price:['',[Validators.required,Validators.min(100)]],
    image:['',[Validators.required]],
    color:['',[Validators.required]],
    status:['',[Validators.required]],
  })
 }
 handleSubmit(){
  if(this.nikeForm.invalid){
    this.nikeForm.markAllAsTouched();
    return
  }
  this.nikeService.AddNike(this.nikeForm.value).subscribe({
    next:()=>{
      alert("Thêm mới thàn công")
      this.router.navigate(['/nike'])
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
 }
}
