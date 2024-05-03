import React from "react";
import arrow from "../../assests/images/Vector.svg";
import airplane from "../../assests/images/airplane.png";
import paperplane from "../../assests/images/paperplane.png";
import classes from "./Navbar.module.css";

import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { notifications } from '@mantine/notifications';

const Herosection = (props) => {
  const {
    header,
    subhead1,
    subhead2,
    headerbutton,
    subheaderbutton,
    dp,
    flag1,
    flag2,
    flag3,
    flag4,
    users,
    insta,
    twitter,
    yt,
    linkedin,
    studentnum,
    box1header,
    box1subhead,
    box2header,
    box2subhead,
    box3header,
    box3subhead,
    box4header,
    box4subhead,
    li1,
    li2,
    li3,
    li4,
  } = props.data[0];
  const [opened, { open, close }] = useDisclosure(false);

  // Immigration calculator javascript
  function validatePhoneNumber(phoneNumber) {
    const minLength = 4;
    const maxLength = 15;

    const phoneNumberLength = phoneNumber.length;

    return phoneNumberLength >= minLength && phoneNumberLength <= maxLength;
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const qualification = document.getElementById("qualification").value;
    const field = document.getElementById("field").value;
    // const university = document.getElementById("university").value.trim(); // Trim leading/trailing
    const phoneInput = document.getElementById("phone");
    // //   const pr = document.getElementById('pr').value;
    const countryCodeInput = document.getElementById("countryCode");
    const phoneNumber = phoneInput.value; // Adding "+91" prefix
    const countryCodeRegex = /^\+[0-9-]+$/;
    // const accessKey = "u$rda62c0b214d9d6b3162d630c36770a29";
    // const secretKey = "5ddd52e9851471facf3bc7264aaa60203191e235";
    // const host = "api-in21.leadsquared.com";

    if (!validatePhoneNumber(phoneNumber)) {
      // alert("Invalid phone number. Please enter a valid phone number.");
      notifications.show({
        color: 'red',
        title: 'Invalid phone number.',
        message: 'Please enter a valid phone number.',
        classNames: classes,
      })
      return;
    }
    if (!countryCodeRegex.test(countryCodeInput.value)) {
      // alert("Invalid country code. Please enter a valid country code.");
      notifications.show({
        color: 'red',
        title: 'Invalid country code.',
        message: 'Please enter a valid country code.',
        classNames: classes,
      })
      return;
    }
    notifications.show({
      title: 'Form Submitted',
      message: 'You will be be contacted in 48 hours',
      classNames: classes,
      color:"green"
    })
    // // check for phone number validation before POST request

    // const formData = [
    //   {
    //     Attribute: "FirstName",
    //     Value: name,
    //   },
    //   {
    //     Attribute: "Phone",
    //     Value: phoneInput,
    //   },
    //   {
    //     Attribute: "mx_College_Name",
    //     Value: university,
    //   },
    //   {
    //     Attribute: "mx_Degree",
    //     Value: qualification,
    //   },
    //   {
    //     Attribute: "mx_Field",
    //     Value: field,
    //   },
    //   {
    //     Attribute: "Source",
    //     Value: "immigration-form",
    //   },
    // ];

    // fetch(
    //   // `https://${host}/v2/LeadManagement.svc/Lead.Capture?accessKey=${accessKey}&secretKey=${secretKey}`, real key
    //   `https://${host}/v2/LeadManagement.svc/Lead.Capture?accessKey=${accessKey}`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       // Add any other headers required by your API
    //     },
    //     body: JSON.stringify(formData),
    //   }
    // )
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success");
    //     // Handle success response
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //     // Handle error
    //   });

    let responseMessage = `Hi ${name}, <br> Thanks for using the immigration calculator. Here are your results:<br>`;
    let countries = [];

    if (field === "IT" || field === "Cybersecurity") {
      countries.push(
        ...[
          "Australia",
          "Canada",
          "UK",
          "Austria",
          "Belgium",
          "Bosnia and Herzegovina",
          "Bulgaria",
          "Croatia",
          "Cyprus",
          "Japan",
          "Czech Republic",
          "Denmark",
          "Estonia",
          "Finland",
          "France",
          "Germany",
          "Georgia",
          "Greece",
          "Hungary",
          "Ireland",
          "Italy",
          "Latvia",
          "Lithuania",
          "Luxembourg",
          "Netherlands",
          "Norway",
          "Poland",
          "Portugal",
          "Serbia",
          "Sweden",
          "Switzerland",
          "Hong Kong",
          "UAE",
        ]
      );
    } else if (field === "Healthcare" || field === "Education") {
      countries.push(
        ...[
          "Australia",
          "Canada",
          "UK",
          "Austria",
          "Belgium",
          "Bosnia and Herzegovina",
          "Bulgaria",
          "Croatia",
          "Cyprus",
          "Japan",
          "Czech Republic",
          "Denmark",
          "Estonia",
          "Finland",
          "France",
          "Germany",
          "Georgia",
          "Greece",
          "Hungary",
          "Ireland",
          "Italy",
          "Latvia",
          "Lithuania",
          "Luxembourg",
          "Netherlands",
          "Norway",
          "Poland",
          "Portugal",
          "Serbia",
          "Sweden",
          "Switzerland",
          "Hong Kong",
        ]
      );
    } else if (field === "Finance") {
      countries.push(
        ...[
          "UK",
          "Luxembourg",
          "Australia",
          "Denmark",
          "Estonia",
          "Finland",
          "France",
          "Germany",
          "Netherlands",
          "Norway",
          "Poland",
          "Hong Kong",
          "UAE",
        ]
      );
    } else {
      countries.push(...["UK", "Europe"]);
    }

    if (qualification === "Masters") {
      countries.push(...["Sweden", "Portugal", "Austria", "Germany"]);
    } else if (qualification === "Bachelors") {
      countries.push(...["UK", "Netherlands", "Japan", "South Korea", "UAE"]);
    }

    let uniquecountries = Array.from(new Set(countries));

    const countriesString =
      uniquecountries.splice(0, uniquecountries.length - 1).join(", ") +
      ` & ${uniquecountries.at(-1)}.`;

    responseMessage += countriesString;

    responseMessage +=
      "<br>-> If you want to apply for PR, Canada and Australia are your best chances";
    responseMessage +=
      "<br>-> You can also get a jobseeker visa in more than 10 countries and move WITHOUT GETTING A JOB";
    responseMessage +=
      "<br><br><br>If you want a FREE detailed review of your profile with jobseeker options and links to start the process, please send your resume to <a href='mailto:support@raviopedia.com'>support@raviopedia.com</a>,We will respond with your FREE review. See you on the other side!";
    document.getElementById("result-container").style.display = "block";
    document.getElementById("result-container").innerHTML = responseMessage;

    document.getElementById("immigration-form").reset();
    console.log("form")
  }
  return (
    <div>
      <div class="container justify-content-center p-4">
        <div class="row d-flex g-2">
          <div class="col d-flex align-items-center">
            <div class="col-sm-12 col d-flex justify-content-center align-items-start g-2 flex-column">
              <div class="col d-flex flex-row justify-items-center gap-2">
                <img
                  src={flag1}
                  class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
                <img
                  src={flag2}
                  class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
                <img
                  src={flag3}
                  class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
                <img
                  src={flag4}
                  class="img-fluid rounded-top animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
              </div>
              <div class="col">
                <h1 class="display-4 head-txt fw-bold">{header}</h1>
              </div>
              <div class="col">
                <h5 class="h6 head-txt">
                  {subhead1} <br />
                  {subhead2}
                </h5>
                <div>
                  <ol class="h6 head-txt">
                    <li>{li1}</li>
                    <li>{li2}</li>
                    <li>{li3}</li>
                    <li>{li4}</li>
                  </ol>
                </div>
              </div>
              <div class="col d-flex justify-content-start gap-2 w-100 py-4">
                <div class="btn text-light fw-bold">
                  <a href="/courses">{headerbutton}</a>
                </div>
                <Modal
                  opened={opened}
                  onClose={close}
                  centered
                  title="Immigration Calculator"
                  size="95%"
                  overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                  }}
                  zIndex={10000}
                >
                  <div class="container-fluid ">
                    <div class="cover-banner d-flex justify-content-center align-items-center">
                      <div class="display-6 text-light">
                        Move Abroad <br />
                        <p class="h6">With out Advance Calculator</p>
                      </div>
                    </div>
                    <div class="container">
                      <div class="row justify-content-center align-items-center g-2">
                        <div class="col-lg-8 col-sm-12">
                          <div class="row justify-content-center align-items-center g-2 py-2">
                            <div class="col">
                              <div class="h4 fw-bold">
                                Immigration Calculator
                              </div>
                            </div>
                            <div class="col d-flex justify-content-end">
                              <img
                                src={airplane}
                                class="img-fluid rounded-top"
                                alt="airplane"
                              />
                            </div>
                          </div>
                          <div class="row justify-content-center align-items-center g-2">
                            <div class="col col-sm-12">
                              <form
                                id="immigration-form"
                                onSubmit={handleSubmit}
                                novalidate
                              >
                                <div class="row py-1">
                                  <div class="col-sm-12 col-lg-6">
                                    <label
                                      for="Name"
                                      class="form-label fw-bold"
                                    >
                                      Name
                                    </label>
                                    <input
                                      type="text"
                                      class="form-control"
                                      placeholder="Name"
                                      aria-label="Name"
                                      id="name"
                                      required
                                    />
                                  </div>
                                  <div class="col-sm-12 col-lg-6">
                                    <label
                                      for="qualification"
                                      class="form-label fw-bold"
                                    >
                                      Qualification
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                      id="qualification"
                                      required
                                    >
                                      <option selected>Select a degree</option>
                                      <option value="Masters">Masters</option>
                                      <option value="Bachelors">
                                        Bachelors
                                      </option>
                                      <option value="phD">phD</option>
                                      <option value="CA">CA</option>
                                      <option value="CPA">CPA</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row py-1">
                                  <div class="col-sm-12 col-lg-6">
                                    <div class="row justify-content-center align-items-center g-2">
                                      <div class="col-sm-5 col-lg-5">
                                        <label
                                          for="countryCode"
                                          class="form-label fw-bold h6"
                                        >
                                          Country Code
                                        </label>
                                        <input
                                          type="text"
                                          class="form-control"
                                          placeholder="County Code"
                                          aria-label="country code"
                                          id="countryCode"
                                          required
                                        />
                                      </div>
                                      <div class="col-sm-7 col-lg-7">
                                        <label
                                          for="phone"
                                          class="form-label fw-bold"
                                        >
                                          Phone Number
                                        </label>
                                        <input
                                          class="form-control"                                
                                          name="phone"
                                          data-name="phone"
                                          placeholder="Phone number"
                                          
                                          // type="number"
                                          id="phone"
                                          
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-sm-12 col-lg-6">
                                    <label
                                      for="field"
                                      class="form-label fw-bold"
                                    >
                                      Field
                                    </label>
                                    <select
                                      class="form-select"
                                      aria-label="Default select example"
                                      id="field"
                                      required
                                    >
                                      <option selected>Select Field</option>
                                      <option value="Finance">Finance</option>
                                      <option value="Accounting">
                                        Accounting
                                      </option>
                                      <option value="Banking">Banking</option>
                                      <option value="Engineering">
                                        Engineering
                                      </option>
                                      <option value="Life Science">
                                        Life Science
                                      </option>
                                      <option value="HR">HR</option>
                                      <option value="Advertising">
                                        Advertising
                                      </option>
                                      <option value="Marketing">
                                        Marketing
                                      </option>
                                      <option value="Education">
                                        Education
                                      </option>
                                      <option value="IT">IT</option>
                                      <option value="Cybersecurity">
                                        Cybersecurity
                                      </option>
                                      <option value="Healthcare">
                                        Healthcare
                                      </option>
                                      <option value="Other">Other</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="row justify-content-center align-items-center g-2">
                                  <div class="col-sm-12 col-lg-6">
                                    <div class="mb-3">
                                      <label
                                        for="exampleInputEmail1"
                                        class="form-label fw-bold"
                                      >
                                        Email address
                                      </label>
                                      <input
                                        type="email"
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Type your email address"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div class="col-sm-12 col-lg-6">
                                    <div class="mb-2 py-1">
                                      <label
                                        for="exampleFormControlTextarea1"
                                        class="form-label fw-bold"
                                      >
                                        Message
                                      </label>
                                      <textarea
                                        class="form-control"
                                        id="form-message"
                                        rows="3"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div class="row justify-content-center align-items-center g-2">
                                  {/* <div class="col">
                                    <div class="mb-3 form-check">
                                      <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="robotcheck"
                                      />
                                      <label
                                        class="form-check-label"
                                        for="robotcheck"
                                        required
                                      >
                                        I'm not a Robot
                                      </label>
                                    </div>
                                  </div> */}
                                  <div class="col d-flex justify-content-center">
                                    <button
                                      type="submit"
                                      class="btn d-flex text-light fw-bold"
                                      // onClick={handleSubmit}
                                    >
                                      Submit
                                      <img
                                        src={paperplane}
                                        class="img-fluid rounded-top px-1"
                                        alt="paperplane"
                                      />
                                    </button>
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div
                              id="result-container"
                              class="result-container"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Modal>
                <button
                  onClick={open}
                  class="wherecanmove btn d-flex flew-row align-items-center"
                >
                  <a>{subheaderbutton}</a>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            </div>
          </div>
          <div class="banner col-sm-12 col-lg-4 d-flex justify-content-center align-items-center g-2">
            <img src={dp} class="img-fluid" alt="Nidhi Nagori" />
          </div>
        </div>
      </div>
      <div class="container flex-row p-2">
        <div class="row d-flex justify-content-center align-items-center g-2">
          <div class=" col d-flex justify-content-center align-items-center ">
            <div class="happy-stn d-flex align-items-center justify-content-center p-2 gap-2">
              <div>
                <img src={users} class="img-fluid rounded-top" alt="" />
              </div>
              <div>
                <p class="h6">{studentnum}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col d-flex justify-content-center align-items-center flex-wrap  gap-4 py-4">
            <div class="box d-flex align-items-center flex-column gap-2 p-4 rounded ">
              <div class="col d-flex flex-row align-items-center gap-1">
                <h1 class="fw-bold">{box1header}</h1>
                <img src={yt} />
              </div>
              <div class="col h6">
                <a
                  href="https://www.youtube.com/@NidhiNagori29"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box1subhead}
                </a>
              </div>
            </div>
            <div class="box d-flex align-items-center flex-column gap-2 p-4 rounded ">
              <div class="col d-flex flex-row align-items-center gap-2">
                <h1 class="fw-bold">{box2header}</h1>
                <img src={twitter} />
              </div>
              <div class="col h6">
                <a
                  href="https://twitter.com/nidhinagori29?lang=en"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box2subhead}
                </a>
              </div>
            </div>
            <div class="box d-flex align-items-center flex-column gap-2 p-3 rounded ">
              <div class="col d-flex flex-row align-items-center gap-2">
                <h1 class="fw-bold">{box3header}</h1>
                <img src={insta} />
              </div>
              <div class="col h6">
                <a
                  href="https://www.instagram.com/nidhinagori29/?hl=en"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box3subhead}
                </a>
              </div>
            </div>
            <div class="box d-flex align-items-center flex-column gap-2 p-3 rounded ">
              <div class="col d-flex flex-row align-items-center ">
                <h1 class="fw-bold">{box4header}</h1>
                <img src={linkedin} />
              </div>
              <div class="col h6">
                <a
                  href="https://www.linkedin.com/in/nidhinagori29/?originalSubdomain=ca"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Follow"
                >
                  {box4subhead}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
