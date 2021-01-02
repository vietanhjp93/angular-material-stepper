import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from "rxjs";

@Component({
  selector: "app-step3",
  templateUrl: "./step3.component.html",
  styleUrls: ["./step3.component.css"]
})
export class Step3Component implements OnInit {
  form: FormGroup;
  isClicked = new Subject();

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      name: ["", Validators.required]
    });
  }

  ngOnInit() {}

  public onClickPrevious() {
    console.log("bbb");
    this.isClicked.next(true);
  }
}
