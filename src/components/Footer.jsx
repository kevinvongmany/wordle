import { FaGithub } from 'react-icons/fa';

export default function Footer() {

    return (
        <footer className="footer-bg fixed w-full z-20 bottom-0 start-0 border-t border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 text-black dark:text-gray-400">
                <div className='flex space-x-4'>
                    <a href="https://github.com/kevinvongmany" target="_blank" rel="noopener noreferrer" className="text-white dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                        <FaGithub className="w-6 h-6" />
                    </a>
                </div>
                <p className='text-white'>© 2024 Wilfred Owen</p>
            </div>
        </footer>
    );
}