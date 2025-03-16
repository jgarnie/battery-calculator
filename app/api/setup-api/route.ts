import { NextResponse } from 'next/server';
import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';
import { TCarImageItem } from '../../../lib/getSetup';

const CONFIGURATION_OPTIONS = [
  { id: 'seasonSelect', type: 'radio' },
  { id: 'typeOfRoad', type: 'multiSlider' },
  { id: 'drivingStyle', type: 'multiSlider' },
  { id: 'missingDataTest', type: 'unknown' },
  { id: 'interiorComfort', type: 'radio' },
  { id: 'temperature', type: 'slider' },
];

export const revalidate = 60;

export async function GET() {
  try {
    const lambdaClient = new LambdaClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const [lambdaResponse, carsResponse] = await Promise.all([
      lambdaClient.send(
        new InvokeCommand({
          FunctionName: 'arn:aws:lambda:eu-central-1:897722707082:function:getFiles',
          InvocationType: 'RequestResponse',
        })
      ),
      fetch('https://oh-so-dummy-backend.vercel.app/api/cars', {
        cache: 'force-cache',
      }),
    ]);

    const lambdaPayload = JSON.parse(new TextDecoder().decode(lambdaResponse.Payload));

    const carsData = await carsResponse.json();

    return NextResponse.json(
      {
        images: lambdaPayload.body.model.map((modelElement: TCarImageItem) => {
          return {
            model: modelElement.model.slice(0, modelElement.model.lastIndexOf('.')),
            url: modelElement.url,
          };
        }),
        configuration: CONFIGURATION_OPTIONS,
        cars: carsData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('API GET Combined failed:', error);
    return NextResponse.json({ error: `Failed to fetch data: ${error}` }, { status: 500 });
  }
}
