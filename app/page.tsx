import NavbarPage from "@/components/nabar/navbar";
import PositionsPage from "@/components/position/positions";


export default function Home() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-8 space-y-8">
      <NavbarPage />
      <PositionsPage />
    </div>

  );
}