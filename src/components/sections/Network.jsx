import Image from "next/image";

const Network = () => {
  return (
    <div
      id="network"
      className="flex items-center bg-white dark:bg-gray-900 pt-20 pb-12"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Huge Global Network of Fast VPN
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-base text-center leading-relaxed max-w-md">
            See LaslesVPN everywhere to make it easier for you when you move
            locations.
          </p>
          <div className="bg-[#F8F8F8] dark:bg-gray-800 w-full p-6 md:p-16 lg:p-24 rounded-2xl">
            <Image
              src="/HugeGlobal.svg"
              alt="Network"
              width={800}
              height={400}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Network;
