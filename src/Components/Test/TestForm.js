import React, { useState, useEffect } from "react";
// import { getToken } from "../util.token";
import axios from "axios";
import { getToken } from "../../util.token";
import '../Css/Test.css'
import { useParams } from 'react-router-dom';

const TestForm = () => {
  const cId = localStorage.getItem("course_id");
  const [forms, setForms] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    handleAddForm();
    console.log("sID", id)
  },[]);

  
  const handleAddForm = () => {
    setForms([
      ...forms,
      {
        sessionId: id,
        question: "",
        option_1: "",
        option_2: "",
        option_3: "",
        option_4: "",
        answer: "",
      },
    ]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedForms = [...forms];
    updatedForms[index][field] = value;
    setForms(updatedForms);
  };

  const handleDeleteForm = (index) => {
    const updatedForms = [...forms];
    updatedForms.splice(index, 1);
    setForms(updatedForms);
  };

  const AddTest = () => {
    const token = getToken();
    const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
    var url = new URL(`http://localhost:801/api/TestDetails`);
    const data = {
      courseId: cId,
      userId: userId,
      testArray: forms,
    };
    axios({
      method: "post",
      url: url,
      data: data,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        console.log(response);

        setForms([
          {
            sessionId: id,
            question: "",
            option_1: "",
            option_2: "",
            option_3: "",
            option_4: "",
            answer: "",
          },
        ]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <section className="container add-test">
        <h4 className="title mx-5 mt-3">Add Test</h4>
        {forms.map((form, index) => {
          return (
            <>
              <div key={index} className="container mt-4 test">
                <div className="test-form row">
                  <div className="form-field col-lg-12">
                    <input
                      id={`question-${index}`}
                      className="input-text"
                      type="text"
                      value={form.question}
                      onChange={(e) =>
                        handleInputChange(index, "question", e.target.value)
                      }
                    />
                    <label
                      htmlFor={`question-${index}`}
                      className="label"
                      placeholder=""
                    >
                      Write Question
                    </label>
                  </div>
                  <div className="form-field col-lg-6">
                    <input
                      id={`option_1-${index}`}
                      className="input-text"
                      type="text"
                      value={form.option_1}
                      onChange={(e) =>
                        handleInputChange(index, "option_1", e.target.value)
                      }
                    />
                    <label htmlFor={`option_1-${index}`} className="label">
                      Enter Option 1
                    </label>
                  </div>
                  <div className="form-field col-lg-6">
                    <input
                      id={`option_2-${index}`}
                      className="input-text"
                      type="text"
                      value={form.option_2}
                      onChange={(e) =>
                        handleInputChange(index, "option_2", e.target.value)
                      }
                    />
                    <label
                      htmlFor={`option_2-${index}`}
                      className="label"
                      placeholder=""
                    >
                      Enter option 2
                    </label>
                  </div>
                  <div className="form-field col-lg-6">
                    <input
                      id={`option_3-${index}`}
                      className="input-text"
                      type="text"
                      value={form.option_3}
                      onChange={(e) =>
                        handleInputChange(index, "option_3", e.target.value)
                      }
                    />
                    <label
                      htmlFor={`option_3-${index}`}
                      className="label"
                      placeholder=""
                    >
                      Enter Option 3
                    </label>
                  </div>
                  <div className="form-field col-lg-6">
                    <input
                      id={`option_4-${index}`}
                      className="input-text"
                      type="text"
                      value={form.option_4}
                      onChange={(e) =>
                        handleInputChange(index, "option_4", e.target.value)
                      }
                    />
                    <label
                      htmlFor={`option_4-${index}`}
                      className="label"
                      placeholder=""
                    >
                      Enter Option 4
                    </label>
                  </div>
                  <div className="form-field col-lg-12">
                    <input
                      id={`answer-${index}`}
                      className="input-text"
                      type="text"
                      value={form.answer}
                      onChange={(e) =>
                        handleInputChange(index, "answer", e.target.value)
                      }
                    />
                    <label htmlFor="answer" className="label" placeholder="">
                      Enter Answer
                    </label>
                  </div>
                  {index !== 0 && ( 
                    <div className="form-field col-lg-12">
                      <button
                        className="submit-btn"
                        onClick={() => handleDeleteForm(index)}
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </>
          );
        })}
        <div className="row mx-4">
          <div className="form-field col-lg-6">
            <input
              className="submit-btn"
              type="submit"
              value="submit"
              name=""
              onClick={AddTest}
            />
          </div>
          <div className="form-field col-lg-6 text-end">
            <input
              className="submit-btn"
              type="submit"
              value="add"
              name=""
              onClick={handleAddForm}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default TestForm;


// import React, { useState, useEffect } from "react";
// import { useQuestionFormFunctions } from "./testApi";


// const QuestionFormContent = () => {
//   const [forms, setForms] = useState([]);

//   useEffect(() => {
//     handleAddForm();
//   },[]);

//   const { handleAddForm, handleInputChange, handleDeleteForm, AddTest } =
//     useQuestionFormFunctions(forms, setForms); 

//     return (
//       <>
//         <style jsx>
//           {`
//             .test {
//               max-width: 95%;
//               margin: 50px auto;
//               position: relative;
//               box-shadow: 0 10px 30px 0px rgba(0, 0, 0, 0.1);
//               padding: 30px;
//             }
//             .add-test .title {
//               text-align: left;
//               // letter-spacing: 3px;
//               font-size: 2.5em;
//               line-height: 48px;
//               padding-bottom: 20px;
//               color: #5543ca;
//               background: linear-gradient(to left, #f4524d 0%, #5543ca 100%);
//               -webkit-background-clip: text;
//               -webkit-text-fill-color: transparent;
//             }
//             .test-form .form-field {
//               position: relative;
//               margin: 25px 0;
//             }
//             .test-form .input-text {
//               display: block;
//               width: 100%;
//               height: 36px;
//               border-width: 0 0 2px 0;
//               border-color: #5543ca;
//               font-size: 18px;
//               line-height: 26px;
//               font-weight: 400;
//             }
       
//             .test-form .input-text:focus + .label,
//             .test-form .input-text.not-empty + .label {
//               transform: translateY(-24px);
//             }
           
//             .test-form .input-text:focus {
//               outline: none;
//             }
//             .test-form .input-text:not([value=""]) + .label,
//             .test-form .input-text:focus + .label{
//               transform: translateY(-30px);
//             }
//             .test-form .label {
//               position: absolute;
//               bottom: 11px;
//               font-size: 18px;
//               line-height: 26px;
//               font-weight: 400;
//               color: #5543ca;
//               cursor: text;
//               text-transform: capitalize;
//               transition: transform 0.2s ease-in-in;
//             }
//             .add-test .submit-btn {
//               display: inline-block;
//               background-image: linear-gradient(125deg, #a72879, #064497);
//               color: #fff;
//               text-transform: uppercase;
//               letter-spacing: 2px;
//               font-size: 16px;
//               padding: 8px 16px;
//               border: none;
//               width: 200px;
//               cursor: pointer;
//             }
//           `}
//         </style>
//         <section className="container add-test">
//           <h4 className="title mx-5 mt-3">Add Test</h4>
//           {forms.map((form, index) => {
//             return (
//               <>
//                 <div key={index} className="container mt-4 test">
//                   <div className="test-form row">
//                     <div className="form-field col-lg-12">
//                       <input
//                         id={`question-${index}`}
//                         className="input-text"
//                         type="text"
//                         value={form.question}
//                         onChange={(e) =>
//                           handleInputChange(index, "question", e.target.value)
//                         }
//                       />
//                       <label
//                         htmlFor={`question-${index}`}
//                         className="label"
//                         placeholder=""
//                       >
//                         Write Question
//                       </label>
//                     </div>
//                     <div className="form-field col-lg-6">
//                       <input
//                         id={`option_1-${index}`}
//                         className="input-text"
//                         type="text"
//                         value={form.option_1}
//                         onChange={(e) =>
//                           handleInputChange(index, "option_1", e.target.value)
//                         }
//                       />
//                       <label htmlFor={`option_1-${index}`} className="label">
//                         Enter Option 1
//                       </label>
//                     </div>
//                     <div className="form-field col-lg-6">
//                       <input
//                         id={`option_2-${index}`}
//                         className="input-text"
//                         type="text"
//                         value={form.option_2}
//                         onChange={(e) =>
//                           handleInputChange(index, "option_2", e.target.value)
//                         }
//                       />
//                       <label
//                         htmlFor={`option_2-${index}`}
//                         className="label"
//                         placeholder=""
//                       >
//                         Enter option 2
//                       </label>
//                     </div>
//                     <div className="form-field col-lg-6">
//                       <input
//                         id={`option_3-${index}`}
//                         className="input-text"
//                         type="text"
//                         value={form.option_3}
//                         onChange={(e) =>
//                           handleInputChange(index, "option_3", e.target.value)
//                         }
//                       />
//                       <label
//                         htmlFor={`option_3-${index}`}
//                         className="label"
//                         placeholder=""
//                       >
//                         Enter Option 3
//                       </label>
//                     </div>
//                     <div className="form-field col-lg-6">
//                       <input
//                         id={`option_4-${index}`}
//                         className="input-text"
//                         type="text"
//                         value={form.option_4}
//                         onChange={(e) =>
//                           handleInputChange(index, "option_4", e.target.value)
//                         }
//                       />
//                       <label
//                         htmlFor={`option_4-${index}`}
//                         className="label"
//                         placeholder=""
//                       >
//                         Enter Option 4
//                       </label>
//                     </div>
//                     <div className="form-field col-lg-12">
//                       <input
//                         id={`answer-${index}`}
//                         className="input-text"
//                         type="text"
//                         value={form.answer}
//                         onChange={(e) =>
//                           handleInputChange(index, "answer", e.target.value)
//                         }
//                       />
//                       <label htmlFor="answer" className="label" placeholder="">
//                         Enter Answer
//                       </label>
//                     </div>
//                     {index !== 0 && ( 
//                       <div className="form-field col-lg-12">
//                         <button
//                           className="submit-btn"
//                           onClick={() => handleDeleteForm(index)}
//                         >
//                           Delete
//                         </button>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </>
//             );
//           })}
//           <div className="row mx-4">
//             <div className="form-field col-lg-6">
//               <input
//                 className="submit-btn"
//                 type="submit"
//                 value="submit"
//                 name=""
//                 onClick={AddTest}
//               />
//             </div>
//             <div className="form-field col-lg-6 text-end">
//               <input
//                 className="submit-btn"
//                 type="submit"
//                 value="add"
//                 name=""
//                 onClick={handleAddForm}
//               />
//             </div>
//           </div>
//         </section>
//       </>
//     );
// };

// export default QuestionFormContent;
