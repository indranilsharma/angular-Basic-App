import { Component } from '@angular/core';

@Component({ 
selector: 'app-server',
templateUrl: './server.component.html',
//inline css
styles: [`
color: white`]
})

export class ServerComponent {
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'onLine' : 'offLine';
    }

    getserverStatus(): string{
        return this.serverStatus;
    }

    getColor(): 'green' | 'red' {
        return this.serverStatus === 'onLine' ? 'green' : 'red';
    }

}
