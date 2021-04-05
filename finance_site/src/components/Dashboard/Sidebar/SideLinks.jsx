import React from "react";
import { Wrapper, Link } from "./styles";
import { SiWpengine } from "react-icons/si";
import { AiFillCreditCard } from "react-icons/ai";
import { AiOutlineTransaction } from "react-icons/ai";
import { FaSimCard } from "react-icons/fa";
import { AiFillSetting } from "react-icons/ai";
import { ImSwitch } from "react-icons/im";

const SideLinks = () => {
  return (
    <Wrapper>
      <Link>
        <SiWpengine style={{ fontSize: 25, color: "#000000" }} />
        <span>Home</span>
      </Link>
      <Link>
        <AiFillCreditCard style={{ fontSize: 25, color: "#000000" }} />
        <span>Cards</span>
      </Link>
      <Link>
        <AiOutlineTransaction style={{ fontSize: 25, color: "#000000" }} />
        <span>Transactions</span>
      </Link>
      <Link>
        <FaSimCard style={{ fontSize: 25, color: "#000000" }} />
        <span>Airtime</span>
      </Link>
      <Link>
        <AiFillSetting style={{ fontSize: 25, color: "#000000" }} />
        <span>Settings</span>
      </Link>
      <Link>
        <ImSwitch style={{ fontSize: 25, color: "#000000" }} />
        <span>Logout</span>
      </Link>
    </Wrapper>
  );
};

export default SideLinks;
