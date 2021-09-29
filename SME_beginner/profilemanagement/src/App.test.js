import { render, screen } from '@testing-library/react';
import App from './App';

const temp={
  name:'Ashu',
  nonveg: true
}
beforeAll(()=>{
  console.log('Before All the Test It Will Execute');
});
afterAll(()=>{
  console.log('After All the Test This Will Execute');
})
test('renders learn react link', () => {
  // render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});

test('Basic Test', ()=>{
  expect(2+2).toBe(4);
});
describe('This is the group For All the test in App.jsx', ()=>{
  // 1st Test is For Is his Name is Ashu ?

  beforeEach(()=>{
    console.log('It will Log Before Every Test cases');
  });

  afterEach(()=>{
    console.log('It will log After Every Test cases');
  });
  test('Name is Ashu', ()=>{
    expect(temp.name).toBe('Ashu');
  });

  // 2nd Test is checking is He Eating Non Veg or not
  test('Checking is He eating Nonveg ?', ()=>{
    expect(temp.nonveg).toBeTruthy();
  })
});
