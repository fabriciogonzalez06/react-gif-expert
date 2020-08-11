import React from 'react'
import GifGridItem from '../../components/GifGridItem';
import {shallow} from 'enzyme';

describe('Pruebas en <GifGridItem/>', () => {
    
    const url='abc.com';
    const title='Avatar';

    const wrapper= shallow(<GifGridItem url={url} title={title} />);
    test('Debería mostrar el componente correctamente', () => {
        
        
        expect(wrapper).toMatchSnapshot();

    });

    test('debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);

    });

    test('debe tener la imagen igual al url y alt de los props', () => {
        const img= wrapper.find('img');

        //propio de enzyme prorpos
        // console.log(img.prop());
        expect(img.prop('src')).toBe(url);
        expect(img.prop('alt')).toBe(title);
    });


    test('debe tener animate_bounce', () => {

        const div= wrapper.find('div');
        expect(div.prop('className').includes('animate__bounce')).toBe(true);
    })
    
    
    
    

})
