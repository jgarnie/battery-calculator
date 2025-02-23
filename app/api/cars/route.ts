import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://oh-so-dummy-backend.vercel.app/api/cars');

    const data = await res.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error('API GET Cars lambda failed:', error);
    return NextResponse.json(
      { error: `Failed to fetch data ${error}` },
      { status: 500 }
    );
  }
}
