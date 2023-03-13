import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface DataProviderProps<TData> {
  children: React.ReactNode;
  initialData: TData;
}

const DataContext = createContext<any>(undefined);

export const DataProvider = <TData,>({
  children,
  initialData,
}: DataProviderProps<TData>) => {
  const [data, setData] = useState<TData>(initialData);
  const getValues = useMemo(() => {
    return (key: string): Partial<TData> | undefined => {
      const value = (data as Record<string, unknown>)[key];
      return value !== undefined ? (value as Partial<TData>) : undefined;
    };
  }, [data]);

  const setValue = useCallback((key: string, value: Partial<TData>) => {
    setData((prevData) => ({ ...prevData, [key]: value }));
  }, []);

  return (
    <DataContext.Provider value={{ getValues, setValue, data }}>
      {children}
    </DataContext.Provider>
  );
};

export function useDataContext() {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
}
