import { useState } from "react";
import axios from "axios";
import { getToken } from "../util.token";

export const useQuestionFormFunctions = (initialForms, setForms) => {
  const [forms, internalSetForms] = useState(initialForms);

  const handleAddForm = () => {
    internalSetForms([
      ...forms,
      {
        sessionId: "b5217fee-b37b-4e5e-9ac3-dd92e5d16e73",
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
    internalSetForms(updatedForms);
  };

  const handleDeleteForm = (index) => {
    const updatedForms = [...forms];
    updatedForms.splice(index, 1);
    internalSetForms(updatedForms);
  };

  const AddTest = async () => {
    try {
      const token = getToken();
      const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
      var url = new URL(`http://localhost:801/api/TestDetails`);
      const data = {
        courseId: "ba39ba53-32fe-4ddb-8c56-76bc1bc7f5b2",
        userId: userId,
        testArray: forms,
      };

      const response = await axios.post(url, data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response);

      internalSetForms([
        {
          sessionId: "b5217fee-b37b-4e5e-9ac3-dd92e5d16e73",
          question: "",
          option_1: "",
          option_2: "",
          option_3: "",
          option_4: "",
          answer: "",
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleAddForm,
    handleInputChange,
    handleDeleteForm,
    AddTest,
  };
};
