import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  subcribeForm:FormGroup;
  constructor(private fb:FormBuilder,private service:ContactService) { }

  ngOnInit() {
    this.subcribeForm = this.fb.group({
      emailID:["",[Validators.required,Validators.email]]
    })
  }
  subcribeEmail(){
    if(this.subcribeForm.valid){
      let formData = new FormData();
    formData.append("emailID",this.subcribeForm.get("emailID").value)
this.service.subscribe(formData).subscribe((posRes)=>{
  console.log("Subcribe",posRes);
  
},(err:HttpErrorResponse)=>{
  if(err.error instanceof Error){
    console.log("Client Side Error",err)
  }else{
    console.log("server side Error", err);
    
  }
})
    }
    else{
      alert("Enter Valid Email..")
    }
  }
}
