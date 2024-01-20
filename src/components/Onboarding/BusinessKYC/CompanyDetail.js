import CompanyDetailModal from "../../../modals/CompanyDetailModal"

function CompanyDetail() {
    return (
        <>
            <div>
                <h3>Company Detail</h3>
                <form>
                    <div className="col-md-12">
                        <div className="col-md-6 d-flex dashboard-form-row">
                            <div className="form-group">
                                <span className="form-control-icon"><i
                                    className="fas fa-calendar-alt"></i></span>
                                <input type="text" className="form-control"
                                    placeholder="Incorporation Date" />
                            </div>
                            <div className="form-group">
                                <select className="form-select form-control">
                                    <option>Company Type</option>
                                    <option>Private Company</option>
                                    <option>Government Company</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex dashboard-form-row">
                            <div className="form-group">
                                <select className="form-select form-control">
                                    <option>Nature of Business</option>
                                    <option>Manufacturer</option>
                                    <option>Retailer</option>
                                    <option>Service Provider</option>
                                    <option>Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <span className="form-control-icon"><i className="fas fa-search"></i></span>
                                <input type="text" className="form-control" placeholder="Industry Type" />
                            </div>
                        </div>
                        <div className="col-md-6 d-flex dashboard-form-row">
                            <div className="form-group">
                                <label><strong>Wish to take loan against collateral?</strong></label>
                                <div className="radio-group">
                                    <label><input type="checkbox" /> <span>Yes</span></label>
                                    <label><input type="checkbox" /> <span>No</span></label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-group">
                                    <select className="form-select form-control">
                                        <option>Select Collateral Type</option>
                                        <option>Property</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 form-add-button">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal"
                                data-bs-target="#companyDetailModal">Add</button>
                        </div>
                    </div>
                </form>
            </div>
            <CompanyDetailModal />
        </>
    )
}

export default CompanyDetail