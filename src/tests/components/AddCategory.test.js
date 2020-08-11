
import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme'
import AddCategory from '../../components/AddCategory';

describe('Pruebas en componente <AddCategory></AddCategory>', () => {
    
    const setCategories=()=>jest.fn();
    let wrapper= shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(()=>{
        jest.clearAllMocks();
        
        wrapper= shallow(<AddCategory setCategories={setCategories} />);

        

    });

// test('deberia mostrase conrrectamente', () => {
    
//     // expect(wrapper).toMatchSnapShot();

// })


test('debe de cambiar la caja de texto', () => {
    const input= wrapper.find('input');

    const value ='Hola mundo';
    input.simulate('change',{target:{value}});
})

// test('No debe pasar la informacion submit', () => {
    
//     wrapper.find('form').simulate('submit',{preventDefault(){}});
//     expect(setCategories).not.toHaveBeenCalled();
// })

// test('Debe de llamar el setCategories y limpiar caja de texto', () => {
  
//     const value='Hola mundo';

//     //1 simular el inputChange
//     wrapper.find('input').simulate('change',{target:{value}});

//     //2 simular el submit
//     wrapper.find('form').simulate('submit',{preventDefault(){}});

//     //3 setCategories se debe haber llamado
//     expect(setCategories).toHaveBeenCalled();
//     expect(setCategories).toHaveBeenCalledTimes(1);
//     expect(setCategories).toHaveBeenCalledWith(expect.any(Function));


//     //4 el valor del input debe de estar ''
//     expect(wrapper.find('input').prop('value')).toBe('');

    

    
// })







})
