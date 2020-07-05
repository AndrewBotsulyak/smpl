import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ImageAnimation} from '../../models/html-generate.model';

@Component({
  selector: 'html-generate-form',
  templateUrl: './html-generate-form.component.html',
  styleUrls: ['./html-generate-form.component.scss']
})
export class HtmlGenerateFormComponent implements OnInit {

  @Output() submitForm = new EventEmitter();

  form: FormGroup;

  file: FormControl;
  clickUrl: FormControl;
  animation: FormControl;

  animationEnum = ImageAnimation;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.file = new FormControl('', [
      Validators.required
    ]);
    this.clickUrl = new FormControl('', [
      Validators.required,
      Validators.pattern(/^(https?|ftp|torrent|image|irc):\/\/(-\.)?([^\s\/?\.#]+\.?)+(\/[^\s]*)?$/i)]);
    this.animation = new FormControl(this.animationEnum.LEFT_TO_RIGHT);

    this.form = this.fb.group({
      file: this.file,
      clickUrl: this.clickUrl,
      animation: this.animation
    });
  }

  handleSubmit(): void {
    if (this.form.valid) {
      this.submitForm.emit(Object.assign({}, this.form.value, {file: this.file.value.files[0]}));
    }
  }
}
