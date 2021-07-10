import { Component, ViewChild } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 @ViewChild('formLocalRef') signUpForm: NgForm;
 defaultvalue = 'teacher';
 submited = false;
 answer = '';
 genders = ['male','female'];

 user = {
  username:'',
  email:'',
  secretQuestions:'',
  answer:'',
  gender:''
 }

  suggestUserName() {
    const suggestedName = 'Superuser';
    //override whole value
  //   this.signUpForm.setValue({
  //   userData: {
  //     username: suggestedName,
  //     email: ''
  //   },
  //   secret: 'pet',
  //   questionAnswer: '',
  //   gender: 'male'
  //  });
  //set only part value
   this.signUpForm.form.patchValue({
     userData: {
       username: suggestedName
     }
   });
  }

  // localRefarence approch
  // onSubmit(from: NgForm) {
  //   console.log('Submitted');
  //   console.log(from);
  // }
  // signUp approch
  onSubmit() {
   console.log(this.signUpForm);
   this.submited = true;
   this.user.username = this.signUpForm.value.userData.username;
   this.user.email = this.signUpForm.value.userData.email;
   this.user.secretQuestions = this.signUpForm.value.secret;
   this.user.answer = this.signUpForm.value.questionAnswer;
   this.user.gender = this.signUpForm.value.gender;

   //after submit it will emptyed the data and reload the form
   this.signUpForm.reset();
  }
}
