import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  severCreationStatus = 'No server was created';
  serverName = 'TestServer';
  serverCreated = false;
  servers = ['AppServer', 'WebServer'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(): void{
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.severCreationStatus = 'Server was created Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event) {
     //console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;
  }
}
