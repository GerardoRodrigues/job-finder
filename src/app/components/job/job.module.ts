import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { JobComponent } from "./job.component";

@NgModule({
    declarations: [JobComponent],
    imports: [CommonModule, IonicModule],
    exports: [JobComponent]
})

export class JobModule{}