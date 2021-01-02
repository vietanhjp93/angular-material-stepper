import { ViewChild, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatStepper } from "@angular/material";

import { Step1Component } from "./step1/step1.component";
import { Step2Component } from "./step2/step2.component";
import { Step3Component } from "./step3/step3.component";

/**
 * @title Stepper overview
 */
@Component({
  selector: "stepper-overview-example",
  templateUrl: "stepper-overview-example.html",
  styleUrls: ["stepper-overview-example.css"]
})
export class StepperOverviewExample implements OnInit {
  @ViewChild(Step1Component) step1Component: Step1Component;
  @ViewChild(Step2Component) step2Component: Step2Component;
  @ViewChild(Step3Component) step3Component: Step3Component;
  @ViewChild("stepper") stepper: MatStepper;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.step2Component.isClicked.subscribe(res => {
      if (res) {
        console.log("aa");
        this.stepper.linear = false;
        this.stepper.selectedIndex = 3;
        this.stepper.linear = true;
      }
    });
    this.step3Component.isClicked.subscribe(res => {
      if (res) {
        this.stepper.selectedIndex = 1;
      }
    });
  }

  get step1() {
    return this.step1Component ? this.step1Component.form : null;
  }

  get step2() {
    return this.step2Component ? this.step2Component.form : null;
  }
  get step4() {
    return null;
  }

  get step3() {
    return this.step3Component;
    //  ? this.step3Component.form : null;
  }
  public isCurrent(index: Number): Boolean {
    return Number(this.stepper._getFocusIndex) === index;
  }
}

/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
