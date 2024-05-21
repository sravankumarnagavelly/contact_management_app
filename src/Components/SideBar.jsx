import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2">
  <div className="flex pt-16 flex-col h-screen p-4 bg-gray-100 shadow-lg w-64">
    <div className="space-y-4">
      <div className="flex items-center">
        <h2 className="text-2xl mt-4 font-extrabold text-blue-600">Menu</h2>
      </div>
      <div className="flex-1">
        <ul className="pt-3 pb-5 space-y-2 text-base">
          <li className="rounded-lg">
            <Link
              to="/"
              className="flex items-center p-3 space-x-4 rounded-lg bg-blue-200 hover:bg-blue-300"
            >
              <img src={contact} alt="Contacts" className="h-6 w-6" />
              <span className="text-blue-700">Contacts</span>
            </Link>
          </li>
          <li className="rounded-lg">
            <Link
              to="/dashboard"
              className="flex items-center p-3 space-x-4 rounded-lg bg-blue-200 hover:bg-blue-300"
            >
              <img src={bar} alt="Charts And Maps" className="h-6 w-6" />
              <span className="text-blue-700">Charts And Maps</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>

    );
}