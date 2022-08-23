//import {useSelector} from "react-redux";
import * as reduxHooks from 'react-redux';
import * as actions from '../../store/todoSlice';
import {render, screen, fireEvent} from "@testing-library/react";
import TodoItem from "../TodoItem";

jest.mock('react-redux');
const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch');

describe('TodoItem', ()=> {
    it('should create TodoItem',()=> {
        mockedDispatch.mockResolvedValue(jest.fn());

        const component = render(
            <TodoItem id="1" text="Redux" completed={false} />
        );
        expect(component).toMatchSnapshot();
    });
    it('should dispatch actions ', () => {
        const dispatch = jest.fn();
        mockedDispatch.mockReturnValue(dispatch);

        const mockedToggleComplete = jest.spyOn(actions, 'toggleTodoCompleted');
        const removeTodo = jest.spyOn(actions, "removeTodo");
        render(
          <TodoItem id='123' text="Redux" completed={false} />
        );
        fireEvent.click(screen.getByRole('checkbox'));

        expect(dispatch).toHaveBeenCalledTimes(1);
        //expect(mockedToggleComplete).toHaveBeenCalled();
        expect(mockedToggleComplete).toHaveBeenCalledWith( {id : '123'});

        fireEvent.click(screen.getByRole('button'));
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(removeTodo).toHaveBeenCalledWith({id : '123'});
        //expect(removeTodo).toHaveBeenCalled();
    });
});