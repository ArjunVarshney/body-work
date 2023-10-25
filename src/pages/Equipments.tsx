import Spinner from "../ui/Spinner.tsx";
import Error from "./Error.tsx";
import Navbar from "../ui/Navbar.tsx";
import Sidebar from "../ui/Sidebar.tsx";
import { useEquipments } from "../features/Equipments/useEquipments.tsx";
import MainEquipments from "../features/Equipments/MainEquipments.tsx";

function Equipments() {
  const { isLoading, error } = useEquipments();

  if (isLoading) return <Spinner />;
  if (error) return <Error />;

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-5 h-[87vh]">
        <Sidebar />
        <MainEquipments />
      </div>
    </>
  );
}
export default Equipments;
