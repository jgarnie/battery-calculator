import { getSetup } from '../lib/getSetup';
import HomeComponent from '../components/home';

export default async function HomePage() {
  const setupData = await getSetup();

  return <HomeComponent setupData={setupData} />;
}
