import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from 'src/app/contact.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  contactUsForm:FormGroup
  fileName:string;
  isFileAdded:boolean= false;
  serverResponce:string;
  isResponceSuccess:boolean = false;
  constructor(private fb:FormBuilder,private service:ContactService) { }

  ngOnInit() {
    this.fileName = "No File Choosen"
    this.contactUsForm = this.fb.group({
      name:["",Validators.required],
      emailID:["",[Validators.required,Validators.email]],
      phoneNumber:["",Validators.required],
      message:["",Validators.required],
      filename:[""]
    })
  }
  fileProgress(event){
    if (event.target.files.length > 0) {
      this.isFileAdded = true;
      const file = event.target.files[0];
      this.contactUsForm.get('filename').setValue(file);
      this.fileName = event.target.files[0].name
    }
    
  }
  sendDetails(){
    console.log("Details",this.contactUsForm.value);
  if(this.isFileAdded){
    let formData = new FormData()
    formData.append("name",this.contactUsForm.get('name').value);
    formData.append("emailID",this.contactUsForm.get('emailID').value);
    formData.append("phoneNumber",this.contactUsForm.get('phoneNumber').value);
    formData.append("message",this.contactUsForm.get('message').value);
    formData.append("filename",this.contactUsForm.get('filename').value);
  this.service.contactUs(formData).subscribe((posRes)=>{
    console.log("Res",posRes);
    if(posRes.status === 3){
      this.serverResponce = posRes.message
      this.isResponceSuccess = true;
      this.contactUsForm.reset(this.contactUsForm.value)
      setTimeout(hide=>{
        this.isResponceSuccess = false;
      },4000)
    }
  },(err:HttpErrorResponse)=>{
    if(err.error instanceof Error){
      console.log("Client Side Error",err)
    }else{
      console.log("server side Error", err);
      
    }
  })
  }else{
    let formData1 = new FormData()
    formData1.append("name",this.contactUsForm.get('name').value);
    formData1.append("emailID",this.contactUsForm.get('emailID').value);
    formData1.append("phoneNumber",this.contactUsForm.get('phoneNumber').value);
    formData1.append("message",this.contactUsForm.get('message').value);
    this.service.contactUs(formData1).subscribe((posRes)=>{
      console.log("Res",posRes);
      if(posRes.status === 3){
        this.serverResponce = posRes.message
        this.isResponceSuccess = true;
        setTimeout(hide=>{
          this.isResponceSuccess = false;
        },4000)
      }
    },(err:HttpErrorResponse)=>{
      if(err.error instanceof Error){
        console.log("Client Side Error",err)
      }else{
        console.log("server side Error", err);
        
      }
    })
  } 
  }
  hideAlert(){
    
    this.isResponceSuccess = false;

  }
}
