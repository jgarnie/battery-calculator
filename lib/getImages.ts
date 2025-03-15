export type TCarImageItem = {
  model: string;
  url: string;
};

export const getImagesList = async (): Promise<TCarImageItem[] | []> => {
  const res = await fetch('/api/images');
  if (!res.ok) throw new Error('Failed to fetch data');
  const { payload } = await res.json();

  if (payload.statusCode !== 200) {
    console.error('Error car fetching Images');
    return [];
  }

  return payload.body.model.map((modelElement: TCarImageItem) => {
    return {
      model: modelElement.model.slice(0, modelElement.model.lastIndexOf('.')),
      url: modelElement.url,
    };
  });
};
