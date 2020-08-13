export enum FiltersEnum {
    ALL = 'ALL',
    COMPLETED = 'COMPLETED',
    ACTIVE = 'ACTIVE'
}

export interface ITodo {
    id: number,
    title: string,
    isCompleted: boolean
}

export class Todo {
    public id: number;
    public title: string;
    public isCompleted = false;

    constructor(id: number, title:string) {
        this.id = id;
        this.title = title;
    }
}

// export interface IStoreState {
//     todos: Todo[];
//     currentFilter: FiltersEnum
// }

export interface IStoreState {
    article: object
  }
  export interface IPayload {
    pageIndex: number
    pageSize: number
    timeFile?: boolean
  }



