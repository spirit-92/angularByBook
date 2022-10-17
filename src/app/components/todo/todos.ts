
export class Model {
  user;
  items;
  constructor() {
    this.user = "Adam"
    this.items = [
      new TodoItem('Buy flower',false),
      new TodoItem('Get shoes',false),
      new TodoItem('Collect Tickets',false),
      new TodoItem('Call Joe',false),
    ]
  }
}
export class TodoItem {
  action;
  done;
  constructor(action:string,done:boolean) {
    this.action = action
    this.done = done
  }
}
