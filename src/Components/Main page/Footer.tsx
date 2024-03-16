//import Img
import Logo from "@/assets/Logo.png";

function Footer() {
  return (
    <section className="w-full bg-primary-100 py-16 mt-20">
      <div className="flex flex-col md:flex-row justify-between w-5/6 mx-auto max-w-7xl gap-10">
        <div className="flex flex-col gap-5 basis-1/2">
          <figure>
            <img src={Logo} alt="Logo" />
          </figure>
          <p>
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
          <p>© Evogym All Rights Reserved.</p>
        </div>
        <div className="flex flex-col gap-4 basis-1/4">
          <span className="font-bold text-lg">Links</span>
          <span>Massa orci senectus</span>
          <span>Et gravida id et etiam</span>
          <span>Ullamcorper vivamus</span>
        </div>
        <div className="flex flex-col gap-4 basis-1/4">
          <span className="font-bold text-lg">Contact Us</span>

          <span>155 E 3rd St, New York, NY 10009, USA</span>
          <a className="flex items-center gap-2" href="tel:646-678-5005">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            646-678-5005
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
