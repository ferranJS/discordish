import { Injectable } from '@angular/core'
import { type User } from 'src/app/shared/interfaces'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: User[] = [
    {
      id: 't13ic8c5g93',
      name: 'GamerKing22',
      status: 'Away',
      aliases: ['King', 'Gamer']
    },
    {
      id: '5p0r5cq5j0w',
      name: 'DarkKnight56',
      status: 'Do not disturb',
      aliases: []
    },
    {
      id: '9caiv8f5r5r',
      name: 'FluffyBunny99butNotSoFluffyAnymore_xX',
      status: 'Invisible',
      aliases: []
    },
    {
      id: '8hnhyt10cfm',
      name: 'PixelMaster77',
      status: 'Online',
      aliases: ['Pixel', 'Master']
    },
    {
      id: 'n5qxgexczqm',
      name: 'ShadowNinja43',
      status: 'Invisible',
      aliases: ['Shadow', 'Ninja']
    },
    {
      id: 'bvdph0w7okh',
      name: 'SuperAmazingRainbowUnicorn88',
      status: 'Do not disturb',
      aliases: ['Super', 'Amazing', 'Rainbow', 'Unicorn']
    },
    {
      id: 'a37h6cv3kr6',
      name: 'FireDragon99',
      status: 'Invisible',
      aliases: ['Fire']
    },
    { id: 'ysmvf35wxay', name: 'IceQueen67', status: 'Online', aliases: [] },
    {
      id: '17g0m1u0dqi',
      name: 'LuckyCharms27',
      status: 'Away',
      aliases: ['Lucky', 'Charms']
    },
    {
      id: 'lf80c3nns6j',
      name: 'NerdyNinja42',
      status: 'Away',
      aliases: ['Nerdy', 'Ninja']
    },
    {
      id: '56o2k2o6ap8',
      name: 'GalacticGamer88',
      status: 'Invisible',
      aliases: []
    },
    {
      id: 'dpl35n7sdvf',
      name: 'MysticalMermaid36',
      status: 'Invisible',
      aliases: []
    },
    {
      id: '38i1zrqogaz',
      name: 'ElectricEagle99',
      status: 'Away',
      aliases: ['Electric', 'Eagle']
    },
    {
      id: '8tvwzupc78i',
      name: 'SilentAssassin44',
      status: 'Invisible',
      aliases: ['Silent', 'Assassin']
    },
    {
      id: '24q4rlmkm0q',
      name: 'SavageSamurai21',
      status: 'Invisible',
      aliases: []
    },
    {
      id: 'uvz6aqz8whe',
      name: 'FrozenAndElectricPhoenixEle64',
      status: 'Online',
      aliases: ['Frozen', 'Electric', 'Phoenix', 'Ele']
    },
    {
      id: '5j5c5t8za13',
      name: 'FunkyMonkey22',
      status: 'Invisible',
      aliases: ['Funky', 'Monkey']
    },
    {
      id: '1i9c4ts61ad',
      name: 'Deinytb6',
      status: 'Do not disturb',
      aliases: ['Deinytb']
    }
  ]

  getUserById (id: string) {
    return this.users.find((user) => user.id === id)
  }
}
