import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('not vaild');
  }
  users: any = [
    {
      user_name: 'Surya',
      user_id: 100,
      age: 22,
    },
    {
      user_name: 'Kishore',
      user_id: 102,
      age: 20,
    },
    {
      user_name: 'Someone',
      user_id: 103,
      age: 17,
    },
  ];
  color: string = '';
  ageHidden: boolean = false;
  searchInput: string = '';
  
  getColor(inputColor: string) {
    this.color = inputColor;
  }

  showAge() {
    if (!this.ageHidden) {
      this.ageHidden = true;
    } else {
      this.ageHidden = false;
    }
  }

  getSearch(event: any) {
    this.searchInput = event.target.value;
  }
  filterResults(inputText: string) {
    this.users = this.users.filter((user: any) => {
      if (inputText === user.user_name) return user;
    });
  }
}