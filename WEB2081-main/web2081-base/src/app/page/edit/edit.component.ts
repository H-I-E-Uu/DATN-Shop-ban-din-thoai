import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Component } from '@angular/core';
import { NikeService } from '../../service/nike.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-edit',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  nikeForm!:FormGroup
  id:string |null= null
  constructor(
   private nikeService:NikeService,
   private formBuilder:FormBuilder,
   private router:Router,
   private route:ActivatedRoute,
  ){
   this.nikeForm = this.formBuilder.group({
     name:['',[Validators.required,Validators.minLength(4)]],
     price:['',[Validators.required,Validators.min(100)]],
     image:['',[Validators.required]],
     color:['',[Validators.required]],
     status:['',[Validators.required]],
   })
   this.id = this.route.snapshot.params['id']
  }
  ngOnInit(){
    this.nikeService.ListNikeId(this.id!).subscribe({
      next:(data)=>{
        console.log(data);
        // this.nikes = data
        this.nikeForm.patchValue(data)
      }
    })
  }
  handleSubmit(){
   if(this.nikeForm.invalid){
     this.nikeForm.markAllAsTouched();
     return
   }
   this.nikeService.UpdataNike(this.id!,this.nikeForm.value).subscribe({
     next:()=>{
       alert("Sửa thàn công")
       this.router.navigate(['/nike'])
     },
     error:(err)=>{
       console.log(err);
       
     }
   })
  }
}
