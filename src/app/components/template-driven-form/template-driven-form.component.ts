import { Component, OnInit } from '@angular/core';
import { EnrollmentService } from '../../service/enrollment/enrollment.service';
import { User } from '../../models/user.model';

@Component({
  selector   : 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls  : ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent {

  title         = 'app';
  topics        = ['Angular', 'React', 'Vue'];
  userModel     = new User('Rob', 'rob@test.com', 5556665566, 'default', 'morning', true);
  topicHasError = true;
  submitted     = false;
  errorMsg      = '';

  constructor(private _enrollmentService: EnrollmentService) {}

  validateTopic(value) {
    if (value === 'default') {
      this.topicHasError = true;
    } else {
      this.topicHasError = false;
    }
  }

  onSubmit() {
    this.submitted = true;
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }

}
