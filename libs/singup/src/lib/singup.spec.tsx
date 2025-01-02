import { render } from '@testing-library/react';

import Singup from './singup';

describe('Singup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Singup />);
    expect(baseElement).toBeTruthy();
  });
});
