import React, { useState } from "react";

const Donation = () => {
  const [donationAmount, setDonationAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [showCustomInput, setShowCustomInput] = useState(false);

  const handleAmountChange = (event) => {
    const amount = event.target.value;
    setDonationAmount(amount);
    setCustomAmount(amount);
  };

  const handleCustomAmountChange = (event) => {
    const amount = event.target.value;
    setCustomAmount(amount);
    setDonationAmount(amount);
    setShowCustomInput(Number(amount) > 100);
  };

  const handleRadioChange = (event) => {
    const value = event.target.value;
    setShowCustomInput(value === "Other");
    setDonationAmount(value === "Other" ? customAmount : value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle donation submission
  };

  return (
    <div>
      <div className="page-title-area bg-1">
        <div className="container">
          <div className="page-title-content">
            <h2>Donation</h2>
            <ul>
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="active">Donation</li>
            </ul>
          </div>
        </div>
      </div>

      <section className="help-people-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-6 p-0">
              <div className="all-help-content">
                <form className="help-form" style={{ textAlign: "left" }}>
                  <p style={{ textAlign: "left", fontSize: "1.4rem" }}>
                    Bank Details -<br />
                  </p>
                  <p>
                    ISKCON Mayapur’s Bank Account (Domestic):
                    <br />
                    Account Name: ISKCON “International Society For Krishna
                    Consciousness”
                    <br />
                    Savings Account No. : 8512103714
                    <br />
                    Bank: Kotak Mahindra Bank Ltd.
                    <br />
                    Branch Name: H. B. Sarani, Kolkata
                    <br />
                    Branch Address: 21, Centre Point Building, Hemanta Basu
                    Sarani, Kolkata : 700001
                    <br />
                    Branch IFSC: KKBK0006570
                    <br />
                  </p>

                  <p style={{ textAlign: "left", fontSize: "1.4rem" }}>
                    Once the online transfer is made, please send the following
                    details to
                  </p>
                  <div>
                    <p>
                      Email: jpsofficeaccts@gmail.com ,
                      jpsofficemanager@gmail.com
                    </p>
                    <ol>
                      <li>
                        Snapshot of the transaction or the transaction details.
                      </li>
                      <li>The date of transaction.</li>
                      <li>Legal name of the donor.</li>
                      <li>Complete Indian postal address with PIN code.</li>
                      <li>
                        Income Tax PAN Number (Mandatory if donation is more
                        than INR 49,999)
                      </li>
                      <li>
                        Contact details (WhatsApp mobile number must, email ID)
                      </li>
                      <li>
                        Purpose of the deposit (General / Health / Travel /
                        SPDC).
                      </li>
                      <li>
                        Type of donation receipt required: 80 G tax exemption
                        benefit type or General receipt.
                      </li>
                    </ol>
                    <p>
                      No changes will be made after issue of donation receipt.
                    </p>
                    <p>
                      If you have any questions or need assistance with your
                      donation, please contact us:
                    </p>
                    <ul>
                      <li>Email: [Insert Email Address]</li>
                      <li>Phone: [Insert Phone Number]</li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donation;
