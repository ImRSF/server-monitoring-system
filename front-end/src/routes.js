/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import VectorMap from "views/maps/VectorMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import ReactTables from "views/tables/ReactTables.js";
import RegularTables from "views/tables/RegularTables.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import Wizard from "views/forms/Wizard.js";
import ValidationForms from "views/forms/ValidationForms.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import RegularForms from "views/forms/RegularForms.js";
import Calendar from "views/Calendar.js";
import Widgets from "views/Widgets.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import Buttons from "views/components/Buttons.js";
import SweetAlert from "views/components/SweetAlert.js";
import Notifications from "views/components/Notifications.js";
import Grid from "views/components/Grid.js";
import Typography from "views/components/Typography.js";
import Panels from "views/components/Panels.js";
import Icons from "views/components/Icons.js";
import Pricing from "views/pages/Pricing.js";
import Register from "views/pages/Register.js";
import Timeline from "views/pages/Timeline.js";
import User from "views/pages/User.js";
import Login from "views/pages/Login.js";
import Rtl from "views/pages/Rtl.js";
import Lock from "views/pages/Lock.js";

import ThresholdSettingsContext from 'views/context/ThresholdSettingsContext';

import UserProfile from 'views/pages/Accounts/UserProfile';
import Users from 'views/pages/Accounts/Users';
import UserSettings from "views/pages/Settings/UserSettings";
import ThresholdSettings from "views/pages/Settings/ThresholdSettings";
import ServerSettings from 'views/pages/Settings/ServerSettings';
import ServerPanel from 'views/pages/Server/ServerPanel';
import HardwarePanel from "views/pages/Hardware/HardwarePanel";
import HardwareSpecifications from "views/pages/Hardware/HardwareSpecifications";
import SoftwareServices from 'views/pages/Software/SoftwareServices';
import SoftwareProcesses from 'views/pages/Software/SoftwareProcesses';
import SoftwareDetails from 'views/pages/Software/SoftwareDetails';
import SQLLogs from 'views/pages/Software/SQLLogs';
import NetworkPanel from 'views/pages/Network/NetworkPanel';
import NetworkSpecifications from 'views/pages/Network/NetworkSpecifications';
import StatusReports from 'views/pages/Reports/StatusReports';
import IncidentReports from "views/pages/Reports/IncidentReports";

