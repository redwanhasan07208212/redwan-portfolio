import redwan from "@/assets/images/redwan.jpg";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div>
      <div className="container">
        <Image src={redwan} alt="redwan hasan" height={424} width={424} />
      </div>
    </div>
  );
};
