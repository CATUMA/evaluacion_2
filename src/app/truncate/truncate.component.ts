import { Component } from '@angular/core';
import { MaterialModule } from '../angular-material/material/material.module';
import { TruncatePipe } from "../truncate.pipe";

@Component({
  selector: 'app-truncate',
  imports: [MaterialModule, TruncatePipe],
  templateUrl: './truncate.component.html',
  styleUrl: './truncate.component.css'
})
export class TruncateComponent {

}
