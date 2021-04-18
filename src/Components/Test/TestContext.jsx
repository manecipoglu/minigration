import React, { useState, createContext } from 'react';

export const TestContext = createContext();

export const TestProvider = (props) => {
    const [test, setTest] = useState({
        maritalStatus: "",
        partnerStatus: {
            spouseCit: "",
            spouseJoining: ""
        },
        age: "",
        education: {
            education: "",
            cadDegree: "",
            levelCadDegree: ""
        },
        language: {
            lessThanTwoYears: "",
            languageTest: "",
            testScores: {
                speaking: "",
                listening: "",
                reading: "",
                writing: ""
            },
            otherLanguage: "",
            otherTestScores: {
                speaking: "",
                listening: "",
                reading: "",
                writing: ""
            }
        },
        workExperience: {
            canadianWorkExperience: "",
            foreignWorkExperience: ""
        },
        certificate: "",
        jobOffer: {
            jobOffer: "",
            jobNOC: ""
        },
        nomination: "",
        sibling: "",
        spouse: {
            spouseEducation: "",
            spouseWorkXp: "",
            spouseLanguage: {
                spouseLanguage: "",
                spouseTestScores: {
                    speaking: "",
                    listening: "",
                    reading: "",
                    writing: ""
                }
            }
        }
    });
    return (
        <TestContext.Provider value={[test, setTest]}>
            {props.children}
        </TestContext.Provider>
    );
}