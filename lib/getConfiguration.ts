export type TAppConfigurationApi = {
  id: string;
  type: string;
};

export const getConfiguration = async (): Promise<TAppConfigurationApi[]> => {
  const res = await fetch('/api/configuration');
  if (!res.ok) throw new Error('Failed to fetch configuration');
  const data = await res.json();

  return data;
};
