import { Request, Response, NextFunction } from 'express';
import axios, { AxiosResponse } from 'axios';

interface Post {
    userId: Number;
    id: Number;
    title: String;
    body: String;
}

interface Code {
    value: String;
    description: String;
    activeFlag: Boolean;
    displayOrder: Number;
    option1: String;
    option2: String;
    option3: String;
    option4: String;
    option5: String;
    option6: String;
    helpText: String;
}

interface CodeResponse {
    codes: Code[];
    subSystem: String;
    type: String;
}

interface SubCode {
    value: String;
    description: String;
    activeFlag: Boolean;
    displayOrder: Number;
    option1: String;
    option2: String;
    option3: String;
}

interface SubCodeResponse {
    subCodes: SubCode[];
    code: String;
    subSystem: String;
    type: String;
}

const getCodes = async (req: Request, res: Response, next: NextFunction) => {
    
    let states = {
        "codes": [
            {
                "value": "AL",
                "description": "Alabama",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "STATE"
    } as CodeResponse;

    let sections = {
        "codes": [
            {
                "value": "Ambulatory Care Practitioners",
                "description": "Ambulatory Care Practitioners",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "Clinical Specialists and Scientists",
                "description": "Clinical Specialists and Scientists",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "SECTIONS"
    } as CodeResponse;

    let schoolList = {
        "codes": [
            {
                "value": "University of Alabama",
                "description": "University of Alabama",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "Clemson",
                "description": "Clemson University",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "University of Florida",
                "description": "University of Florida",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "STATE"
    } as CodeResponse;


    let schoolYears = {
        "codes": [
            {
                "value": "2023",
                "description": "2023",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "2024",
                "description": "2024",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "2025",
                "description": "2025",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "55",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "SCHOOL"
    } as CodeResponse;

    let country = {
        "codes": [
            {
                "value": "US",
                "description": "United States",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "COUNTRY"
    } as CodeResponse;

    let gender = {
        "codes": [
            {
                "value": "M",
                "description": "Male",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "F",
                "description": "Female",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "GENDER"
    } as CodeResponse;

    let ethnicity = {
        "codes": [
            {
                "value": "Asian",
                "description": "Asian",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "African-American",
                "description": "African-American",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "Hispanic",
                "description": "Hispanic",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "White",
                "description": "White",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "ETHNICITY"
    } as CodeResponse;

    let phoneType = {
        "codes": [
            {
                "value": "Home",
                "description": "Home",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "Cell",
                "description": "Cell",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "Work",
                "description": "Work",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "PHONE_TYPE"
    } as CodeResponse;
 
    let response = {
        "codes": [
            {
                "value": "CELL",
                "description": "Cell",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "HOME",
                "description": "Home",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            },
            {
                "value": "WORK",
                "description": "Work",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "",
                "option2": "",
                "option3": "",
                "option4": "",
                "option5": "",
                "option6": "",
                "helpText": ""
            }
        ],
        "subSystem": "CUS",
        "type": "PHONE_TYPE"
    } as CodeResponse;
    
    if (req.query.type === 'STATE') {
        return res.status(200).json(states);
    }

    if (req.query.type === 'COUNTRY') {
        return res.status(200).json(country);
    }

    if (req.query.type === 'PHONE_TYPE') {
        return res.status(200).json(phoneType);
    }

    if (req.query.type === 'ETHNICITY') {
        return res.status(200).json(ethnicity);
    }

    if( req.query.type === 'GENDER') {
        return res.status(200).json(gender);
    }

    if (req.query.type === 'SCHOOL') {
        return res.status(200).json(schoolYears);
    }

    if (req.query.type === 'SCHOOL_LIST') {
        return res.status(200).json(schoolList);
    }

    if (req.query.type === 'SECTIONS') {
        return res.status(200).json(sections);
    }

    return res.status(200).json(response);
};

const getSubCodes = async (req: Request, res: Response, next: NextFunction) => {
    
    let position = {
        "subCodes": [
            {
                "value": "AMCARE",
                "description": "Ambulatory Care Practitioner",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "55",
                "option2": "",
                "option3": ""
            },
            {
                "value": "ADOP",
                "description": "Associate or Assistant Director of Pharmacy",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "20",
                "option2": "",
                "option3": ""
            }
        ],
        "code": "PRIMPOS",
        "subSystem": "CUS",
        "type": "DEMOGRAPHIC"
    } as SubCodeResponse;

    let workSetting = {
        "subCodes": [
            {
                "value": "Hospital",
                "description": "Hospital",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "55",
                "option2": "",
                "option3": ""
            },
            {
                "value": "OutPatient",
                "description": "Out Patient",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "20",
                "option2": "",
                "option3": ""
            }
        ],
        "code": "PRIMPOS",
        "subSystem": "CUS",
        "type": "PRACSET"
    } as SubCodeResponse;
    
    let subCodes = {
        "subCodes": [
            {
                "value": "AMCARE",
                "description": "Ambulatory Care Practitioner",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "55",
                "option2": "",
                "option3": ""
            },
            {
                "value": "ADOP",
                "description": "Associate or Assistant Director of Pharmacy",
                "activeFlag": true,
                "displayOrder": 0,
                "option1": "20",
                "option2": "",
                "option3": ""
            }
        ],
        "code": "PRIMPOS",
        "subSystem": "CUS",
        "type": "DEMOGRAPHIC"
    } as SubCodeResponse;

    if (req.query.code === 'PRIMPOS') {
        return res.status(200).json(position);
    }

    if (req.query.code === 'PRACSET') {
        return res.status(200).json(workSetting);
    }
    
    return res.status(200).json(subCodes);
};

const postRegistration = async (req: Request, res: Response, next: NextFunction) => {
    const post: Post = req.body;
    return res.status(200).json(post);
}

const getProductPrices = async (req: Request, res: Response, next: NextFunction) => {
    let prices = {
        "prices": [
            {
                "productSku": "131-MO",
                "price": "27"
            },
            {
                "productSku": "131-1Y",
                "price": "335"
            }
        ]
    }

    return res.status(200).json(prices);
}



export default { getCodes, getSubCodes, postRegistration, getProductPrices };
