import Container from './Container';
import renderer from 'react-test-renderer';
import { expect, test } from 'vitest';

test('Container renders', () => {
  const component = renderer.create(
    <Container className="kontejner">
      <div> Test </div>
    </Container>
  );

  expect(component.root.props.className).toBe('kontejner');
});
