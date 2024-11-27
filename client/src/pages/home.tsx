import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaTasks } from "react-icons/fa";
import hero from "../../assets/hero.png";
import { useAuthStore } from "../store/authStore";
import ContactFooter from "../components/Footer";

interface AuthState {
  isLoggedIn: boolean;
}

export default function Home() {

  const isLoggedIn = useAuthStore((state: AuthState) => state.isLoggedIn);
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };
  const floatVariants = {
    animate: {
      y: [0, -10, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <div>

    <motion.header
      className="flex sm:h-3/4 h-full max-w-6xl mx-auto mt-6 flex-col-reverse sm:flex-row gap-6 px-8 py-12"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="flex-1 flex flex-col gap-4 p-4 mt-20">
        <h1 className="text-black font-bold text-6xl pb-5 flex items-center gap-3">
          <FaTasks className="text-blue-500"/> VRV Security 
        </h1>
        <p className="text-gray-500 text-lg leading-7">
        <h1 className="text-black font-bold text-6xl pb-5 flex items-center gap-3">
            RBAC Portal: 
        </h1>
          This is a Role-Based Access Control (RBAC) system using React for the
          frontend and Express for the backend.
        </p>
        <div className="flex flex-col gap-3">
          {isLoggedIn ? (
            <p className="text-gray-500">
              Hi There! You can visit your &nbsp;
              <Link
                className="text-xl hover:text-gray-700 hover:underline"
                to={"/profile"}
              >
                Profile!
              </Link>
            </p>
          ) : (
            <Link
            to={"/login"}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 ease-in-out rounded-3xl py-2 px-10 text-white ml-3 mr-auto shadow-lg hover:shadow-xl"
            >
              Log in
            </Link>
          )}
        </div>
      </div>
      <div className="flex-1 mt-20">
        <motion.img
          src={hero}
          alt="Hero representing RBAC system"
          className="mx-auto w-96 h-96 bg-white rounded-lg shadow-md"
          variants={floatVariants}
          animate="animate"
          />
      </div>
    </motion.header>
    <ContactFooter/>
    </div>
  );
}
