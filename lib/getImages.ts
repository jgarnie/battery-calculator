export type TCarImageItem = {
  model: string;
  url: string;
};

export const getImagesList = async (): Promise<TCarImageItem[] | []> => {
  return [
    {
      model: 'AdobeStock_545138265_Preview',
      url: 'https://input-3d-assets.s3.amazonaws.com/AdobeStock_545138265_Preview.jpeg',
    },
    {
      model: 'AdobeStock_916739164_Preview',
      url: 'https://input-3d-assets.s3.amazonaws.com/AdobeStock_916739164_Preview.jpeg',
    },
    {
      model: 'AdobeStock_963986254_Preview',
      url: 'https://input-3d-assets.s3.amazonaws.com/AdobeStock_963986254_Preview.jpeg',
    },
    {
      model: 'BMW i3',
      url: 'https://input-3d-assets.s3.amazonaws.com/BMW i3.png',
    },
    {
      model: 'Nissan Leaf',
      url: 'https://input-3d-assets.s3.amazonaws.com/Nissan Leaf.png',
    },
    {
      model: 'Renault Zoe',
      url: 'https://input-3d-assets.s3.amazonaws.com/Renault Zoe.png',
    },
    {
      model: 'Tesla Model 3',
      url: 'https://input-3d-assets.s3.amazonaws.com/Tesla Model 3.png',
    },
    {
      model: 'Volkswagen ID.3',
      url: 'https://input-3d-assets.s3.amazonaws.com/Volkswagen ID.3.png',
    },
  ];
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
