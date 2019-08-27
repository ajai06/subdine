import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TestingService } from './testing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'subdine';

  constructor(private formBuilder: FormBuilder,
              private testingService: TestingService) {}


 testForm = this.formBuilder.group({
   name: ['Test Item2'],
   taxes_id: [17],
   units_id: [1],
   base: [750],
   is_perishable: [],
   is_negative: [],
   item_details: this.formBuilder.group({
     price: [10],
     hsn_code: [],
     min: [2],
     max: [10],
     Branches_id: [16]
   }),
   category_ids: [[116]]
 });

onSubmit() {
  console.log(this.testForm.value);
  this.testingService.test(this.testForm.value).subscribe(
    res => {
      console.log(res);
    },
    err => {}
  );
}
}
