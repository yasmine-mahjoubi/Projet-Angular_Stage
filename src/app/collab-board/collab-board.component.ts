import { Component } from '@angular/core';

interface OrderService {
  firstName: string;
  lastName: string;
  month: string;
  year: string;
  type: string;
  origin: string;
  adminStatus: string;
  collaboratorStatus: string;
  creationDate: string;
  modificationDate: string;
}

@Component({
  selector: 'app-collab-board',
  templateUrl: './collab-board.component.html',
  styleUrls: ['./collab-board.component.scss']
})
export class CollabBoardComponent {
  showTable: boolean = false;

  orderServiceList: OrderService[] = [
    {
      firstName: 'nour5',
      lastName: 'hasnaoui',
      month: '01',
      year: '2023',
      type: 'comptabilite',
      origin: 'affecté',
      adminStatus: 'en cours de traitement',
      collaboratorStatus: 'en cours de traitement',
      creationDate: '2024-06-11T12:43:16.760Z',
      modificationDate: '2024-06-18T08:32:43.560Z'
    },
    {
      firstName: 'nour5',
      lastName: 'hasnaoui',
      month: '01',
      year: '2023',
      type: 'comptabilite',
      origin: 'affecté',
      adminStatus: 'en cours de traitement',
      collaboratorStatus: 'en cours de traitement',
      creationDate: '2024-06-11T12:43:16.760Z',
      modificationDate: '2024-06-18T08:32:43.560Z'
    },
    {
      firstName: 'nour5',
      lastName: 'hasnaoui',
      month: '01',
      year: '2023',
      type: 'comptabilite',
      origin: 'affecté',
      adminStatus: 'en cours de traitement',
      collaboratorStatus: 'en cours de traitement',
      creationDate: '2024-06-11T12:43:16.760Z',
      modificationDate: '2024-06-18T08:32:43.560Z'
    }
  ];

  constructor() {}

  toggleTable(): void {
    this.showTable = !this.showTable;
  }
}
