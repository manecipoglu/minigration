import React, { useState, createContext, useContext } from 'react';

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

export const Points = () => {
    const [test, setTest] = useContext(TestContext);

    let points = 0;

    let partner;

    if((test.maritalStatus === "B" || test.maritalStatus === "E") 
        && test.partnerStatus.spouseCit === "A" 
        && test.partnerStatus.spouseJoining === "B") {
        partner = true;
    } else {
        partner = false;
    }
    const agePoints = {
    	A: ["17 years of age or less", 0, 0],
		B: ["18 years of age", 90, 99],
		C: ["19 years of age", 95, 105],
		D: ["20 years of age", 100, 110],
		E: ["21 years of age", 100, 110],
		F: ["22 years of age", 100, 110],
		G: ["23 years of age", 100, 110],
		H: ["24 years of age", 100, 110],
		I: ["25 years of age", 100, 110],
		J: ["26 years of age", 100, 110],
		K: ["27 years of age", 100, 110],
		L: ["28 years of age", 100, 110],
		M: ["29 years of age", 100, 110],
		N: ["30 years of age", 95, 105],
		O: ["31 years of age", 90, 99],
		P: ["32 years of age", 85, 94],
		Q: ["33 years of age", 80, 88],
		R: ["34 years of age", 75, 83],
		S: ["35 years of age", 70, 77],
		T: ["36 years of age", 65, 72],
		U: ["37 years of age", 60, 66],
		V: ["38 years of age", 55, 61],
		W: ["39 years of age", 50, 55],
		X: ["40 years of age", 45, 50],
		Y: ["41 years of age", 35, 39],
		Z: ["42 years of age", 25, 28],
		AA: ["43 years of age", 15, 17],
		AB: ["44 years of age", 5, 6],
		AC: ["45 years of age or more", 0, 0]
    };
    
    // partner ? points += agePoints[test.age][1] : points += agePoints[test.age][2];

    const educationPoints = {
    	A: ["None, or less than secondary (high school)", "0", "0"],
        B: ["Secondary diploma (high school graduation)", "28", "30"],
        C: ["One-year program at a university, college, trade or technical school, or other institute", "84", "90"],
        D: ["Two-year program at a university, college, trade or technical school, or other institute", "91", "98"],
        E: ["Bachelor's degree (three or more year program at a university, college, trade or technical school, or other institute)", "112", "120"],
        F: ["Two or more certificates, diplomas or degrees. One must be for a program of three or more years", "119", "128"],
        G: ["Master's degree, or professional degree needed to practice in a licensed profession (see Help)", "126", "135"],
        H: ["Doctoral level university degree (PhD)", "140", "150"]
    };
    // partner ? points += agePoints[test.age][1] : points += agePoints[test.age][2];

    return (
        <div>points</div>
    )
}   
    