import { renderHook } from '@testing-library/react-hooks';
import useModal from '@hooks/useModal';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useContext: jest.fn(),
}));

describe('useModal', () => {
  it('open', () => {
    const { result } = renderHook(() => useModal());
    result.current.open();
    expect(result.current.show).toBe(true);
  });
  it('close', () => {
    const { result } = renderHook(() => useModal());
    result.current.close();
    expect(result.current.show).toBe(false);
  });
  it('use InitialValue', () => {
    const { result } = renderHook(() => useModal(true));
    expect(result.current.show).toBe(true);
  });
});
