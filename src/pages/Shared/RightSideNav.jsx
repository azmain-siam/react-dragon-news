import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

const RightSideNav = () => {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-xl font-semibold text-[#403F3F] mb-4">
          Login With
        </h3>
        <div className="space-y-2">
          <button className="btn btn-outline w-full">
            <FaGoogle />
            Login with Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>

      {/* Find Us */}
      <div>
        <h3 className="text-xl font-semibold text-[#403F3F] mb-4">
          Find Us On
        </h3>
        <div>
          <div className="border rounded-t-lg p-4 flex items-center gap-4">
            <FaFacebookF size={18} />
            <p className="text-[#706F6F] font-semibold">Facebook</p>
          </div>
          <div className="border-x p-4 flex items-center gap-4">
            <FaTwitter size={18} />
            <p className="text-[#706F6F] font-semibold">Twitter</p>
          </div>
          <div className="border rounded-b-lg p-4 flex items-center gap-4">
            <FaInstagram size={20} />
            <p className="text-[#706F6F] font-semibold">Instagram</p>
          </div>
        </div>
      </div>

      {/* Q Zone */}
      <div className="bg-[#F3F3F3] p-4 ">
        <h3 className="text-xl font-semibold text-[#403F3F] mb-4">Q-Zone</h3>
        <img src={qzone1}/>
        <img src={qzone2}/>
        <img src={qzone3}/>
      </div>
    </div>
  );
};

export default RightSideNav;
