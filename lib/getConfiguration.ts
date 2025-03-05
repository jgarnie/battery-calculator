export type TAppConfigurationApi = {
  id: TAppConfigurationKeys;
  type: string;
};

export type TAppConfigurationKeys =
  | 'seasonSelect'
  | 'typeOfRoad'
  | 'drivingStyle'
  | 'interiorComfort'
  | 'temperature';

export const getConfiguration = async (): Promise<TAppConfigurationApi[]> => {
  const res = await fetch('/api/configuration');
  if (!res.ok) throw new Error('Failed to fetch configuration');
  const data = await res.json();

  return data;
};
