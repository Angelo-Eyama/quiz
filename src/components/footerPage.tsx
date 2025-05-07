import { FaHome, FaGithub, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterPage = () => {
    return (
        <footer className="bg-gray-800 text-white w-full px-5">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2 hover:text-gray-400">
                    <FaHome size={20} />
                    <span>Inicio</span>
                </Link>
                <a
                    href="https://github.com/Angelo-Eyama/quiz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <FaGithub size={20} />
                    <span>GitHub</span>
                </a>
                <a
                    href="https://angeloeyama.es"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 hover:text-gray-400"
                >
                    <FaUser size={20} />
                    <span>Portfolio</span>
                </a>
            </div>
        </footer>
    );
};

export default FooterPage;