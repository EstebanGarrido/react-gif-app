import { render,screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en <GifItem/>', () => { 

    const title ='Luffy';
    const url ='https://one-piece.com/luffy.jpg' 

    test('debe de hacer match con el snapshot', () => { 
        

        const { container } =render(<GifItem title={ title } url={ url } />);
        expect(container).toMatchSnapshot();
     });

    test('Debe de mostar la img con el URL y el ATL indicado', () => { 

        render(<GifItem title={ title } url={ url } />);
        // screen.debug();
        // expect(screen.getByRole('img').alt).toBe( title );
        const {src,alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);
      });

    test('Debe de mostrar el titulo en el componente', () => {
        render(<GifItem title={ title } url={ url } />);
        expect(screen.getByText(title)).toBeTruthy();
        
     })

 });