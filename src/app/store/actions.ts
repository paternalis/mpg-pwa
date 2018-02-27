export interface Action {
  type: string;
  payload?: any;
}

export class Actions {
    static ADD_TRANSACTION = 'ADD_TRANSACTION';
}
