import Image from "next/image";
import Details from "./userDashboard/[details]/page";
import Landing from "./userDashboard/page";
import Sidebar from "../Components/ownerSideBar";
import OwnerProfile from "./ownerProfile/page";
import Edit from '../../src/app/ownerProfile/edit/page'
import { EditAttributesOutlined } from "@mui/icons-material";

export default function Home() {
  return (
    <div >
      <Landing />
    </div>
  );
}
