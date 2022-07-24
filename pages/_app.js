import '../styles/globals.css'
import Script from 'next/script';
import Logo from '../public/logo.jpg'
import Image from 'next/image';

function MyApp({ Component, pageProps }) {
  return (
  <div className="w-screen lg:min-h-screen min-;h-full flex-col flex justify-center items-center p-2 font-poppins">
    <div id="fb-root"></div>

<div id="fb-customer-chat" className="fb-customerchat"></div>
<Script id="messenger-chat" strategy="lazyOnload">
  {`
      var chatbox = document.getElementById('fb-customer-chat');
      chatbox.setAttribute("page_id", "102535169138494");
      chatbox.setAttribute("attribution", "biz_inbox");

      window.fbAsyncInit = function() {
        FB.init({
          xfbml            : true,
          version          : 'v12.0'
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
  `}
</Script>
<Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
    <div className="w-full lg:w-5/12 border-10 border-black rounded-lg min-h-full p-2 shadow-3xl font-poppins text-black">
      <Component {...pageProps} />
    </div>
  </div>
  );
}

export default MyApp
