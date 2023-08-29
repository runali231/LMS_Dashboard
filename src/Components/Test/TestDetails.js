import React, { useState, useEffect } from 'react'
import '../Css/CourseDetails.css'
import { getToken } from '../../util.token';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const TestDetails = () => {

    const [testData, setTestData] = useState([])

    useEffect(() => {
        getTestDetails()
    }, [])
    const { id } = useParams();

    const getTestDetails = () => {
        const cId = localStorage.getItem("course_id");
        const token = getToken()
        const userId = "820ef9fe-43c1-4a57-a279-d3238a7da437";
        const course_Id = cId;
        const sessionId = id;
        var url = new URL(
            `http://localhost:801/api/TestDetails/GetQuestions?UserId=${userId}&CourseId=${course_Id}&SessionId=${sessionId}`
        );

        axios({
            method: "get",
            url: url,
            withCredentials: true,
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                "Access-Control-Allow-Origin": "*",
                Authorization: `Bearer ${token}`,
            },
        })
            .then((response) => {
                console.log("perticular test details", response);
                console.log(response.data.data);
                setTestData(response.data.data)
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <>
            {
                testData.map((data, index) => {
                    return (
                        <>
                            <section className="team" key={index}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12 mt-4">
                                            <div className="member d-lg-flex d-md-flex align-items-start">
                                                <div className="member-info mt-3 mt-lg-0 mt-md-0">
                                                    <h4>{index + 1}:  {data.Question}</h4>
                                                    <h5 className="mt-3" >
                                                        Answer: {data.Answer}
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                    )
                })
            }
        </>
    )
}

export default TestDetails