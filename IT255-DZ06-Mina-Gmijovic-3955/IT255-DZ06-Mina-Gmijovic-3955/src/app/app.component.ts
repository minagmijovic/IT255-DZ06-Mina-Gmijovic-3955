import { Component, OnInit } from '@angular/core';
import { Room } from './modules/Room';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MetHotels';

  rooms: Room[];
  userPrice: string = "";

  constructor() {
    this.rooms = [
      new Room("11", "Grand", 3, 1150),
      new Room("14CD", "Hilton", 1, 500),
      new Room("85", "Konaci", 5, 2000),
      new Room("80A", "Nina", 2, 8500),
    ];
  }

  ngOnInit(): void {

  }

  
  shuffle(array: Room[]): boolean {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return false;
  }

  public deleteRoom(room: Room) {
    this.rooms = this.rooms.filter(item => {
      return item.roomNumber !== room.roomNumber
    })
  }

  public updateRoom(room: Room) {
    let index = this.rooms.findIndex(i => i.roomNumber === room.roomNumber);
    this.rooms[index].name = "Izmena je izvrsena";
  }

  trackByFn(customParam: any, index: any, item: any) {
    return item[customParam];
  }

  public addRoom(room: Room) {
    this.rooms.push(room);
  }

  
}

