import { NextResponse } from 'next/server';
//simple aplication configuration options
const CONFIGURATION_OPTIONS = [
  {
    id: 'seasonSelect',
    type: 'radio',
  },
  {
    id: 'typeOfRoad',
    type: 'multiSlider',
  },
  {
    id: 'drivingStyle',
    type: 'multiSlider',
  },
  {
    id: 'missingDataTest',
    type: 'unknown',
  },
  {
    id: 'interiorComfort',
    type: 'radio',
  },
  {
    id: 'temperature',
    type: 'slider',
  },
];

export async function GET() {
  try {
    return NextResponse.json(CONFIGURATION_OPTIONS, { status: 200 });
  } catch (error) {
    console.error('API GET Cars lambda failed:', error);
    return NextResponse.json(
      { error: `Failed to fetch data ${error}` },
      { status: 500 }
    );
  }
}
