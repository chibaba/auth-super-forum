import React from "react";
import { useWindowDimensions } from "../hooks/useWindowDimension";
const SideBar = () => {
const { width } = useWindowDimensions();
if (width <= 768) {
return null;
}
return <div className="sidebar">Sidebar</div>;
};
export default SideBar;