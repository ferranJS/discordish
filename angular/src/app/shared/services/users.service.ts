import { Injectable } from "@angular/core"
import { Alias, type User } from "src/app/shared/interfaces"

@Injectable({
  providedIn: "root"
})
export class UsersService {
  users: User[] = [
    {
      id: "t13ic8c5g93",
      name: "GamerKing22",
      status: "Away"
    },
    {
      id: "5p0r5cq5j0w",
      name: "DarkKnight56",
      status: "Do not disturb"
    },
    {
      id: "9caiv8f5r5r",
      name: "FluffyBunny99butNotSoFluffyAnymore_xX",
      status: "Invisible"
    },
    {
      id: "8hnhyt10cfm",
      name: "PixelMaster77",
      status: "Online"
    },
    {
      id: "n5qxgexczqm",
      name: "ShadowNinja43",
      status: "Invisible"
    },
    {
      id: "bvdph0w7okh",
      name: "SuperAmazingRainbowUnicorn88",
      status: "Do not disturb"
    },
    {
      id: "a37h6cv3kr6",
      name: "FireDragon99",
      status: "Invisible"
    },
    { id: "ysmvf35wxay", name: "IceQueen67", status: "Online" },
    {
      id: "17g0m1u0dqi",
      name: "LuckyCharms27",
      status: "Away"
    },
    {
      id: "lf80c3nns6j",
      name: "NerdyNinja42",
      status: "Away"
    },
    {
      id: "56o2k2o6ap8",
      name: "GalacticGamer88",
      status: "Invisible"
    },
    {
      id: "dpl35n7sdvf",
      name: "MysticalMermaid36",
      status: "Invisible"
    },
    {
      id: "38i1zrqogaz",
      name: "ElectricEagle99",
      status: "Away"
    },
    {
      id: "8tvwzupc78i",
      name: "SilentAssassin44",
      status: "Invisible"
    },
    {
      id: "24q4rlmkm0q",
      name: "SavageSamurai21",
      status: "Invisible"
    },
    {
      id: "uvz6aqz8whe",
      name: "FrozenAndElectricPhoenixEle64",
      status: "Online"
    },
    {
      id: "5j5c5t8za13",
      name: "FunkyMonkey22",
      status: "Invisible"
    },
    {
      id: "1i9c4ts61ad",
      name: "Deinytb6",
      status: "Do not disturb"
    }
  ]

  aliases: Alias[] = [
    {
      userId: "t13ic8c5g93",
      serverId: "5p0r5cq5j0w",
      name: "King"
    },
    {
      userId: "t13ic8c5g93",
      serverId: "5p0r5cq5j0w",
      name: "Gamer"
    },
    {
      userId: "8hnhyt10cfm",
      serverId: "5p0r5cq5j0w",
      name: "Pixel"
    },
    {
      userId: "8hnhyt10cfm",
      serverId: "5p0r5cq5j0w",
      name: "Master"
    },
    {
      userId: "n5qxgexczqm",
      serverId: "5p0r5cq5j0w",
      name: "Shadow"
    },
    {
      userId: "n5qxgexczqm",
      serverId: "5p0r5cq5j0w",
      name: "Ninja"
    }
  ]

  getUserById(id: string) {
    return this.users.find((user) => user.id === id)
  }
}
