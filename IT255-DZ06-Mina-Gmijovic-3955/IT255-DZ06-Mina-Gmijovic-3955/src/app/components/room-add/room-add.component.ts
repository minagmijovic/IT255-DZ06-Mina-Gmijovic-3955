import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from 'src/app/modules/Room';

@Component({
  selector: 'add-room',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  public roomForm!: FormGroup;
  @Output() roomToAdd: EventEmitter<Room>;
  @Input() room!: Room;

  constructor() {
    this.roomToAdd = new EventEmitter();
  }


  ngOnInit() {
    this.initForm();
  }

  public initForm() {
    this.roomForm = new FormGroup({
      roomNumber: new FormControl('', [
        Validators.required
      ]),
      name: new FormControl('', [
        Validators.required
      ]),
      availablePpl: new FormControl('', [
        Validators.required
      ]),
      price: new FormControl('', [
        Validators.required
      ])
    });
  }

  public submitForm() {
    let roomNumber = this.roomForm.get('roomNumber')!.value;
    let name = this.roomForm.get('name')!.value;
    let availablePpl = this.roomForm.get('availablePpl')!.value;
    let price = this.roomForm.get('price')!.value;
    let room = new Room(roomNumber, name, availablePpl, price);
    this.roomToAdd.emit(room);
  }

}
