import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Container,  
  Text,
  Modal,
  Input,
  Progress,
  FileInput
} from "@mantine/core";
import { notifications } from "@mantine/notifications";

import classes from "./Navbar.module.css";

const Herosection = (props) => {
  const {
    subhead1,
    subhead2,
    subheaderbutton,
    flag1,
    flag2,
    flag3,
    flag4,
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
        color: "red",
        title: "Invalid phone number.",
        message: "Please enter a valid phone number.",
        classNames: classes,
      });
      return;
    }
    if (!countryCodeRegex.test(countryCodeInput.value)) {
      // alert("Invalid country code. Please enter a valid country code.");
      notifications.show({
        color: "red",
        title: "Invalid country code.",
        message: "Please enter a valid country code.",
        classNames: classes,
      });
      return;
    }
    notifications.show({
      title: "Form Submitted",
      message: "You will be be contacted in 48 hours",
      classNames: classes,
      color: "green",
    });
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
    console.log("form");
  };
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [answer1, setAnswers1] = useState({});
    const [answer2, setAnswers2] = useState({});
    const [answer3, setAnswers3] = useState({});
    const [selectedOption1, setSelectedOption1] = useState(null);
    const [selectedOption2, setSelectedOption2] = useState(null);
    const [selectedOption3, setSelectedOption3] = useState(null);
    const [resume, setResume] = useState(null);
  
    const questions = [
      {
        id: 1,
        text1: "Enter Your Email Address",
        type1: "email",
        placeholder1: "Enter Email",
        text2: "Please Enter Your Full Name",
        type2: "text",
        placeholder2: "Full Name",
        text3: "Please Enter Your Contact Number",
        type3: "number",
        placeholder3: "Also mention your country code - +91 - for India"
      },
      {
        id: 2,
        text1: "Highest Level of Education",
        type1: "mcq",
        options1: ["Class 10th", "Class 12th", "Diploma", "Bachelors", "Masters/PhD", "Other:"],
        text2: "Are you an International Student, currently?",
        type2: "mcq",
        options2: ["Yes", "No"],
        text3: "Do you already have or will you be able to get a Post Study Work Visa?",
        type3: "mcq",
        options3: ["Yes", "No"],
      },
      {
        id: 3,
        text1: "No. of Years of Work Experience",
        type1: "text",
        placeholder1: "After you've stopped studying",
        text2: "Current Designation",
        type2: "text",
        placeholder2: "Please Enter",
        text3: "Upload Resume",
        type3: "file",
        placeholder3: "Upload Resume Here"
      },
      {
        id: 4,
        text1: "Current Location (City Name)",
        type1: "text",
        placeholder1: "City Name",
        text2: "Current Location (Country Name)",
        type2: "text",
        placeholder2: "Country Name",
        text3: "Please share your queries, feedback & suggestions, here.",
        type3: "text",
        placeholder3: "Please Enter"
      },
      // Add more questions as needed
    ];
  
    const handleNextQuestion = () => {
      setCurrentQuestion(currentQuestion + 1);
    };
  
    const handlePreviousQuestion = () => {
      if (currentQuestion > 1) {
        setCurrentQuestion(currentQuestion - 1);
      } else {
        setCurrentQuestion(currentQuestion);
      }
    };
  
    const handleOptionChange1 = (e) => {
      setSelectedOption1(e.target.value);
    };
  
    const handleOptionChange2 = (e) => {
      setSelectedOption2(e.target.value);
    };
  
    const handleOptionChange3 = (e) => {
      setSelectedOption3(e.target.value);
    };
  
    const handleResumeChange = (e) => {
      setResume(e.target.files[0]);
    };
  
    const renderQuestion = () => {
      const current = questions.find(question => question.id === currentQuestion);
      if (current.type1 === "mcq") {
        return (
          <Container size="xs" className="text-light">
            <div
              className="progress-bar"
              style={{
                width: `${((currentQuestion - 1) / questions.length) * 100}%`,
              }}
            ></div>
            <div className="mb-2">
              <h2 className="h3 py-4">{current.text1}</h2>
              <form>
                {current.options1.map((option1, index1) => (
                  <div key={index1} className="h5 p-2 option-butn">
                    <input
                      className=""
                      type="radio"
                      id={`options1${index1}`}
                      name="option1"
                      value={option1}
                      onChange={handleOptionChange1}
                      checked={selectedOption1 === option1} // Check if this option is selected
                    />
                    <label htmlFor={`options1${index1}`} className="option1 px-2">
                      {option1}
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <div className="mb-2">
              <h2 className="h3 py-4">{current.text2}</h2>
              <form>
                {current.options2.map((option2, index2) => (
                  <div key={index2} className="h5 p-2 option-butn">
                    <input
                      className=""
                      type="radio"
                      id={`option2${index2}`}
                      name="option2"
                      value={option2}
                      onChange={handleOptionChange2}
                      checked={selectedOption2 === option2} // Check if this option is selected
                    />
                    <label htmlFor={`option2${index2}`} className="option2 px-2">
                      {option2}
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <div className="mb-2">
              <h2 className="h3 py-4">{current.text3}</h2>
              <form>
                {current.options3.map((option3, index) => (
                  <div key={index} className="h5 p-2 option-butn">
                    <input
                      className=""
                      type="radio"
                      id={`option3${index}`}
                      name="option3"
                      value={option3}
                      onChange={handleOptionChange3}
                      checked={selectedOption3 === option3} // Check if this option is selected
                    />
                    <label htmlFor={`option3${index}`} className="option px-2">
                      {option3}
                    </label>
                  </div>
                ))}
              </form>
            </div>
            <div className="d-flex flex-row gap-4">
              <button onClick={handleNextQuestion} className="button-g btn text-light fw-bold">Next</button>
              <button onClick={handlePreviousQuestion} className="button-g btn text-light fw-bold">Back</button>
            </div>
          </Container>
        );
      } else if (current.type3 === "file") {
        return (
          <Container className="text-light">
            <div className="progress-bar" style={{ width: `${((currentQuestion - 1) / questions.length) * 100}%` }}></div>
            <div>
              <h2 className="h3 mb-4">{current.text1}<span className="required">*</span></h2>
              <div className="mb-4">
                <Input
                  radius="md"
                  placeholder={current.placeholder1}
                  value={answer1[currentQuestion] || ''}
                  onChange={(e) => setAnswers1({ ...answer1, [currentQuestion]: e.target.value })}
                />
              </div>
            </div>
            <div>
              <h2 className="h3 mb-4">{current.text2}<span className="required">*</span></h2>
              <div className="mb-4">
                <Input
                  radius="md"
                  placeholder={current.placeholder2}
                  value={answer2[currentQuestion] || ''}
                  onChange={(e) => setAnswers2({ ...answer2, [currentQuestion]: e.target.value })}
                />
              </div>
            </div>
            <div>
              <h2 className="h3 mb-4">{current.text3}<span className="required">*</span></h2>
              <div className="mb-4">
              <FileInput label="Upload files" placeholder="Upload files" multiple />
              </div>
            </div>
            <div className="d-flex flex-row gap-4">
              <button onClick={handleNextQuestion} className="button-g btn text-light fw-bold">Next</button>
              <button onClick={handlePreviousQuestion} className="button-g btn text-light fw-bold">Back</button>
            </div>
          </Container>
        );
    } else {
      return (
        <Container class="text-light" >
            <div className="progress-bar" style={{ width: `${(currentQuestion - 1) / questions.length * 100}%` }}></div>
            <div>
              <h2 class="h3 mb-4">{current.text1}<span class="required">*</span></h2>
              <div class="mb-4">
              <Input radius="md" placeholder={current.placeholder1} value={answer1[currentQuestion] || ''}
                  onChange={(e) => setAnswers1({ ...answer1, [currentQuestion]: e.target.value })} />
              </div>
            </div>
            <div>
              <h2 class="h3 mb-4">{current.text2}<span class="required">*</span></h2>
              <div class="mb-4">
              <Input radius="md" placeholder={current.placeholder2} value={answer2[currentQuestion] || ''}
                  onChange={(e) => setAnswers2({ ...answer2, [currentQuestion]: e.target.value })} />
              </div>
            </div>
            <div>
              <h2 class="h3 mb-4">{current.text3}<span class="required">*</span></h2>
              <div class="mb-4">
              <Input radius="md" placeholder={current.placeholder3} value={answer3[currentQuestion] || ''}
                  onChange={(e) => setAnswers3({ ...answer3, [currentQuestion]: e.target.value })} />
              </div>
            </div>
            <div class="d-flex flex-row gap-4">
            <button onClick={handleNextQuestion} class="button-g btn text-light fw-bold">Next</button>
            <button onClick={handlePreviousQuestion} class="button-g btn text-light fw-bold">Back</button>
            </div>
        </Container>
    );
    }
  };

  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div class="row g-2">
            <div class="col-sm-12 col g-2 flex-column d-flex justify-content-center gap-2">
              <div class="col flex-row gap-2 flag d-flex justify-content-center align-items-center">
                <img
                  src={flag3}
                  class="img-fluid rounded animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
                <img
                  src={flag1}
                  class="img-fluid rounded animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
                <img
                  src={flag2}
                  class="img-fluid rounded animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
                <img
                  src={flag4}
                  class="img-fluid rounded animate__animated animate__bounce animate__repeat-2 2"
                  alt=""
                />
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                <h1 class="display-3 head-txt text-light fw-bold text-center">
                  Go Global with{" "}
                  <Text
                    component="span"
                    inherit
                  >
                    Globalogy
                  </Text>
                </h1>
              </div>
              <div class="col d-flex justify-content-center align-items-center">
                <h5 class="h5 head-txt text-center text-light">
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
              <div class="col d-flex justify-content-center gap-2 w-100 py-4">
                <Modal
                  opened={opened}
                  onClose={close}
                  centered
                  title="Questions"
                  size="90%"
                  overlayProps={{
                    backgroundOpacity: 0.55,
                    blur: 3,
                  }}
                  zIndex={10000}
                >
                  <div className="progress-wrapper">
                  <Progress color="green" value={((currentQuestion - 1) / questions.length) * 100} striped animated />;
                  </div>
                  <Container mt="3rem">
                    {currentQuestion <= questions.length ? (
                      renderQuestion()
                    ) : (
                      <p class="h3 d-flex justify-content-center align-items-center text-light">Thank you for answering all questions!</p>
                    )}
                  </Container>
                </Modal>
                <a
                  onClick={open}
                  class="wherecanmove btn d-flex flew-row align-items-center fw-bold p-3"
                >
                  <a>{subheaderbutton}</a>
                  <div class="glare"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Herosection;
