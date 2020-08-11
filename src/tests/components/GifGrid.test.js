import React from 'react';
import {GifGrid }from '../../components/GifGrid';
import { shallow} from 'enzyme';
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs');


describe('Pruebas en gifGrid', () => {

    test('Deberia de mostrase correctamente', () => {

        const categoria='Onde Punch';
        const wrapper= shallow(<GifGrid categoria={categoria} />);

        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imagenes con nuestro UseFetchGifs', () => {
        
        const gifs=[{id:'ABC',url:'https://localhost/hola.png',title:'cualquier cosa'}];

        //crear mock
        useFetchGifs.mockReturnValue({
            data:[],
            loading:true
        });

        const categoria='Onde Punch';
        const wrapper= shallow(<GifGrid categoria={categoria} />);
        

        expect(wrapper).toMatchSnapshot();


    })
    
    
})
