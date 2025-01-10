import styles from "./sidebar.module.css"
import {LayoutDashboard, Building2 } from "lucide-react";

const menuItems = [
     {
      label: "Dashboard",
      path: "/", 
      icon: <LayoutDashboard />
    },
    { title:"Setting",
        list:[
    {
      label: "Company Master",
      path: "companyMaster",
      icon:<Building2 />
    },
    {
      label: "Branch Master",
      path: "branchMaster"
    },

    {
      label: "Department Master",
      path: "deptMaster"
    },
    {

      label: "Designation Master",
      path: "designMaster"
    },
    {
    
      label: "Role master",
      path: "userRole"
    },
    {
      label: "Menu Master",
      path: "menuMaster"
    },

    {
      label: "Role permission",
      path: "roleperMaster"
    },
    {
  
      label: "Password Master",
      path: "createPassword"
    },
]},
    { title:"User",
        list:[
    {
      label: "User master",
      path: "userMaster"
    },
    {
      label: "User Permission",
      path: "userperMaster"
    },
]}
  ]

const Sidebar=()=>{
    return(

        <div className={styles.container}>
            <ul>
            {menuItems.map(cat=>{
            <li key={cat.title}>cat.title</li>
        })}
        </ul></div>
    )

}

export default Sidebar