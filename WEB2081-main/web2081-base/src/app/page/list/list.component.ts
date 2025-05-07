import { Component } from '@angular/core';
import { NikeService } from '../../service/nike.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-list',
  imports: [CommonModule,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  nikes:any
  constructor(
    private nikeService:NikeService,
  ){}
  ngOnInit(){
    this.nikeService.ListNike().subscribe({
      next:(data)=>{
        console.log(data);
        this.nikes = data
      }
    })
  }
  handleDelete(id:string){
    if(window.confirm("Bạn chắc chắn muốn xóa nó chứ")){
      this.nikeService.DeleteNile(id).subscribe({
        next:()=>{
          alert ("Xóa thành công")
          this.nikes = this.nikes.filter((item:any)=>item.id!=id)
        },
        error:()=>{
          alert("Lỗi")
        }
      })
    }
  }
}
