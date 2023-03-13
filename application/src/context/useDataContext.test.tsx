// import { renderHook } from "@testing-library/react-hooks";
import { act, renderHook, waitFor } from '@testing-library/react';
import { FC } from 'react';
import { DataProvider, useDataContext } from './useDataContext';

describe('DataContext', () => {
  describe('DataProvider', () => {
    it.only('should provide the initial data to consumers', () => {
      const initialData = { foo: 'bar' };
      const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
        <DataProvider initialData={initialData}>{children}</DataProvider>
      );
      const { result } = renderHook(() => useDataContext(), { wrapper });
      expect(result.current.data).toEqual(initialData);
    });

    it.only('should update the data when setValue is called', async () => {
      const wrapper: FC<{ children: React.ReactNode }> = ({ children }) => (
        <DataProvider initialData={{ foo: 'bar' }}>{children}</DataProvider>
      );
      const { result } = renderHook(() => useDataContext(), { wrapper });
      const key = 'foo';
      const value = 'baz';
      act(() => {
        result.current.setValue(key, value);
      });
      await waitFor(() => expect(result.current.getValues(key)).toEqual(value));
    });
  });
});
