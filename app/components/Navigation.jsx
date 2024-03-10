import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="wrapper">
      {/* Sidebar */}
      <div className="sidebar bg-purple-800 text-white w-1/8 p-6 fixed h-full transition-all duration-300 hover:w-1/5">
        <h2 className="text-2xl font-bold mb-6">Sidebar</h2>
        <ul>
          <li className="mb-2 transition-all duration-300 hover:pl-2">
            <Link href="#">
              <div className="flex items-center">
                <i className="fas fa-home mr-2"></i>Home
              </div>
            </Link>
          </li>
          {/* Repeat the pattern for other navigation items */}
        </ul>
        <div className="social_media mt-auto">
          <a href="#" className="bg-purple-700">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="bg-purple-700">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="bg-purple-700">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
