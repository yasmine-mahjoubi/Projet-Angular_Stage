import { Component } from '@angular/core';

interface Tarif {
  type: string;
  startDate: string;
  endDate: string;
  user: string;
  userNature: string;
  activityNature: string;
  activity: string;
  subActivity: string;
  taxRegime: string;
  price: string;
}

interface DS {
  label: string;
  duration: string;
  isSubmitted: boolean;
}

interface News {
  title: string;
  comment: string;
  rank: number;
  documentUrl: string;
}

interface Relation {
  firstName: string;
  lastName: string;
  mobile: string;
}

@Component({
  selector: 'app-parametrage-admin',
  templateUrl: './parametrage-admin.component.html',
  styleUrls: ['./parametrage-admin.component.scss']
})
export class ParametrageAdminComponent {

  otherDS = [
    { label: '', duration: '', submitted: false },
    { label: '', duration: '', submitted: false },
    { label: '', duration: '', submitted: false }
  ];

  newsList = [
    {
      title: 'Loi de finances 2023',
      comment: 'Augmentation du plafond des crédits accordés par la BTS aux diplômés de l\'enseignement supérieur de 150.000 DT à 200.000 DT',
      rank: 1,
      document: 'Aperçu document joint'
    },
    {
      title: 'Loi de finances 2023',
      comment: 'Augmentation du plafond des crédits accordés par la BTS aux diplômés de l\'enseignement supérieur de 150.000 DT à 200.000 DT',
      rank: 1,
      document: 'Aperçu document joint'
    }
  ];

  // Define tarifsList with sample data
  tarifsList = [
    {
      type: 'Tarif de base',
      startDate: '2023-01-02',
      endDate: '2023-07-31',
      user: 'Personne Physique',
      userNature: 'société',
      activityNature: 'Avocat',
      activity: 'Activité',
      subActivity: 'Sous-activité',
      taxRegime: 'Non soumis',
      price: 1200
    },
    {
      type: 'Tarif de base',
      startDate: '2023-01-02',
      endDate: '2023-07-31',
      user: 'Personne Physique',
      userNature: 'société',
      activityNature: 'Avocat',
      activity: 'Activité',
      subActivity: 'Sous-activité',
      taxRegime: 'Non soumis',
      price: 1200
    },
  ]

  relationsList: Relation[] = [
    { firstName: 'Salma', lastName: 'Mhadhbi', mobile: '88888888' },
    { firstName: 'Salma', lastName: 'Mhadhbi', mobile: '88888888' },
    { firstName: 'Salma', lastName: 'Mhadhbi', mobile: '88888888' },
    // Add more relations as needed
  ];

  exchangeRates = [
    // Add your exchange rate data here
  ];
  currencies = [
    'USD', 'Euro', 'GBP', 'DZD', 'SAR', 'CAD', 'DKK', 'JPY', 'MAD', 'NOK', 'SEK', 'CHF', 'KWD', 'AED', 'LYD', 'MRU', 'BHD', 'QAR', 'CNY'
  ];
  summaries = [
    // Add your summary data here
  ];

  // Add methods for adding, validating, and deleting entries as needed

}
