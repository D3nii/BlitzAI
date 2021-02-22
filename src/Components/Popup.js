import React from "react";
import { AiFillCloseCircle } from "react-icons/ai";

import "../Style/Popup.css";

const tle = () => {
  document.getElementById("pop").style.display = "block";
  document.getElementById("App").style.opacity = "0.2";
  document.getElementById("pop").style.opacity = "1";
};

let cle = () => {
  document.getElementById("App").style.opacity = "1";
  document.getElementById("pop").style.display = "none";
};

class Servicespop extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div id="pop" onClick={cle}>
          <h2>{this.props.head}</h2>
          <button onClick={cle}>
            <AiFillCloseCircle />
          </button>
          <p>
            The following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.The
            following definitions and rules of interpretation apply in this
            agreement. Company, we, us, or our means General Blockchain, Inc. a
            company registered in Delaware, USA. Our registered office is at 553
            Jackson Street, San Jose, CA-95112, USA, our company registration
            number is 3812333 and our registered employer identification number
            is EIN 81-1737557. Websites means, but is not limited too, our
            websites www.generalblockchain.com, www.imageannotation.ai,
            www.datasetstudio.com, and www.microwork.app. Apps, or Mobile Apps,
            means, but is not limited too, our iOS and Android mobile
            applications. Platform means, but is not limited too, our websites
            data.microwork.io and console.datasetstudio.com. Product means, but
            is not limited too, our machine learning datasets. Services means,
            but is not limited too, our data collection services, image
            annotation services, consultancy services, machine learning model
            development services and our application development services.
            Privacy Policy means our privacy policy located at
            https://www.imageannotation.ai/privacy-policy ‍ This Policy
            describes how Company collects, processes, uses, and handles your
            personal information when you use our Websites, Apps, Platform,
            Products or Services, and content owned or operated by Company, or
            any of the Websites, Apps, Platform, Products or Services This
            Policy aims to give you information on how we collect and processes
            your personal data through your use of our Websites, Apps, Platform,
            Products or Services Throughout this Policy we use the term
            “Designated Countries” to refer to countries in the European Union
            (EU), European Economic Area (EEA), and Switzerland. If you reside
            in the Designated Countries, you have a number of important rights
            we want you to be aware of pursuant to the European General Data
            Protection Regulation (the “GDPR”). These rights will be indicated
            by reference to the Designated Countries where applicable.
          </p>
        </div>
        <span onClick={tle}>{this.props.head}</span>
      </div>
    );
  }
}

export default Servicespop;
