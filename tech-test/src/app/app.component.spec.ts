import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

 
  it('Should allow adding todo list items when using the input', ()=>{
    /* TODO: 

      create stub for todoService service with an add method
      get component instance, pass stub
      add text to new todo input field
      tick over
      check if the allTodos array has a todo with matching string
      check if the dom has an a todo with a matching string
    */
  })

  it('Should allow filtering the todo list when using the input', ()=>{
    /* TODO: 

      get component instance
      add text to filter input field
      tick over
      check if the list of filteredTodos has a todo with matching string
    */
  })

  it('Should remove todos from the list of todos', ()=>{
    /* TODO: 
      create stub for todoService service with list of todos, and a remove method
      get component instance, pass stub
      call the deleteTodo method with one of the todos
      expect the allTodos array to not have a matching id
      expect the dom to not show the todo
    */
  })
  it('Should update todos when modified', ()=>{
    /* TODO: 
      create stub for todoService service with list of todos, and an update method
      get component instance, pass stub
      call the updateTodo method with one of the todos, and modified "done" and "description"
      expect the allTodos to include a todo with the same "done" and "description" states
      expect the dom to display a todo with a checked checkbox and the matching description
    */
  })
});
