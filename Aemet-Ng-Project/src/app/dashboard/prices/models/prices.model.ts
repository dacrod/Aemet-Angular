export interface Luz {
    date:           DateEnum;
    hour:           string;
    "is-cheap":     boolean;
    "is-under-avg": boolean;
    market:         Market;
    price:          number;
    units:          Units;
  }
  
  export enum DateEnum {
    The16042024 = "16-04-2024",
  }
  
  export enum Market {
    Pvpc = "PVPC",
  }
  
  export enum Units {
    MWh = "€/MWh",
  }
  