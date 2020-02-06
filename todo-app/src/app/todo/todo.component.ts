import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Todo {
  constructor(
    public name: string = '',
    public deskripsi: string = ''
  ) {}
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  
  todos: Todo[] = [];
  
  regModel: Todo;
  
  showNew: Boolean = false;

  showTable: Boolean = true;
  
  submitType: string = 'Save';
  
  selectedRow: number;
  
  usaha: string[] = ['Bangunan', 'IT'];

  perpageItem: number = 100

  pageItemList : string[] = [ '10', '25', '100' ];

  currency: string[] = ['USD', 'IDR', 'YEN'];
  constructor() { 
    this.todos.push(new Todo('Johan1111', 'Palmerah'));  
    this.todos.push(new Todo('Johan1111', 'Jakarta'));  
    this.todos.push(new Todo('Johan1111', 'Jakarta'));      

  }

  ngOnInit() {}

  
  onNew() {
    
    this.regModel = new Todo();
    
    this.submitType = 'Save';
    
    this.showNew = true;

    this.showTable = false; 
  }

  
  onSave() {
    if (this.submitType === 'Save') {
      
      this.todos.push(this.regModel); 
    } else {
      
      this.todos[this.selectedRow].name = this.regModel.name;
      this.todos[this.selectedRow].deskripsi = this.regModel.deskripsi; 
    }
    
    this.showNew = false;

    this.showTable = true;

  }

  
  onEdit(index: number) {
    
    this.selectedRow = index;
    
    this.regModel = new Todo();
    
    this.regModel = Object.assign({}, this.todos[this.selectedRow]);
    
    this.submitType = 'Update';
    
    this.showNew = true;

    this.showTable = false;
  }
 
  onDelete(index: number) { 

    this.todos.splice(index, 1);

  }
 
  onCancel() { 

    this.showNew = false;
    
    this.showTable = true;  
      
  } 

   onChangeTotalData(items : number){ 

       this.perpageItem = items; 
    
    }

}
