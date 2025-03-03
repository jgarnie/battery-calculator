export const getConfiguration = async (): Promise<string[]> => {
  const res = await fetch('/api/configuration');
  if (!res.ok) throw new Error('Failed to fetch configuration');
  const data = await res.json();

  return data;
};
