import SearchIcon from '../../../public/icons/search-purple.svg';
import HeartIcon from '../../../public/icons/heart-icon.svg';
import UserIcon from '../../../public/icons/user-icon.svg';
import MessageIcon from '../../../public/icons/message-icon.svg';
import MobileHeaderLogo from '../../../public/icons/mobile-header-logo.svg';

const MobileFloatingHeader = () => (
  <div className="mobile_floating_header fixed bottom-0 left-0 z-[3] w-full border-t-2 border-t-slate-100 bg-white px-[15px]">
    <div className="flex items-center justify-between py-3 text-[#777777]">
      <div className="w-1/5 text-center">
        <div className="mx-auto w-5">
          <SearchIcon />
        </div>
        <span className="mt-1 block text-xs">Explore</span>
      </div>

      <div className="w-1/5 text-center">
        <div className="mx-auto w-5">
          <HeartIcon />
        </div>
        <span className="mt-1 block text-xs">Wishlist</span>
      </div>

      <div className="w-1/5 text-center">
        <div className="mx-auto -mt-[5px] w-10">
          <MobileHeaderLogo />
        </div>
        {/* <span className="block text-xs mt-1">Order</span> */}
      </div>

      <div className="w-1/5 text-center">
        <div className="svg_icon mx-auto w-5">
          <MessageIcon />
        </div>
        <span className="mt-1 block text-xs">Inbox</span>
      </div>

      <div className="w-1/5 text-center">
        <div className="svg_icon mx-auto w-5">
          <UserIcon />
        </div>
        <span className="mt-1 block text-xs">Profile</span>
      </div>
    </div>
  </div>
);
export default MobileFloatingHeader;
