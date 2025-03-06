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

export const getCarList = async (): Promise<TVehicleDataApi[]> => {
  const res = await fetch('/api/cars');
  if (!res.ok) throw new Error('Failed to fetch data');
  const data = await res.json();

  const sanitizedData = data.map((vehicleData: unknown) => {
    const parseVehicleData = VehicleDataSchema.safeParse(vehicleData);
    if (parseVehicleData.success) {
      return parseVehicleData.data;
    }

    return undefined;
  });

  return sanitizedData.filter(Boolean);
};
