import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Container,  
  Text,
  Modal,
  Input,
  Progress,
  FileInput,
  Notification, rem, Alert 
} from "@mantine/core";
import { IconX, IconCheck, IconHeart } from '@tabler/icons-react';

import classes from "./Navbar.module.css";
import { a } from "react-spring";

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

  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answer1, setAnswers1] = useState({});
  const [answer2, setAnswers2] = useState({});
  const [answer3, setAnswers3] = useState({});
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [resume, setResume] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const xIcon = <IconX style={{ width: rem(20), height: rem(20) }} />;
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;
  const icon = <IconHeart />;
  const accessKey = "u$rf39a97b4c2c84883a5d2a603f6c14208";
  const secretKey = "5e4268b6b77fed64ce1d2e74f728d76873f90e9b";
  const host = "api-in21.leadsquared.com";

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
    const current = questions.find(question => question.id === currentQuestion);

    const isCurrentQuestionAnswered = () => {
      if (current.type1 === "mcq") {
        return selectedOption1 !== null && selectedOption2 !== null && selectedOption3 !== null;
      } else if (current.type3 === "file") {
        return answer1[currentQuestion] && answer2[currentQuestion] && resume;
      } else {
        return answer1[currentQuestion] && answer2[currentQuestion] && answer3[currentQuestion];
      }
    };

    if (isCurrentQuestionAnswered()) {
      setCurrentQuestion(currentQuestion < questions.length ? currentQuestion + 1 : questions.length);
      setErrorMessage('');
    } else {
      alert("error");
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
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

  const handleChange1 = (e) => {
    setAnswers1({ ...answer1, [currentQuestion]: e.target.value });
  };

  const handleChange2 = (e) => {
    setAnswers2({ ...answer2, [currentQuestion]: e.target.value });
  };

  const handleChange3 = (e) => {
    setAnswers3({ ...answer3, [currentQuestion]: e.target.value });
  };

  const handleSubmit = () => {
    const formData = [
      { Attribute: "FirstName", Value: answer2[1] }, // Assuming answer2[1] is the name
      { Attribute: "EmailAddress", Value: answer1[1] }, // Assuming answer1[1] is the email
      { Attribute: "Phone", Value: answer3[1] }, // Assuming answer3[1] is the phone
      { Attribute: "mx_Highest_Level_of_Education", Value: selectedOption1 },
      { Attribute: "mx_Are_you_currently_an_International_Student", Value: selectedOption2 },
      { Attribute: "mx_Experience", Value: answer1[3] }, // Assuming answer1[3] is the experience (adjust accordingly)
      { Attribute: "mx_Your_Current_Status", Value: answer2[3] }, // Assuming answer2[3] is the designation (adjust accordingly)
      { Attribute: "mx_Resume_Shared", Value: resume ? resume.name : "" },
      { Attribute: "mx_City", Value: answer1[4] }, // Assuming answer1[4] is the city (adjust accordingly)
      { Attribute: "mx_Country", Value: answer2[4] }, // Assuming answer2[4] is the country (adjust accordingly)
      { Attribute: "Source", Value: "HomePage_form" },
    ];
    // `https://${host}/v2/LeadManagement.svc/Lead.Capture?accessKey=${accessKey}&secretKey=${secretKey}`, real key
    fetch(`https://${host}/v2/LeadManagement.svc/Lead.Capture?accessKey=${accessKey}&secretKey=${secretKey}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Add any other headers required by your API
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success");
        // Handle success response
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
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
          <div className="mb-2">
            <h2 className="h3 py-4">{current.text1}</h2>
            <Input type={current.type1} placeholder={current.placeholder1} value={answer1[currentQuestion] || ''} onChange={handleChange1} />
          </div>
          <div className="mb-2">
            <h2 className="h3 py-4">{current.text2}</h2>
            <Input type={current.type2} placeholder={current.placeholder2} value={answer2[currentQuestion] || ''} onChange={handleChange2} />
          </div>
          <div className="mb-2">
            <h2 className="h3 py-4">{current.text3}</h2>
            <FileInput type={current.type3} placeholder={current.placeholder3} onChange={handleResumeChange} />
          </div>
          <div className="d-flex flex-row gap-4">
            <button onClick={handleNextQuestion} className="button-g btn text-light fw-bold">Next</button>
            <button onClick={handlePreviousQuestion} className="button-g btn text-light fw-bold">Back</button>
          </div>
        </Container>
      );
    } else {
      return (
        <Container className="text-light">
          <div className="progress-bar" style={{ width: `${((currentQuestion - 1) / questions.length) * 100}%` }}></div>
          <div className="mb-2">
            <h2 className="h3 py-4">{current.text1}</h2>
            <Input type={current.type1} placeholder={current.placeholder1} value={answer1[currentQuestion] || ''} onChange={handleChange1} />
          </div>
          <div className="mb-2">
            <h2 className="h3 py-4">{current.text2}</h2>
            <Input type={current.type2} placeholder={current.placeholder2} value={answer2[currentQuestion] || ''} onChange={handleChange2} />
          </div>
          <div className="mb-2">
            <h2 className="h3 py-4">{current.text3}</h2>
            <Input type={current.type3} placeholder={current.placeholder3} value={answer3[currentQuestion] || ''} onChange={handleChange3} />
          </div>
          <div className="d-flex flex-row gap-4">
            {currentQuestion === questions.length ? (
              <button onClick={handleSubmit} className="button-g btn text-light fw-bold">Submit</button>
            ) : (
              <button onClick={handleNextQuestion} className="button-g btn text-light fw-bold">Next</button>
            )}
            <button onClick={handlePreviousQuestion} className="button-g btn text-light fw-bold">Back</button>
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
