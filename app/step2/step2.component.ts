import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable, Subject } from "rxjs";
import { SubjectSubscription } from "rxjs/internal-compatibility";

@Component({
  selector: "app-step2",
  templateUrl: "./step2.component.html",
  styleUrls: ["./step2.component.css"]
})
export class Step2Component implements OnInit {
  form: FormGroup;

  isClicked = new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  ngOnInit() {}

  public onClickNext() {
    console.log("bbb");
    if (!this.form.controls["name"].hasError("required")) {
      this.isClicked.next(true);
    }
  }
}
