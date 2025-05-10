
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Portfolio</h2>
            <p className="mt-2 text-gray-400 max-w-md">
              Creating beautiful digital experiences with modern web technologies.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a>
                </li>
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">Projects</a>
                </li>
                <li>
                  <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">LinkedIn</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">GitHub</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} John Doe. All rights reserved.
            </p>
            <p className="text-gray-500 mt-2 md:mt-0">
              Designed & Built with ❤️
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
