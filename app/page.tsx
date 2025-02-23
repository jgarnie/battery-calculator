import Configuration from '../components/configuration/Configuration';
import { VehicleOverview } from '../components/overview/VehicleOverview';

export default function Home() {
  return (
    <div className="w-[90%] bg-slate-500 m-auto sm:w-[80%]">
      <VehicleOverview />
      <div>
        <Configuration />
      </div>
    </div>
  );
}
