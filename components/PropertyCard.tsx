import Image from "next/image";
import Link from "next/link";
import {
  FaBed,
  FaBath,
  FaRulerCombined,
  FaMoneyBill,
  FaMapMarker,
} from "react-icons/fa";

export type Property = {
  _id: string;
  owner: string;
  name: string;
  type: string;
  description: string;
  location: {
    street: string;
    city: string;
    state: string;
    zipcode: string;
  };
  beds: number;
  baths: number;
  square_feet: number;
  amenities: string[];
  rates: {
    weekly?: number;
    monthly?: number;
    nightly?: number;
  };
  seller_info: {
    name: string;
    email: string;
    phone: string;
  };

  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
};

const PropertyCard = ({ property }: { property: Property }) => {
  const getRate = (property: Property) => {
    if (property.rates.monthly) {
      return `$${property.rates.monthly}/mo`;
    } else if (property.rates.weekly) {
      return `$${property.rates.weekly}/wk`;
    } else if (property.rates.nightly) {
      return `$${property.rates.nightly}/nightly`;
    }
  };

  return (
    <div className="rounded-xl shadow-md relative">
      <Image
        src={`/images/properties/${property.images[0]}`}
        alt={property.name}
        width={0}
        height={0}
        sizes="100vw"
        className="w-full h-auto rounded-t-xl"
      />
      <div className="p-4">
        <div className="text-left md:text-center lg:text-left mb-6">
          <div className="text-gray-600">Apartment</div>
          <h3 className="text-xl font-bold">Boston Commons Retreat</h3>
        </div>
        <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
          {getRate(property)}
        </h3>

        <div className="flex justify-center gap-4 text-gray-500 mb-4">
          <p className="flex flex-col items-center justify-center gap-1 lg:flex-row">
            <FaBed className="md:hidden lg:inline" />
            <span className="md:hidden lg:inline">{property.beds} Beds</span>
          </p>
          <p className="flex flex-col items-center justify-center gap-1 lg:flex-row">
            <FaBath className="md:hidden lg:inline" />
            <span className="md:hidden lg:inline">{property.baths} Baths</span>
          </p>
          <p className="flex flex-col items-center justify-center gap-1 lg:flex-row">
            <FaRulerCombined className="md:hidden lg:inline" />

            <span className="md:hidden lg:inline">
              {property.square_feet} sqft
            </span>
          </p>
        </div>

        <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
          <p className="flex flex-col items-center justify-center gap-1 lg:flex-row">
            <FaMoneyBill className="md:hidden lg:inline" />
            Weekly
          </p>
          <p className="flex flex-col items-center justify-center gap-1 lg:flex-row">
            <FaMoneyBill className="md:hidden lg:inline" /> Monthly
          </p>
        </div>

        <div className="border border-gray-100 mb-5"></div>

        <div className="flex flex-col lg:flex-row justify-between mb-4">
          <div className="flex items-center gap-2 mb-4 lg:mb-0">
            <FaMapMarker className=" text-orange-700" />
            <span className="text-orange-700"> Boston MA </span>
          </div>
          <Link
            href={`properties/${property._id}`}
            className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
