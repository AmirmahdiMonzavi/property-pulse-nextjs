"use client";

import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

import { Property } from "./PropertyCard";

const ShareButtons = ({ property }: { property: Property }) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN!}/properties/${
    property._id
  }`;

  return (
    <>
      <h3 className="text-xl font-bold text-center pt-2">
        Share This Property
      </h3>
      <div className="flex gap-3 justify-center pb-5">
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={40} round={true} />
        </FacebookShareButton>
        <TwitterShareButton url={shareUrl} title={property.name}>
          <TwitterIcon size={40} round={true} />
        </TwitterShareButton>
        <WhatsappShareButton url={shareUrl} title={property.name}>
          <WhatsappIcon size={40} round={true} />
        </WhatsappShareButton>
        <EmailShareButton
          url={shareUrl}
          subject={property.name}
          body={`Check out this property listing: ${shareUrl}`}
        >
          <EmailIcon size={40} round={true} />
        </EmailShareButton>
      </div>
    </>
  );
};

export default ShareButtons;
