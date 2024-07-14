import { Footer, FooterDivider } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitterX, BsGithub} from "react-icons/bs";

const FooterComp = () => {
  return (
    <Footer
      container
      className="border border-t-4 border-gray-300 bg-amber-50"
    >
      <div className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-around w-full">
          <div className="mt-4 mx-4">
            <Link
              to="/"
              className="text-lg sm:text-2xl font-semibold dark:text-white"
            >
              <span className="px-2 py-2 rounded-lg bg-gradient-to-r from-red-600 via-purple-500 to-blue-600 text-white">
                Memoria
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 my-5 mx-5 sm:grid-cols-3 gap-6">
            <div>
              <Footer.Title title="About" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="http://localhost:5173/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Memoria
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Author
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us"/>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/anokris04"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Discord
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Privacy Policy
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col>
                <Footer.Link href="#" target="_blank" rel="noopener noreferrer">
                  Terms & Conditions
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright by="Memoria" year={new Date().getFullYear()}/>
          <div className="flex gap-6 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook}/>
            <Footer.Icon href="#" icon={BsInstagram}/>
            <Footer.Icon href="#" icon={BsTwitterX}/>
            <Footer.Icon href="#" icon={BsGithub}/>
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComp;
