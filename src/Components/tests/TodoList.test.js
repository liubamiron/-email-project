
//import {useSelector} from "react-redux";
import * as reduxHooks from 'react-redux';
import TodoList from "../TodoList";
import {render} from "@testing-library/react";
jest.mock('react-redux');

const todos = [
    {id: '1', text: 'React', completed: false},
    {id: '124', text: 'Redux', completed: false},
];

const mockedUseSelector = jest.spyOn(reduxHooks, 'useSelector')

describe('TodoList', ()=> {
    it('should create TodoList with empty todos', () => {
        //useSelector.mockReturnValue([]);
        //jest.spyOn(reduxHooks, 'useSelector').mockReturnValue([])
        mockedUseSelector.mockReturnValue([])
        const component = render(<TodoList />);

        expect(component).toMatchSnapshot();
    });
    it('should create TodoList with todo items', () => {
        //useSelector.mockReturnValue(todos);
        //jest.spyOn(reduxHooks, 'useSelector').mockReturnValue(todos);
       mockedUseSelector.mockReturnValue(todos);

        const component = render(<TodoList />);

        expect(component).toMatchSnapshot();
    });
});