const routes = [
  {
    path: "/servers",
    name: "Servers",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-molecule-40",
    component: ServerPanel,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Accounts",
    rtlName: "صفحات",
    icon: "tim-icons icon-single-02",
    state: "accountsCollapse",
    views: [
      {
        path: "/accounts/profile",
        name: "My Profile",
        rtlName: "عالتسعير",
        mini: "MP",
        rtlMini: "ع",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/accounts/users",
        name: "Users",
        rtlName: "عالتسعير",
        mini: "UA",
        rtlMini: "ع",
        component: Users,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Settings",
    rtlName: "صفحات",
    icon: "tim-icons icon-atom",
    state: "settingsCollapse",
    views: [
      {
        path: "/settings/user",
        name: "Theme Settings",
        rtlName: "عالتسعير",
        mini: "TS",
        rtlMini: "ع",
        component: UserSettings,
        layout: "/admin"
      },
      {
        path: "/settings/threshold",
        name: "Threshold Settings",
        rtlName: "عالتسعير",
        mini: "THS",
        rtlMini: "ع",
        component: ThresholdSettings,
        layout: "/admin"
      },
      {
        path: "/settings/server",
        name: "Server Settings",
        rtlName: "عالتسعير",
        mini: "THS",
        rtlMini: "ع",
        component: ServerSettings,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Hardware",
    rtlName: "صفحات",
    icon: "tim-icons icon-laptop",
    state: "hardwareCollapse",
    views: [
      {
        path: "/hardware/panel",
        name: "Hardware Panel",
        rtlName: "عالتسعير",
        mini: "HP",
        rtlMini: "ع",
        component: HardwarePanel,
        layout: "/admin"
      },
      {
        path: "/hardware/specs",
        name: "Specifications",
        rtlName: "عالتسعير",
        mini: "HS",
        rtlMini: "ع",
        component: HardwareSpecifications,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Software",
    rtlName: "صفحات",
    icon: "tim-icons icon-app",
    state: "softwareCollapse",
    views: [
      {
        path: "/software/processes",
        name: "Processes",
        rtlName: "عالتسعير",
        mini: "SP",
        rtlMini: "ع",
        component: SoftwareProcesses,
        layout: "/admin"
      },
      {
        path: "/software/services",
        name: "Services",
        rtlName: "عالتسعير",
        mini: "SA",
        rtlMini: "ع",
        component: SoftwareServices,
        layout: "/admin"
      },
      {
        path: "/software/details",
        name: "Details",
        rtlName: "عالتسعير",
        mini: "SD",
        rtlMini: "ع",
        component: SoftwareDetails,
        layout: "/admin"
      },
      {
        path: "/software/sqlLogs",
        name: "SQL Logs",
        rtlName: "عالتسعير",
        mini: "SL",
        rtlMini: "ع",
        component: SQLLogs,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Network",
    rtlName: "صفحات",
    icon: "tim-icons icon-wifi",
    state: "networkCollapse",
    views: [
      {
        path: "/network/panel",
        name: "Network Panel",
        rtlName: "عالتسعير",
        mini: "NP",
        rtlMini: "ع",
        component: NetworkPanel,
        layout: "/admin"
      },
      {
        path: "/network/specs",
        name: "Specifications",
        rtlName: "عالتسعير",
        mini: "NS",
        rtlMini: "ع",
        component: NetworkSpecifications,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Reports",
    rtlName: "صفحات",
    icon: "tim-icons icon-notes",
    state: "reportsCollapse",
    views: [
      {
        path: "/reports/incident",
        name: "Incident Reports",
        rtlName: "عالتسعير",
        mini: "NP",
        rtlMini: "ع",
        component: IncidentReports,
        layout: "/admin"
      },
      {
        path: "/reports/status",
        name: "Status Reports",
        rtlName: "عالتسعير",
        mini: "NS",
        rtlMini: "ع",
        component: StatusReports,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Pages",
    rtlName: "صفحات",
    icon: "tim-icons icon-image-02",
    state: "pagesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        rtlName: "عالتسعير",
        mini: "P",
        rtlMini: "ع",
        component: Pricing,
        layout: "/auth"
      },
      {
        path: "/rtl-support",
        name: "RTL Support",
        rtlName: "صودعم رتل",
        mini: "RS",
        rtlMini: "صو",
        component: Rtl,
        layout: "/rtl"
      },
      {
        path: "/timeline",
        name: "Timeline",
        rtlName: "تيالجدول الزمني",
        mini: "T",
        rtlMini: "تي",
        component: Timeline,
        layout: "/admin"
      },
      {
        path: "/login",
        name: "Login",
        rtlName: "هعذاتسجيل الدخول",
        mini: "L",
        rtlMini: "هعذا",
        component: Login,
        layout: "/auth"
      },
      {
        path: "/register",
        name: "Register",
        rtlName: "تسجيل",
        mini: "R",
        rtlMini: "صع",
        component: Register,
        layout: "/auth"
      },
      {
        path: "/lock-screen",
        name: "Lock Screen",
        rtlName: "اقفل الشاشة",
        mini: "LS",
        rtlMini: "هذاع",
        component: Lock,
        layout: "/auth"
      },
      {
        path: "/user-profile",
        name: "User Profile",
        rtlName: "ملف تعريفي للمستخدم",
        mini: "UP",
        rtlMini: "شع",
        component: User,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Components",
    rtlName: "المكونات",
    icon: "tim-icons icon-molecule-40",
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        rtlName: "انهيار متعدد المستويات",
        mini: "MLT",
        rtlMini: "ر",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            rtlName: "وصفت",
            mini: "B",
            rtlMini: "ب",
            component: Buttons,
            layout: "/admin"
          }
        ]
      },
      {
        path: "/buttons",
        name: "Buttons",
        rtlName: "وصفت",
        mini: "B",
        rtlMini: "ب",
        component: Buttons,
        layout: "/admin"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        rtlName: "نظام الشبكة",
        mini: "GS",
        rtlMini: "زو",
        component: Grid,
        layout: "/admin"
      },
      {
        path: "/panels",
        name: "Panels",
        rtlName: "لوحات",
        mini: "P",
        rtlMini: "ع",
        component: Panels,
        layout: "/admin"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        rtlName: "الحلو تنبيه",
        mini: "SA",
        rtlMini: "ومن",
        component: SweetAlert,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        rtlName: "إخطارات",
        mini: "N",
        rtlMini: "ن",
        component: Notifications,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        rtlName: "الرموز",
        mini: "I",
        rtlMini: "و",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        rtlName: "طباعة",
        mini: "T",
        rtlMini: "ر",
        component: Typography,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Forms",
    rtlName: "إستمارات",
    icon: "tim-icons icon-notes",
    state: "formsCollapse",
    views: [
      {
        path: "/regular-forms",
        name: "Regular Forms",
        rtlName: "أشكال عادية",
        mini: "RF",
        rtlMini: "صو",
        component: RegularForms,
        layout: "/admin"
      },
      {
        path: "/extended-forms",
        name: "Extended Forms",
        rtlName: "نماذج موسعة",
        mini: "EF",
        rtlMini: "هوو",
        component: ExtendedForms,
        layout: "/admin"
      },
      {
        path: "/validation-forms",
        name: "Validation Forms",
        rtlName: "نماذج التحقق من الصحة",
        mini: "VF",
        rtlMini: "تو",
        component: ValidationForms,
        layout: "/admin"
      },
      {
        path: "/wizard",
        name: "Wizard",
        rtlName: "ساحر",
        mini: "W",
        rtlMini: "ث",
        component: Wizard,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Tables",
    rtlName: "الجداول",
    icon: "tim-icons icon-puzzle-10",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        rtlName: "طاولات عادية",
        mini: "RT",
        rtlMini: "صر",
        component: RegularTables,
        layout: "/admin"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        rtlName: "جداول ممتدة",
        mini: "ET",
        rtlMini: "هور",
        component: ExtendedTables,
        layout: "/admin"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        rtlName: "رد فعل الطاولة",
        mini: "RT",
        rtlMini: "در",
        component: ReactTables,
        layout: "/admin"
      }
    ]
  },
  {
    collapse: true,
    name: "Maps",
    rtlName: "خرائط",
    icon: "tim-icons icon-pin",
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        rtlName: "خرائط جوجل",
        mini: "GM",
        rtlMini: "زم",
        component: GoogleMaps,
        layout: "/admin"
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        rtlName: "خريطة كاملة الشاشة",
        mini: "FSM",
        rtlMini: "ووم",
        component: FullScreenMap,
        layout: "/admin"
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        rtlName: "خريطة المتجه",
        mini: "VM",
        rtlMini: "تم",
        component: VectorMap,
        layout: "/admin"
      }
    ]
  },
  {
    path: "/widgets",
    name: "Widgets",
    rtlName: "الحاجيات",
    icon: "tim-icons icon-settings",
    component: Widgets,
    layout: "/admin"
  },
  {
    path: "/charts",
    name: "Charts",
    rtlName: "الرسوم البيانية",
    icon: "tim-icons icon-chart-bar-32",
    component: Charts,
    layout: "/admin"
  },
  {
    path: "/calendar",
    name: "Calendar",
    rtlName: "التقويم",
    icon: "tim-icons icon-time-alarm",
    component: Calendar,
    layout: "/admin"
  }
];

export default routes;
