import Image from "next/image";
import Link from "next/link";

export default function notFound() {
  return (
    <div className="min-h-screen flex items-center justify-center w-10/12 m-auto">
      <div className="hidden md:flex md:w-1/2 p-8">
        <Image
          src="https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?t=st=1740726947~exp=1740730547~hmac=fcfc3d13ed27fe428fbcaedcd13d4b863be456f16b1685eb24fea840cd12f1db&w=740"
          alt="name"
          width={500}
          height={500}
        />
      </div>

      <div className="w-full md:w-1/2 p-4 md:p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          404 Not Found
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Oops! The page you are looking for could not be found.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg inline-block hover:bg-blue-600 transition duration-300 ease-in-out"
        >
          Go to Home
        </a>
      </div>
    </div>
  );
}
