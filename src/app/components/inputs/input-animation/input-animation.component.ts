import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'input-label-animation',
  template: `
    <div class="container-input">
      <label class="form-label text-black-50 bg-white ms-2 px-2" [@labelAnimation]="labelState">{{ labelText }}</label>
      <input type="{{ type }}" class="form-control" (focus)="onFocus()" (blur)="onBlur($event)" (input)="onInput($event)">
    </div>
  `,
  standalone: true,
  animations: [
    trigger('labelAnimation', [
      state('up', style({
        transform: 'translateY(18px)',
        fontSize: '12px'
      })),
      state('down', style({
        transform: 'translateY(37px)',
        fontSize: '14px'
      })),
      transition('down => up', [
        animate('0.3s ease-out')
      ]),
      transition('up => down', [
        animate('0.3s ease-in')
      ])
    ])
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputLabelAnimationComponent),
      multi: true
    }
  ]
})

export class InputLabelAnimationComponent {
  @Input() labelText: string = 'Label';
  @Input() type: string = 'text';
  @Input() formControlName: string = '';
  @Output() valueChange = new EventEmitter<string>();
  labelState: string = 'down';
  onChange: any = () => {};
  onTouch: any = () => {};

  writeValue(value: any): void {}

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {}

  onFocus() {
    this.labelState = 'up';
  }

  onBlur(event: any) {
    const value = event.target?.value;
    if (!value) {
      this.labelState = 'down';
    }
  }

  onInput(event: any) {
    const value = event.target.value;
    this.valueChange.emit(value); 
  }
}