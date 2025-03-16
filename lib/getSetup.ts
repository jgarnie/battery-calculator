import { z } from 'zod';

export type TVehicleDataApi = z.TypeOf<typeof VehicleDataSchema>;
export type TVehicleData = z.TypeOf<typeof VehicleDataSchema>;
export type TPartOfYear = z.TypeOf<typeof PartOfYearSchema>;
export type TTypeOfRoad = z.TypeOf<typeof TypeOfRoadSchema>;
export type TDrivingStyle = z.TypeOf<typeof DrivingStyleSchema>;

const PartOfYearSchema = z.object({
  summer: z.number(),
  autumn: z.number(),
  winter: z.number(),
});

const TypeOfRoadSchema = z.object({
  city: z.number(),
  outsideCity: z.number(),
  highway: z.number(),
});

const DrivingStyleSchema = z.object({
  snail: z.number(),
  normal: z.number(),
  aggressive: z.number(),
});

const VehicleDataSchema = z.object({
  name: z.string(),
  partOfYear: PartOfYearSchema,
  typeOfRoad: TypeOfRoadSchema,
  drivingStyle: DrivingStyleSchema,
  fullRange: z.number(),
  heatingConsumption: z.number(),
  coolingConsumption: z.number(),
});

export type TCarImageItem = {
  model: string;
  url: string;
};

export type TAppConfigurationApi = {
  id: TAppConfigurationKeys;
  type: string;
};

export type TAppConfigurationKeys = 'seasonSelect' | 'typeOfRoad' | 'drivingStyle' | 'interiorComfort' | 'temperature';

export type TSetup = {
  images: TCarImageItem[];
  cars: TVehicleDataApi[];
  configuration: TAppConfigurationApi[];
};
export const getSetup = async (): Promise<TSetup> => {
  const API_URL =
    process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://battery-calculator-five.vercel.app';

  const res = await fetch(`${API_URL}/api/setup-api`, {
    cache: 'force-cache',
  });

  if (!res.ok) throw new Error('Failed to fetch configuration');
  console.log({ res });

  const setupData = await res.json();
  const { images, cars, configuration } = setupData;
  console.log({ setupData });

  const carData = cars.map((vehicleData: unknown) => {
    const parseVehicleData = VehicleDataSchema.safeParse(vehicleData);
    if (parseVehicleData.success) {
      return parseVehicleData.data;
    }

    return undefined;
  });

  return { images, cars: carData.filter(Boolean), configuration };
};
