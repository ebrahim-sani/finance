import React from "react";
import Social from "./inner";
import { ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import {
  Wrapper,
  Component,
  Menu,
  Contact,
  SocialLink,
  EmailSub,
  Icon,
  Head,
  Field,
  Copyright,
  InnerComponent,
} from "./styles";
import { WButton } from "../Buttons/Button";

const Footer = () => {
  return (
    <Wrapper>
      <Component>
        <InnerComponent>
          <Menu>
            <Head>Menu</Head>
            <span>About Us</span>
            <span>My Account</span>
            <span>Services</span>
            <span>Sign in</span>
          </Menu>
          <Contact>
            <Head>Contact Us</Head>
            <span>Address:</span>
            <span></span>
            <span>123 Street Name, City</span>
            <span>Nigeria</span>
            <br />
            <span>Phone:</span>
            <span>(123) 456-7890</span>
            <br />
            <span>Email:</span>
            <span>mail@example.com</span>
          </Contact>
          <SocialLink>
            <Head>Follow Us</Head>
            <Icon>
              <Social icon={<ImLinkedin />} name="LinkedIn" />
            </Icon>
            <Icon>
              <Social icon={<FaTwitter />} name="Twitter" />
            </Icon>
            <Icon>
              <Social icon={<FaYoutube />} name="YouTube" />
            </Icon>
          </SocialLink>
          <EmailSub>
            <Head>Subscibe</Head>
            <Field>
              <input type="email" placeholder="Email" />
              <WButton>Submit</WButton>
            </Field>
          </EmailSub>
        </InnerComponent>
      </Component>
      <Copyright>
        <span>&copy; Finance - 2021</span>
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
