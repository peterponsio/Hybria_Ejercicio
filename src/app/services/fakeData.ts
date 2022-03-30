import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeDataService implements InMemoryDbService {


  listItems: any[] = [];

  constructor() { }

  createDb() {
    return {
      cars: [
        {
          id: 1,
          model: ' McLaren MP4-12C ',
          fav:false,
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40',
          img : "../../../assets/3Mtm48iVUy2crD1pKtAP 1.png"
        },
        {
          id: 2,
          model: ' Nissan',
          fav:false,
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40',
          img : "https://www.autofacil.es/wp-content/uploads/2022/02/nissan-micra-kiiro-2022.jpg"
        },
        {
          id: 3,
          model: 'alpha romeo',
          fav:false,
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40',
          img : "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Festival_automobile_international_2014_-_Alfa_Romeo_4C_-_033.jpg/1200px-Festival_automobile_international_2014_-_Alfa_Romeo_4C_-_033.jpg"
        },
        {
          id: 4,
          model: 'Ford Focus',
          fav:false,
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40',
          img : "https://periodismodelmotor.com/wp-content/uploads/2021/08/ford-focus-st-edition-1.jpg"
        },
      ],
      garage:[
        {
          id: 1,
          model: ' Ford',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40',
          img : "../../../assets/3Mtm48iVUy2crD1pKtAP 1.png",
          km: 100.000
        },
        {
          id: 2,
          model: ' Supra',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$40',
          img : "https://www.autofacil.es/wp-content/uploads/2022/02/nissan-micra-kiiro-2022.jpg",
          km: 100.000
        },
        {
          id: 3,
          model: ' Ford',
          description: 'Lorem ipsum . Voluptatem excepturi magnam nostrum dolore recusandae',
          price: '$4000',
          img : "https://periodismodelmotor.com/wp-content/uploads/2021/08/ford-focus-st-edition-1.jpg",
          km: 100.000
        },
      ],
      users: [
        {
          id: 10002,
          name: "Paco",
          email:"paco@gmail.com",
          password: "Paco12345@@"
        }
      ],
      favs:[
        
      ],
      calendarEvents: [
        {
          day : "2022-03-29",
          event:[
            {
              "title": "Kia rio",
              "img" : "https://ca.slack-edge.com/T017GJJEYBF-U01R4NX86P7-a0047a83dd99-72",
              "author": "Pere"
            },
          ]
        },
        {
          day : "2022-03-30",
          event:[
            {
              "title": "alpha romeo",
              "img" : "https://ca.slack-edge.com/T017GJJEYBF-U01JDJFLSLS-cd5f948bf829-72",
              "author": "Ruben"
            }
          ]
        }
      ],
      accesories: [
        {
          title : "Cambio de Aceite",
          img: "../../../../assets/lol 1.png",
          desc: "Rebaja del 50% en tu proximo cambio de Aceite en uno de nuestros mecanicos."
        },
        {
          title : "Cambio de Aceite",
          img: "../../../../assets/lol 1.png",
          desc: "Rebaja del 50% en tu proximo cambio de Aceite en uno de nuestros mecanicos."
        },
        {
          title : "Cambio de Aceite",
          img: "../../../../assets/lol 1.png",
          desc: "Rebaja del 50% en tu proximo cambio de Aceite en uno de nuestros mecanicos."
        }

      ]
    };
  }

}
