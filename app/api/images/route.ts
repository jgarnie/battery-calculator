import { NextResponse } from 'next/server';
import { InvokeCommand, LambdaClient } from '@aws-sdk/client-lambda';

export async function GET() {
  try {
    const lambdaClient = new LambdaClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
      },
    });

    const response = await lambdaClient.send(
      new InvokeCommand({
        FunctionName:
          'arn:aws:lambda:eu-central-1:897722707082:function:getFiles',
        InvocationType: 'RequestResponse',
      })
    );

    const payload = JSON.parse(new TextDecoder().decode(response.Payload));

    return NextResponse.json(payload, { status: 200 });
  } catch (error) {
    console.error('API GET Images lambda failed:', error);
    return NextResponse.json(
      { error: `Failed to fetch data ${error}` },
      { status: 500 }
    );
  }
}
