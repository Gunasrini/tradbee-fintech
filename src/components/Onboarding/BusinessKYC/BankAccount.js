function BankAccount() {
    return (
        <div>
            <h3>Bank Account</h3>
            <form>
                <div className="dashboard-form-row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Bank Name" />
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Account Number" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Repeat Account Number" />
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <select className="form-select form-control">
                                <option>Account Type</option>
                                <option>Savings</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="IFSC Code" />
                        </div>
                    </div>
                </div>
                <div className="dashboard-form-row d-flex">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Account Holder Name" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label><strong>Account Purpose</strong></label>
                            <div className="radio-group">
                                <label><input type="checkbox" /> <span>Repayment</span></label>
                                <label><input type="checkbox" />
                                    <span>Disbursement</span></label>
                                <label><input type="checkbox" /> <span>Both</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}


export default BankAccount