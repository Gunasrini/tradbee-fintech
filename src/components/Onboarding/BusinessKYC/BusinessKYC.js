import React from 'react'
import { useMultiStepForm } from '../../../hooks/useMultiStepForm.ts'
import CompanyDetail from './CompanyDetail'
import BusinessAddress from "./BusinessAddress.js"
import Documents from "./Documents.js"
import BusinessVerfication from "./BusinessVerfication.js"
import BankAccount from "./BankAccount.js"
import BankAccountList from "./BankAccountList.js"

export default function BusinessKYC() {
    const { step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <CompanyDetail />,
            <BusinessAddress />,
            <Documents />,
            <BusinessVerfication />,
            <BankAccount />,
            <BankAccountList />
        ])

    function nextPage() {
        if (!isLastStep) return next()
        alert("Steps completed!")
    }
    return (
        <div className="subcontent-wrapper">
            <div className="title">
                <h3>Business KYC <span className="inprogress-text text-primary">In Progess</span></h3>
            </div>
            <div className="inner-dashboard">
                <div className="left-navtabs">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">Business Info</a>
                        </li>
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">Verification</a>
                        </li>
                        <li className="nav-item">
                            <i className="far fa-clock"></i>
                            <a className="nav-link" href="#">Bank Account</a>
                        </li>
                    </ul>
                </div>
                <div className="right-form-content">
                    {step}
                </div>
            </div>
            <div className="nextpage-section">
                {!isFirstStep && (<input type="submit" onClick={back} className="btn btn-outline-secondary btn" value="PREVIOUS" />)}
                <input type="submit" onClick={() => nextPage()} className="btn btn-secondary btn" value="NEXT" />
            </div>
        </div>
    )
}
