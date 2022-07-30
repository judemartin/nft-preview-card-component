import Image from "next/image";
import React from "react";
function NftCard() {
  function ClockIcon() {
    return (
      <svg width="17" height="17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.305 2.007a6.667 6.667 0 1 0 0 13.334 6.667 6.667 0 0 0 0-13.334Zm2.667 7.334H8.305a.667.667 0 0 1-.667-.667V6.007a.667.667 0 0 1 1.334 0v2h2a.667.667 0 0 1 0 1.334Z"
          fill="#8BACD9"
        />
      </svg>
    );
  }

  function EthIcon() {
    return (
      <svg width="11" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
          fill="#00FFF8"
        />
      </svg>
    );
  }
  return (
    <div className="bg-very-dark-blue-card mt-[62px] 2xl:mt-[152px] rounded-3xl h-[543px] w-[327px]">
      <div className="mt-6 mx-6 group">
        <Image
          className="rounded-xl cursor-pointer"
          alt="NFT logo"
          src={"/images/image-equilibrium.jpg"}
          height={278}
          width={278}
          loading="eager"
        />
        {/* <div class="h-[278px] w-[278px] absolute top-0 left-0 flex flex-col justify-center items-center bg-cyan-main opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
          This Is The Overlay
        </div> */}
      </div>
      <h2 className="mt-6 mx-6 h-[28px] w-[278px] font-[600] text-[22px] text-white font-Outfit">
        Equilibrium #3429
      </h2>
      <h3 className="text-soft-blue font-Outfit font-[300] h-[52px] w-[250px] mt-3 mx-6 ">
        Our Equilibrium collection promotes balance and calm.
      </h3>
      <div className="h-[19px] w-[278px]  flex mx-6 mt-4">
        <div className="flex items-center">
          <EthIcon />
          <span className="text-cyan-main font-[600] font-Outfit text-[15px] ml-[7px]">
            0.041 ETH
          </span>
        </div>
        <div className="ml-[98px] flex items-center">
          <ClockIcon />
          <span className="text-soft-blue ml-[7px] text-[15px] font-Outfit">
            3 days left
          </span>
        </div>
      </div>
      <div className="h-[1px] w-[278px] bg-very-dark-blue-line mt-4 mx-6" />
      <div className="flex mt-4 mx-6 items-center">
        <Image
          className="w-[33px] h-[33px] border-4 border-green-600 rounded-full"
          alt="NFT logo"
          src={"/images/image-avatar.png"}
          loading="eager"
          height={33}
          width={33}
          layout="fixed"
        />

        <h2 className="text-[15px] font-[400] font-Outfit mx-4">
          {" "}
          <span className="text-soft-blue ">Creation of</span>{" "}
          <span className="text-white"> Jules Wyvern</span>
        </h2>
      </div>
    </div>
  );
}

export default NftCard;
