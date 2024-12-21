import { Component } from '@angular/core';
import { FormControl } from '@angular/forms'; // Import FormControl from Angular forms module
@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent {
  selectedDate = new FormControl(); // Initialize a FormControl for selected date

}
